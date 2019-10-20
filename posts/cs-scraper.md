I was waitlisted for [a CS class](http://www.scalableinternetservices.com) I was very interested in taking this fall quarter.

Thus I came to the conclusion: I'd scrape the UCLA registrar to make sure I don't miss classes in the future.

# Designing The Scraper

The UCLA Registrar's Office has a [publicly available list of all classes offered for the most recent quarter](https://sa.ucla.edu/ro/public/soc). It's updated hourly. The most common way to search for classes is by Subject Area, which is kinda like department.

## Beautiful Soup

I had never used Beautiful Soup before, but I had heard great things about it and it seemed simple enough. Hell, UCLA ACM had even done a [workshop](https://github.com/uclaacm/learn.py-s19/tree/master/session-8-web-scraping) on it.

So a hacked up a simple program like this:

```python
from bs4 import BeautifulSoup
import requests

response = requests.get("https://sa.ucla.edu/ro/Public/SOC/Results?t=19F&sBy=subject&sName=Computer+Science+%28COM+SCI%29&subj=COM+SCI&crsCatlg=Enter+a+Catalog+Number+or+Class+Title+%28Optional%29&catlg=&cls_no=&btnIsInIndex=btn_inIndex")

soup = BeautifulSoup(response.content, 'html.parser')

print(soup.prettify())
```

> After some exploring the site in Chrome DevTools, I noticed something interesting: the site is very good about only fetching data it needs.

> Searching a subject area returns an HTML page that contains a paginated list of courses offered in that subject area. Clicking on a specific course makes a request to an endpoint called `/GetCourseSummary` which provides a list of all the sections offered of that course. Clicking on a section makes another call to
