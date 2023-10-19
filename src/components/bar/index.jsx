import * as d3 from 'd3';
import {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

/**
 * Bar
 * @returns {JSX.Element}
 * @constructor
 */
const Bar = ({withTooltip, title}) => {

  const barRef = useRef(null);
  const data = [
    {food: 'Kupat tahu', value: 15000},
    {food: 'karedok lenca', value: 30000},
    {food: 'rokok magnum', value: 25000},
    {food: 'kopi hitam', value: 3000},
    {food: 'Josu', value: 6000},
    {food: 'Ayam geprek', value: 15000}
  ];
  const config = {
    width: 600,
    height: 300,
    margin: {
      top: 30, right: 0, bottom: 30, left: 60
    }
  };

  const _renderChart = () => {
    // defined xScale
    const xScale = d3.scaleBand()
      .domain(d3.groupSort(data, ([d]) => -d.value, (d) => d.food)) // descending frequency
      .range([config.margin.left, config.width - config.margin.right])
      .padding(0.1);

    // defined yScale
    console.log(d3.max(data, (d) => d.value));
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([config.height - config.margin.bottom, config.margin.top]);

    // create svg
    const svg = d3.select(barRef.current)
      .attr('width', config.width)
      .attr('height', config.height)
      .attr('viewBox', [0, 0, config.width, config.height])
      .attr('style', 'max-width: 100%; height: auto;');

    const tooltip = d3.select('body').append('div').attr('class', 'tooltip');

    // Add a rect for each bar.
    svg.append('g')
      .attr('fill', '#fca311')
      .attr('classname', 'bar-chart')
      .selectAll()
      .data(data)
      .join('rect')
      .attr('x', (d) => xScale(d.food))
      .attr('y', (d) => yScale(d.value))
      .attr('height', (d) => yScale(0) - yScale(d.value))
      .attr('width', xScale.bandwidth())
      .on('mouseover', function (d, i) {
        if (withTooltip) {
          nodeMouseOver(d, i, tooltip);
        }
      })
      .on('mouseout', function (d, i) {
        if (withTooltip) {
          nodeMouseOut(d, i, tooltip);
        }
      });

    // Add the x-axis and label.
    svg.append('g')
      .attr('transform', `translate(0,${config.height - config.margin.bottom})`)
      .call(d3.axisBottom(xScale).tickSizeOuter(0));

    // Add the y-axis and label, and remove the domain line.
    svg.append('g')
      .attr('transform', `translate(${config.margin.left},0)`)
      .call(d3.axisLeft(yScale))
      .call(g => g.select('.domain').remove())
      .call(g => g.append('text')
        .attr('x', -config.margin.left)
        .attr('y', 10)
        .attr('fill', 'currentColor')
        .attr('text-anchor', 'start')
        .text(title));
  };

  function nodeMouseOver(event, d, tooltip) {
    tooltip.style('left', event.pageX + 18 + 'px')
      .style('top', event.pageY + 18 + 'px')
      .style('display', 'block')
      .html(`kebutuhan : ${d.food} <br/> harga : ${d.value}`);

    // Optional cursor change on target
    d3.select(event.target).style('cursor', 'pointer');

    // Optional highlight effects on target
    d3.select(event.target)
      .transition()
      .attr('stroke', '#A8234E')
      .attr('stroke-width', 3);
  }

  function nodeMouseOut(event, d, tooltip) {
    tooltip.style('display', 'none'); // Hide toolTip

    // Optional cursor change removed
    d3.select(event.target).style('cursor', 'default');

    // Optional highlight removed
    d3.select(event.target)
      .transition()
      .attr('stroke', '#fff')
      .attr('stroke-width', 0);
  }


  useEffect(() => {
    _renderChart();
    // eslint-disable-next-line
    }, []);
  return <svg ref={barRef}></svg>;
};

Bar.propTypes = {
  withTooltip: PropTypes.bool,
  title: PropTypes.string
};

export default Bar;