import React from 'react'

import '../../index.scss'

const BpmDisplay = (props) => (
  <div className = "flex-item">
    <div className="bpm-display bpm">BPM: {props.tempo}</div>
  </div>
)

export default BpmDisplay
