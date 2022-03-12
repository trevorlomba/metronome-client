import React from 'react'

const StartStop = (props) => (
  <>
    <button className="start-stop" onClick = {props.toggleTimer}>{props.total}</button>
  </>
)

export default StartStop
