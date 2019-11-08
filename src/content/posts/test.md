---
title: Designing a Scraper for the UCLA Registrar
date: 11-05-19
---

After taking the past nine months off from school, I was excited to come back to UCLA and once again learn in a formal academic setting. I had a great schedule planned. I'd take compilers, Intro to Digital Humanities, the probability class taught entirely through Texas Hold' Em examples, and Scalable Internet Services.

I grabbed Digital Humanities and compilers on my first pass, and planned on enrolling in Stats and SIS on my second pass. But by the time my second pass was active, Scalable Internet Services had filled up.

So I did what probably absolutely no one except me would do: I decided I'd scrape the UCLA Registrar's website to ensure that I don't miss a class again.

## The Dataset

The UCLA Registrar's Office has a [publicly available list of all classes offered for the most recent quarters](https://sa.ucla.edu/ro/public/soc), which they say is updated hourly. The most common way to search for classes is by what the registrar calls a "Subject Area", a logical grouping of classes. In most cases, like Computer Science, the subject area of Computer Science maps directly to courses offered by the [Computer Science department](https://www.cs.ucla.edu) of UCLA. However, some departments, like the [Department of Asian Languages and Cultures](https://www.alc.ucla.edu), offer many subject areas. A full [department/subject area mapping](https://www.registrar.ucla.edu/Faculty-Staff/Courses-and-Programs/Department-and-Subject-Area-Codes) is provided by the registrar.

## First Attempt: Beautiful Soup

I'd never used Beautiful Soup before, but it seemed like a pretty popular scraping tool on the internet, so I figured I'd give it a go.

