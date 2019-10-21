import * as React from 'react'
import * as d3 from 'd3'

const width = 650
const height = 400
const margin = { top: 20, right: 5, bottom: 20, left: 35 }
const red = '#eb6a5b'
const blue = '#52b6ca'

const LineChart = ({ data }: any) => {
  const timeDomain = d3.extent(data, d => new Date(d.created_at))
  const enrollmentMax = d3.max(data, d => Number(d.enrollment_count))

  const xScale = d3
    .scaleTime()
    .range([margin.left, width - margin.right])
    .domain(timeDomain)
  const yScale = d3
    .scaleLinear()
    .range([height - margin.bottom, margin.top])
    .domain([0, enrollmentMax])

  const xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat('%b %d'))
  const yAxis = d3.axisLeft(yScale)

  const xRef = React.useRef(null)
  const yRef = React.useRef(null)

  React.useEffect(() => {
    d3.select(xRef.current).call(xAxis)
    d3.select(yRef.current).call(yAxis)
  }, [xRef.current, yRef.current])

  // const lineGenerator = d3.area()
  // lineGenerator.x(d => xScale(new Date(d.created_at)))
  // lineGenerator.y0(yScale(enrollmentDomain[0]))
  // lineGenerator.y1(d => yScale(d.enrollment_count))
  const enrollmentCount = d3
    .area()
    .x(d => xScale(new Date(d.created_at)))
    .y0(yScale(0))
    .y1(d => yScale(d.enrollment_count))
  const waitlistCount = d3
    .area()
    .x(d => xScale(new Date(d.created_at)))
    .y0(yScale(0))
    .y1(d => yScale(d.waitlist_count))

  return (
    <svg width={width} height={height}>
      <path d={enrollmentCount(data)} fill={red} />
      <path d={waitlistCount(data)} fill={blue} />
      <g>
        <g ref={xRef} transform={`translate(0, ${height - margin.bottom})`} />
        <g ref={yRef} transform={`translate(${margin.left}, 0)`} />
      </g>
    </svg>
  )
}

export default LineChart
