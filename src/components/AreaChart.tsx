import * as React from 'react'
import * as d3 from 'd3'
import useComponentSize from '@rehooks/component-size'

const height = 160
const margin = { top: 20, right: 5, bottom: 20, left: 35 }
const red = '#eb6a5b'
const blue = '#52b6ca'

const LineChart = ({ data }: any) => {
  let containerRef = React.useRef(null)
  const { width } = useComponentSize(containerRef)
  const series = d3.stack().keys(['enrollment_count', 'waitlist_count'])(data)
  const timeDomain = d3.extent(data, d => new Date(d.created_at))
  const enrollmentMax = d3.max(
    data,
    d => Number(d.enrollment_capacity) + Number(d.waitlist_capacity)
  )

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

  const enrollmentCount = d3
    .area()
    .x(d => xScale(new Date(d.data.created_at)))
    .y0(d => yScale(d[0]))
    .y1(d => yScale(d[1]))

  return (
    <div ref={containerRef}>
      <svg width="100%" height={height}>
        <path d={enrollmentCount(series[0])} fill={red} />
        <path d={enrollmentCount(series[1])} fill={blue} />
        <g>
          <g ref={xRef} transform={`translate(0, ${height - margin.bottom})`} />
          <g ref={yRef} transform={`translate(${margin.left}, 0)`} />
        </g>
      </svg>
    </div>
  )
}

export default LineChart