After referring to the [very helpful slides](https://github.com/uclaacm/learn.py-s19/tree/master/session-8-web-scraping) that UCLA ACM made last spring about BeautifulSoup, I had a very basic scraper.

```python
from bs4 import BeautifulSoup
import requests

response = requests.get("https://sa.ucla.edu/ro/Public/SOC/Results?t=19F&sBy=subject&sName=Computer+Science+%28COM+SCI%29&subj=COM+SCI&crsCatlg=Enter+a+Catalog+Number+or+Class+Title+%28Optional%29&catlg=&cls_no=&btnIsInIndex=btn_inIndex")

soup = BeautifulSoup(response.content, 'html.parser')

print(soup.prettify())
```

The [URL I used](https://sa.ucla.edu/ro/Public/SOC/Results?t=19F&sBy=subject&sName=Computer+Science+%28COM+SCI%29&subj=COM+SCI&crsCatlg=Enter+a+Catalog+Number+or+Class+Title+%28Optional%29&catlg=&cls_no=&btnIsInIndex=btn_inIndex) specifically links to computer science classes, but each subject area has a similar URL.

I was hoping this would give us the HTML markup of every class and its info. Instead, I got something like:

```html
...
<div id="divClassNames">
  <div class="results">
    <div id="resultsTitle">
      <div class="row-fluid class-title" id="COMSCI0001">
        <h3 class="head">
          <a href="javascript:void(0)" id="COMSCI0001-title">
            1 - Freshman Computer Science Seminar
          </a>
        </h3>
      </div>
      <script type="text/javascript">
        Iwe_ClassSearch_SearchResults.AddToCourseData('COMSCI0001', {
          Term: '19F',
          SubjectAreaCode: 'COM SCI',
          CatalogNumber: '0001    ',
          IsRoot: true,
          SessionGroup: '%',
          ClassNumber: '%',
          SequenceNumber: null,
          Path: 'COMSCI0001',
          MultiListedClassFlag: 'n',
          Token: 'MDAwMSAgICBDT01TQ0kwMDAx',
        })
      </script>
      <div class="row-fluid class-title" id="COMSCI0019001">
        <h3 class="head">
          <a href="javascript:void(0)" id="COMSCI0019001-title">
            19 - From Impossible to I'm Possible: Analysis of Impostor
            Phenomenon
          </a>
          ...
        </h3>
      </div>
    </div>
  </div>
</div>
```

Huh. It seems like the page was more dynamic than I thought. This is actually the result of some nifty design on the Registrar's developer's part. When you get the list of courses for a subject area, the page actually doesn't load all the information about each section. Instead there's some JavaScript and network trickery going on when you interact with the page. When you click on a header, the `Iwe_ClassSearch_SearchResults.AddToCourseData` function, which fires off a network request which returns the data, which is then appended to the page.

## Attempt 2: Puppeteer

All this dynamic content made me start to second-guess the BeautifulSoup approach, so I decided to take a different approach.

The last person I knew who did some scraping of the registrar was [Rishub](http://rishub.com), who ran the now defunct BruinScan. He was a [Selenium](https://docs.seleniumhq.org/) wizard, and I believe that's how he scraped the registrar. So I figured I'd try Selenium.

But, as I started my Selenium research, I realized that [Puppeteer](https://pptr.dev/) solved the same browser automation problem Selenium did. I actually had a small amount of Puppeteer experience from Datadog, where all our frontend acceptance tests used Puppeteer.

And Puppeteer used JavaScript! Perfect, since my JavaScript is better than my Python anyways.

My first approach at a Puppeteer-based scraper looked like:

```javascript
const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(
    'https://sa.ucla.edu/ro/Public/SOC/Results?t=19F&sBy=subject&sName=Computer+Science+%28COM+SCI%29&subj=COM+SCI&crsCatlg=Enter+a+Catalog+Number+or+Class+Title+%28Optional%29&catlg=&cls_no=&btnIsInIndex=btn_inIndex'
  )

  await page.click('#expandAll')
  await page.waitFor(5000)

  const data = await page.evaluate(() => {
    const rawEnrollmentStatuses = document.querySelectorAll('.statusColumn[id]')
    return Array.from(rawEnrollmentStatuses).map(rawStatus => {
      const id = rawStatus.getAttribute('id')
      const course = id.match(/COMSCI\d{4}/)

      const enrollmentText = rawStatus.querySelector('p').innerText
      const enrollmentLines = enrollmentText.split('\n')
      const status = enrollmentLines[0]

      return {
        course,
        status,
      }
    })
  })

  console.table(data)

  await browser.close()
})()
```

This was getting somewhere!

A couple of selected notes of interest I found while writing the above:

- `document.querySelectorAll()` does not return an array like I expected, but NodeList, which must be `Array.from()`ed in order for me to map through it.
- I found out pretty quickly that regular expression groups would be the most concise and easiest way to both match and extract data from the scraped input; this still holds true in the current version of the scraper.
- `console.log()` actually has a limit on how many rows of an array it'll show you, hence why I moved to `console.table()`.

## There's more to UCLA than just CS Classes

Now that my scraper was fetching data from one page, I figured it was time to try fetching data from all subject area pages. In order to do this, I needed a list of subject areas. There was that link above that I mentioned that listed all departments and subject areas, but what I really needed was the query parameters for each subject area to make a request like:

```
https://sa.ucla.edu/ro/Public/SOC/Results?t=19F&sBy=subject&sName=Computer+Science+%28COM+SCI%29&subj=COM+SCI&crsCatlg=Enter+a+Catalog+Number+or+Class+Title+%28Optional%29&catlg=&cls_no=&btnIsInIndex=btn_inIndex
```

Chrome DevTools has a [very nice feature](https://developers.google.com/web/tools/chrome-devtools/network/reference) where it'll actually decode the URL encoded parameters and display them to you. The above decoded looks like:

```
t: 19F
sBy: subject
sName: Computer Science (COM SCI)
subj: COM SCI
crsCatlg: Enter a Catalog Number or Class Title (Optional)
catlg:
cls_no:
btnIsInIndex: btn_inIndex
```

Of these 8 parameters, only `sName` and `subj` vary by subject area.

On the main Schedule of Classes page, there's a dropdown of all subject areas. They're formatted the same as `sName`, so I figured if a list existed, it'd be there.

Sure enough, in the HTML, there was:

```html
<script type="text/javascript">
  $(document).ready(function () {
      AdjustGoButton();
      var subjects = '[{&quot;label&quot;:&quot;Aerospace Studies (AERO ST)&quot;,&quot;value&quot;:&quot;AERO ST&quot;},{&quot;label&quot;:&quot;African American
      ...
      :&quot;Yiddish (YIDDSH)&quot;,&quot;value&quot;:&quot;YIDDSH&quot;}]';
      subjects = subjects.replace(/&quot;/g, '"');
      GlobalFunctions.CreateAutocomplete('select_filter_subject', $.parseJSON(subjects.replace(/&amp;/g, '&')), 'Enter Subject Area (Required)', '_Select_Subject');
  });
</script>
```

If we extract that monster string out and convert the `&quot;` to `"`, then now we have a JSON representation of all subject areas. I actually just pasted that into a JavaScript object to iterate through, because I figured that subject areas aren't really something to change.

Now we had our array of `label`s and `value`s which correspond to `sName` and `subj` respectively.

Perfect. Now we had were able to construct URLs for each of the 181 subject areas.

Putting this into Puppeteer, we get something like:

```javascript
```

Now we had all the courses for all the subject areas.

## Sections

Courses are cool, but the data that's really interesting is data for a section. This is where info about the location, the instructor, and enrollment is.

Going back to a course page, we needed a way to load all the section data on the page. Luckily, each page had an “Expand all” button, which did exactly this.

```javascript
await page.click('#expandAll')
```

From this, we can parse each section data, which is neatly wrapped in a `.primarySection` class.

We could then just parse away!

```javascript
const rawSections = document.querySelectorAll('.primarySection')
return Array.from(rawSections).map(rawSection => {
  console.log('rawSection:', rawSection)
  const id = rawSection.getAttribute('id')
  const [course] = id.match(/[A-Z]+\d+[A-Z]*\d*/)

  // Because there can be some id cruft before for multi-lectures
  const container = document.querySelector(`[id$='${course}-children']`)
  console.log('container:', container)

  // Lecture Number
  const lectureNumber = container.querySelector('.sectionColumn p').innerText

  // Enrollment
  const enrollmentText = container.querySelector('.statusColumn p').innerText
  const enrollmentLines = enrollmentText.split('\n')
  let status = enrollmentLines[0]
  if (status.startsWith('Closed by Dept')) {
    status = 'Closed by Dept'
  }

  let currentCapacity
  let maximumCapacity

  switch (status) {
    case 'Open':
      ;[currentCapacity, maximumCapacity] = enrollmentLines[1]
        .match(/\d+/g)
        .map(digits => parseInt(digits))
      break
    case 'Closed by Dept':
    case 'Cancelled':
      currentCapacity = 0
      maximumCapacity = 0
      break
    default:
      if (enrollmentLines.length > 1) {
        maximumCapacity = parseInt(enrollmentLines[1].match(/\d+/)[0])
        currentCapacity = maximumCapacity
      }
  }

  // Waitlist
  const waitlistText = container.querySelector('.waitlistColumn p').innerText
  let maxWaitlistCapacity = 0
  let currentWaitlistCapacity = 0
  if (waitlistText.startsWith('Waitlist Full')) {
    maxWaitlistCapacity = parseInt(waitlistText.match(/\d+/)[0])
    currentWaitlistCapacity = maxWaitlistCapacity
  } else if (status === 'Waitlist') {
    ;[currentWaitlistCapacity, maxWaitlistCapacity] = waitlistText
      .match(/\d+/g)
      .map(match => parseInt(match))
  }

  // Day Info
  const days = container.querySelector('.dayColumn p').innerText

  // Time info
  const time = container.querySelector('.timeColumn > p').innerText

  // Location
  const location = container.querySelector('.locationColumn p').innerText

  // Units
  const units = container.querySelector('.unitsColumn p').innerText

  // Instructor
  const instructor = container.querySelector('.instructorColumn p').innerText

  return {
    course,
    lectureNumber,
    status,
    currentCapacity,
    maximumCapacity,
    maxWaitlistCapacity,
    currentWaitlistCapacity,
    days,
    time,
    location,
    units,
    instructor,
  }
})
```

Now it was time to run it! So I did. We started off without a hitch: Aerospace Studies, African-American Studies, African Studies, .... It seemed like this scraping was going to take a while so I took a shower and came back to find that the script had failed somewhere around Geography. I tried again.

Ultimately, it turned out that the DOM was just to unpredictable to accurately and quickly scrape. I started to look at different approaches.

# Switching back to Python

After multiple flakes, I began to see why everyone at Datadog hated running the acceptance tests – they were just too darn flakey.

I began to think about alternative approaches. The endpoint that is hit when we load section data for a course is called `https://sa.ucla.edu/ro/Public/SOC/Results/GetCourseSummary`.

The response of the endpoint looks something like:

```html
<div id="COMSCI0111-container" class="primarySection">
  <div class="info light message hideOrShow">
    The number of open seats (status) for a section is updated once per hour.
    Status as of 10/23/2019 3:29:24 PM.
  </div>

  <span id="class-note" class="lower-note"
    >NOTE: To see all sections for this class, you must select: (1) a Lecture;
    (2) a Laboratory.</span
  >
  <div class="row-fluid header-row class-info">
    <div class="enrollColumn Select"><p>Select</p></div>
    <div class="sectionColumn">
      <p>Sect<span class="hide-small beforeCollapseHide">ion</span></p>
    </div>
    <div class="statusColumn">
      <p>
        <a
          class="popover-bottom"
          data-content="Indicates the availability of a class: open for enrollment, closed (as capacity is reached or exceeded), or cancelled.&lt;br&gt;&lt;br&lt;(## of ### Left): indicates # of spaces left for enrollment and the maximum # of students allowed to enroll in this class, which is subject to departmental change.&lt;br&gt;&lt;br&gt;(## of ## Taken): indicates the # of students currently placed on a waitlist along with the # of students allowed on the waitlist for this class."
          href="javascript:void(0)"
          >Status</a
        >
      </p>
    </div>
    <div class="waitlistColumn"><p>Waitlist Status</p></div>
    <div class="infoColumn hide-small">
      <p>
        <a
          class="popover-bottom"
          data-content='Click &lt;i class="icon-info-sign"&gt;&lt;/i&gt; to see more class information (e.g., website, exam info, notes).  Click &lt;i class="icon-warning-sign"&gt;&lt;/i&gt; to see class warnings (e.g., enrollment restrictions, requisites, etc.).  Click &lt;strong&gt;more detail&lt;/strong&gt; to see full class details.'
          href="javascript:void(0)"
          >Info</a
        >
      </p>
    </div>
    <div class="dayColumn hide-small beforeCollapseHide"><p>Day(s)</p></div>
    <div class="timeColumn"><p>Time</p></div>
    <div class="locationColumn hide-small"><p>Location</p></div>
    <div class="unitsColumn">
      <p>
        <a
          class="popover-bottom"
          data-content="Unit value is the workload credit given for a class.  It is generally the same as credit toward a degree, except that some courses, (e.g., English A, AP, 2P, 3P) may have less degree credit and/or no credit toward a degree (check the course description in the UCLA General Catalog). &lt;strong&gt;The unit value of a multiple-part class series is listed with the primary section&lt;/strong&gt;."
          href="javascript:void(0)"
          >Units</a
        >
      </p>
    </div>
    <div class="instructorColumn hide-small">
      <p>
        <a
          class="popover-bottom"
          data-content="The faculty member responsible for a class is listed with last name and first initial. &lt;strong&gt;The Staff&lt;/strong&gt; indicates that an instructor is not assigned."
          href="javascript:void(0)"
          >Instructor(s)</a
        >
      </p>
    </div>
  </div>

  <div id="COMSCI0111-children">
    <div
      class="row-fluid data_row primary-row class-info class-not-checked"
      id="187336200_COMSCI0111"
    >
      <div class="enrollColumn" id="187336200_COMSCI0111-enroll">
        <input id="187336200_COMSCI0111-checkbox" type="checkbox" />
        <div class="toggle" id="187336200_COMSCI0111-expando">
          <a href="javascript:void(0)"><span class="icon-caret-right"/></a>
        </div>
      </div>
      <div class="sectionColumn">
        <div class="cls-section click_info" id="187336200_COMSCI0111-section">
          <p class="hide-small">
            <a
              href="/ro/Public/SOC/Results/ClassDetail?term_cd=19F&amp;subj_area_cd=COM%20SCI&amp;crs_catlg_no=0111%20%20%20%20&amp;class_id=187336200&amp;class_no=%20001%20%20"
              target="_blank"
              title="Class Detail for 187336200"
              >Lec 1</a
            >
          </p>
          <div
            tabindex="0"
            class="hide-above-small"
            data-poload="term_cd=19F&amp;subj_area_cd=COM+SCI&amp;crs_catlg_no=0111    &amp;class_id=187336200&amp;class_no= 001  "
          >
            Lec 1 <span class="icon-warning-sign icon-position"></span>
          </div>
        </div>
      </div>
      <div class="statusColumn" id="187336200_COMSCI0111-status_data">
        <p>
          <i
            class="icon-unlock"
            style="color:green; display:block; float:left; height:3em;"
          ></i
          >Open<br />126 of 138 Enrolled<br />12 Spots Left
        </p>
      </div>
      <div class="waitlistColumn" id="187336200_COMSCI0111-waitlist_data">
        <p>0 of 15 Taken</p>
      </div>
      <div
        class="infoColumn hide-small click_info"
        id="187336200_COMSCI0111-info_data"
      >
        <a href="javascript:void(0)"> </a>
        <div
          tabindex="0"
          class="icon-warning-sign icon-position"
          data-poload="term_cd=19F&amp;subj_area_cd=COM+SCI&amp;crs_catlg_no=0111    &amp;class_id=187336200&amp;class_no= 001  "
        ></div>
      </div>
      <div class="dayColumn hide-small beforeCollapseHide">
        <div id="187336200_COMSCI0111-days_data">
          <p>
            <a
              class="popover-bottom"
              data-content="Tuesday, Thursday"
              href="javascript:void(0)"
              >TR</a
            >
          </p>
        </div>
      </div>
      <div class="timeColumn" id="187336200_COMSCI0111-time_data">
        <div id="187336200_COMSCI0111-days_data">
          <p class="hide-above-small beforeCollapseShow">
            <a
              class="popover-bottom"
              data-content="Tuesday, Thursday"
              href="javascript:void(0)"
              >TR</a
            >
          </p>
        </div>
        <p>4pm<wbr />-5:50pm</p>
      </div>
      <div
        class="locationColumn hide-small"
        id="187336200_COMSCI0111-location_data"
      >
        <p>
          Haines Hall A2
        </p>
      </div>
      <div class="unitsColumn" id="187336200_COMSCI0111-units_data">
        <p>5.0</p>
      </div>
      <div
        class="instructorColumn hide-small"
        id="187336200_COMSCI0111-instructor_data"
      >
        <p>Eggert, P.R.</p>
      </div>

      <script type="text/javascript">
        Iwe_ClassSearch_SearchResults.AddToCourseData('187336200_COMSCI0111', {
          Term: '19F',
          SubjectAreaCode: 'COM SCI',
          CatalogNumber: '0111    ',
          IsRoot: false,
          SessionGroup: null,
          ClassNumber: ' 001  ',
          SequenceNumber: '1',
          Path: '187336200_COMSCI0111',
          MultiListedClassFlag: 'n',
          Token: 'MDExMSAgICAxODczMzYyMDBfQ09NU0NJMDExMQ==',
        })
      </script>
    </div>
  </div>
</div>

<script src="/ro/bundles/jspopover?v=Nrx_Cn4rF92aryETxJrW9wFWCHWVEbfIYvLDTjy4c341"></script>
```

There's our data! But instead of being nicely formatted into JSON, it was raw HTML, which looked to be exactly what was then inserted into the DOM and displayed on the page. This HTML insertion method didn't seem the most separated or secure, but hey who am I to judge.

My idea: since these responses were just HTML fragments, why not try to parse them directly? We could go back to BeautifulSoup and be off to the races. The tricky part would be creating the request.

Using Chrome's URL decoding from earlier, I found that the parameters were:

```
model: {"Term":"19F","SubjectAreaCode":"COM SCI","CatalogNumber":"0111    ","IsRoot":true,"SessionGroup":"%","ClassNumber":"%","SequenceNumber":null,"Path":"COMSCI0111","MultiListedClassFlag":"n","Token":"MDExMSAgICBDT01TQ0kwMTEx"}
FilterFlags: {"enrollment_status":"O,W,C,X,T,S","advanced":"y","meet_days":"M,T,W,R,F","start_time":"8:00 am","end_time":"8:00 pm","meet_locations":null,"meet_units":null,"instructor":null,"class_career":null,"impacted":null,"enrollment_restrictions":null,"enforced_requisites":null,"individual_studies":null,"summer_session":null}
_: 1571869764769
```

The `FilterFlags` object looked to be similar among all requests. The `_` parameter didn't seem to do anything; I could omit it and the request would be the same.

So what we really needed was the `model` object. The frontend had to have the model object somewhere, so I grepped for it in the HTML. And it showed up.

// TODO: code

So now we had something like:

```python
async def fetch_course_sections(session: ClientSession, course: Course) -> str:
    """
    Fetch the details (time, day, enrollment, etc.) of sections of a particular course. Returns a string representation of the response.
    """
    model_formatted = format_query_params(course.model)
    url = f"https://sa.ucla.edu/ro/Public/SOC/Results/GetCourseSummary?model={model_formatted}&filterFlags={filter_flags_formatted}"
    response = await fetch(session, url)
    return response
```

## Handling pagination

## Making it async

My emerging algorithm for fetching all subject areas and course was starting to look like:

```
fetch page with all subject areas
parse all subject areas
for subject_area in subject_areas:
	fetch 1st courses page for subject_area
	parse courses from page
	fetch and parse additional course pages if needed
	for course in courses:
		fetch section data for course
		for section in sections:
			parse section
			print section (TODO: save section in csv or database)
```

With 181 subject areas and multiple courses offered for each subject area, it became apparent pretty quickly that my emergent algorithm was not going to be very fast. The bottleneck was pretty obvious – it'd be requesting and receiving the pages, which took about 1-2 seconds for a page on my local connection. Assuming that each subject area offered a single full page of courses – 25 – (a very rough estimate, course offerings seemed to vary greatly) and each course had only a single section, then I roughly estimated the scraper would take 181 _ 25 _ 1 \* 1.5 = 6787.5 seconds, or 1.88 hours. Yikes! That wouldn't work if I wanted an hour granularity.

## Take 3, let's Go!

So to recap where I was: browser automation was too flakey and Python data fetching was more reliable, but too slow, due to my inexperience with its concurrency mechanisms.

So I figured I'd experiment with a third language: Go. It had first class support for concurrency with goroutines, and wasn't burdened by a Global Interpreter Lock like Python or Node.

To replace our HTML parsing, I opted for a library called goquery.

By this point, I was pretty sure I had converged on a general architecture: we'd need three main functions to handle fetching the subject areas, courses, and sections respectively.

## Storing data

I was also getting to the point to where I figured it'd be good to actually store this data in a database, instead of just in text. A [teammate of mine](https://alexgessner.com) at Keybase extolled Postgres, so I figured I'd give it a spin.

Since I was also thinking about how to improve speed, I realized that a database read was a lot faster than scraping a page from UCLA. Thus my database ended up with three tables:

- `subject_areas`
- `courses`
- `sections`

The schema ended up looking like:

```sql
CREATE TABLE subject_areas (
  id SERIAL PRIMARY KEY,
  label TEXT UNIQUE,
  value TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  subject_area_id INTEGER REFERENCES subject_areas(id),
  title TEXT,
  number TEXT,
  model TEXT UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE sections (
  id SERIAL PRIMARY KEY,
  section_id TEXT,
  course_id INTEGER REFERENCES courses(id),
  enrollment_status TEXT,
  enrollment_count INT,
  enrollment_capacity INT,
  waitlist_status TEXT,
  waitlist_count INT,
  waitlist_capacity INT,
  days TEXT,
  time TEXT,
  location TEXT,
  units TEXT,
  instructor TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

## Going Serverless

As I mentioned in the beginning, the UCLA Registrar's public list of classes updates every hour. This seemed like a good time frame to run our script. As I began to look into job scheduling, I found serverless to be an appealing option.

```yaml
Resources:
  FetchSectionsByCourseFunction:
    Type: AWS::Serverless::Function # More info about Function Resource: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessfunction
    Properties:
      CodeUri: .
      Handler: fetch-sections-by-course
      Runtime: go1.x
      Tracing: Active
Events:
  ScrapeWebsiteHourly:
    Type: Schedule
    Properties:
      Schedule: cron(0 * * * ? *)
      Name: Houly
      Description: Top of every hour
      Enabled: True
```

FetchCourseBySubjectArea runs every 24 hours.

I originally only ran FetchSubjectAreas once, when I started scraping. When I updated my scripts for winter quarter scraping, I realized that the subject areas list differs by quarter, so that is now scraped hourly as well.

## Where we're at now

So now I have a automated scraper that runs every hour. All fall data is currently online on my GitHub.
