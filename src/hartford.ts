import * as d3 from 'd3';

const scaledAlbersProjection = d3.geoAlbersUsa().scale(1300).translate([487.5, 305]);
// Note that the projection methods need (long, lat) not (lat, long)

// Creates a circle SVG node for hartford.
export function plotHartford(): Element | null {
  const hartfordProjected = scaledAlbersProjection([-72.748094, 41.764531]);
  // This needs to be namespaced, i.e. 'svg:g' not just 'g' for it to work.
  // https://stackoverflow.com/questions/49999268/creating-and-appending-detached-elements-with-d3-create
  const point = d3.create('svg:g')
    .attr('transform', `translate(${hartfordProjected?.join(',')})`);
  point.append('circle')
    .attr('r', '5');
  return point.node();
}
