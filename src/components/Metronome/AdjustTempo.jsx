import React from 'react'

import '../../index.scss'

const AdjustTempo = (props) => (
  <span className={props.className} onClick={props.onClick}>{props.text}</span>
)

export default AdjustTempo
