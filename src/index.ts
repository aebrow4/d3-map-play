import * as d3 from 'd3'
import { mapGroup } from './map'
import { plotHartford } from './hartford'

const width = 975
const height = 610
const svg = d3.select('body').append('svg').attr('viewBox', `0, 0 ${width}, ${height}`)
svg.append(() => mapGroup.node())
svg.append(() => plotHartford())
