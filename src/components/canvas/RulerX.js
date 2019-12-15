import React, { Fragment } from 'react'
import { toPercentage } from 'utils/helper'
import './ruler.scss'

export default ({rulerData}) =>
  (rulerData && rulerData.length) ?
  <Fragment>
    {
      rulerData.map((ruler, index) => {
        const isVertical = !!ruler.h
        const size = isVertical ? {height: toPercentage(ruler.h)} : {width: toPercentage(ruler.w)}
        return (
          <div
            key={index}
            className={`mark-ruler mark-ruler-${isVertical ? 'v' : 'h'}`}
            style={{top: toPercentage(ruler.y), left: toPercentage(ruler.x), ...size}}
          />
        )
      })
    }
  </Fragment> :
  null