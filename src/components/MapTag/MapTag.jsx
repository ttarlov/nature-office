import React from 'react'
import { inject, observer } from 'mobx-react'
import GlobalStore from '../../store/GlobalStore'

const MapTag = inject('GlobalStore')(observer((props) => {
  return (
    <div className="content-wrapper">
      {props.id}
    </div>
  )
}))

export default MapTag
