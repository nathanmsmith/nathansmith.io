import * as React from 'react'
import * as d3 from 'd3'

const width = 650
const height = 400
const margin = { top: 20, right: 5, bottom: 20, left: 35 }
const red = '#eb6a5b'
const blue = '#52b6ca'

const LineChart = ({ data }: any) => {
  const timeDomain = d3.extent(data, d => new Date(d.date))
  console.log('timeDomain:', timeDomain)
  const tempMax = d3.max(data, d => d.high)
  console.log('tempMax:', tempMax)

  const xScale = d3
    .scaleTime()
    .range([margin.left, width - margin.right])
    .domain(timeDomain)
  const yScale = d3
    .scaleLinear()
    .range([height - margin.bottom, margin.top])
    .domain([0, tempMax])

  const xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat('%b'))
  const yAxis = d3.axisLeft(yScale).tickFormat(d => `${d}℉`)

  const xRef = React.useRef(null)
  const yRef = React.useRef(null)

  React.useEffect(() => {
    d3.select(xRef.current).call(xAxis)
    d3.select(yRef.current).call(yAxis)
  }, [xRef.current, yRef.current])

  const lineGenerator = d3.line()
  lineGenerator.x(d => xScale(new Date(d.date)))
  lineGenerator.y(d => yScale(d.low))
  const lows = lineGenerator(data)
  lineGenerator.y(d => yScale(d.high))
  const highs = lineGenerator(data)

  return (
    <svg width={width} height={height}>
      <path d={highs} fill="none" stroke={red} strokeWidth="2" />
      <path d={lows} fill="none" stroke={blue} strokeWidth="2" />
      <g>
        <g ref={xRef} transform={`translate(0, ${height - margin.bottom})`} />
        <g ref={yRef} transform={`translate(${margin.left}, 0)`} />
      </g>
    </svg>
  )
}

export default LineChart