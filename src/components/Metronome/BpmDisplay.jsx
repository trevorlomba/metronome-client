import React from 'react'

import '../../index.scss'

const BpmDisplay = (props) => (
  <>
    <div className="bpm-display ">{props.tempo}</div>
  </>
)

export default BpmDisplay
