import * as d3 from 'd3'
import { mapGroup } from './map'
import { plotHartford } from './hartford'

const width = 975
const height = 610
const svg = d3.select('body').append('svg').attr('viewBox', `0, 0 ${width}, ${height}`)

/**
 * Structure of our SVG:
 * <svg>
 *   <g> (containerGroup)
 *     <g> (mapGroup)
 *       <path /> (nation path)
 *       <path /> (states path)
 *       <path /> (counties path)
 *     </g>
 *     <g> (overlayGroup)
 *       <circle /> (the overlays)
 *       ...
 *     </g
 *   </g>
 * </svg>
 */
const containerGroup = svg.append('svg:g')
containerGroup.append(() => mapGroup.node())
containerGroup.append(() => plotHartford())

function zoomed ({ transform }: { transform: () => any }): void {
  containerGroup.attr('transform', transform)
}
const zoom = d3.zoom<SVGSVGElement, unknown>()
svg.call(zoom.on('zoom', zoomed))
