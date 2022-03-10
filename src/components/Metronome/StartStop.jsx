import React from 'react'

const StartStop = (props) => (
  <>
    <button onClick = {props.toggleTimer}>{props.active}</button>
  </>
)

export default StartStop
