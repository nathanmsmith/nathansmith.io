import * as React from 'react'

enum Technologies {
  JavaScript = 'JavaScript',
  React = 'React',
  HTML = 'HTML',
  CSS = 'CSS',
}

interface TechnologyLinkProps {
  name: string
}

const TechnologyLink = (props: TechnologyLinkProps) => {
  let link = null
  let color = '#000'
  switch (props.name) {
    case 'HTML':
      link = 'https://www.w3.org/html/'
      color = '#f16529'
      break
    case 'JavaScript':
      link = 'https://en.wikipedia.org/wiki/JavaScript'
      color = '#f7df1e'
      break
    case 'CSS':
      link = 'https://www.w3.org/Style/CSS/Overview.en.html'
      color = '#33A9DC'
      break
    case 'React':
      link = 'https://reactjs.org'
      color = '#61dafb'
      break
    case 'Flow':
      link = 'https://flow.org'
      color = '#E8BD36'
      break
    case 'Redux':
      link = 'https://redux.js.org'
      color = '#764abc'
      break
    case 'TypeScript':
      link = 'https://www.typescriptlang.org'
      color = '#294E80'
      break
    case 'Electron':
      link = 'https://electronjs.org'
      color = '#9feaf9'
      break
    case 'React Native':
      link = 'https://facebook.github.io/react-native/'
      color = '#61dafb'
      break
    case 'Sass':
      link = 'https://sass-lang.com'
      color = '#CF649A'
      break
    case 'Bootstrap':
      link = 'https://getbootstrap.com'
      color = '#7952b3'
      break
    case 'jQuery':
      link = 'https://jquery.com'
      color = '#b3d4fc'
      break
    case 'Swift':
      link = 'https://swift.org'
      color = '#F05138'
      break
    case 'GraphQL':
      link = 'https://graphql.org'
      color = '#E10098'
      break
    case 'Node':
      link = 'https://nodejs.org/'
      color = '#43853d'
      break
    case 'Express':
      link = 'https://expressjs.com'
      color = '#353535'
      break
    case 'Nunjucks':
      link = 'https://mozilla.github.io/nunjucks/'
      color = '#5cb85c'
      break
    case 'PostgreSQL':
      link = 'https://www.postgresql.org'
      color = '#336791'
      break
    case 'Docker':
      link = 'https://www.docker.com/'
      color = '#2496ed'
      break
    case 'Python':
      link = 'https://www.python.org'
      color = '#ffd343'
      break
    case 'Flask':
      link = 'http://flask.pocoo.org'
      break
    case 'Chart.js':
      link = 'https://www.chartjs.org'
      color = '#FF6384'
      break
    case 'Gatsby':
      link = 'https://www.gatsbyjs.org/'
      color = 'rgb(102, 51, 153)'
      break
    case 'Foundation':
      link = 'https://foundation.zurb.com'
      color = 'rgb(12, 60, 85)'
      break
    case 'Emotion':
      link = 'https://emotion.sh'
      color = '#D36AC2'
      break
    case 'Jest':
      link = 'https://jestjs.io'
      color = '#C21325'
      break
    case 'D3':
      link = 'https://d3js.org'
      color = '#f9a03c'
      break
    case 'Less':
      link = 'http://lesscss.org'
      color = '#1d365d'
      break
    case 'Lodash':
      link = 'https://lodash.com'
      color = '#3492ff'
      break
    case 'Handlebars':
      link = 'https://handlebarsjs.com'
      color = '#f38709'
      break
    default:
      break
  }

  return (
    <a href={link} className="link colored" style={{ color }}>
      {props.name}
    </a>
  )
}

export default TechnologyLink
