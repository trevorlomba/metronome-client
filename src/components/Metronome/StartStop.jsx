import React from 'react'

const StartStop = (props) => (
  <>
    <button onClick = {props.toggleTimer}>{props.total + 1}</button>
  </>
)

export default StartStop
