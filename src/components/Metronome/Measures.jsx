import React from 'react'

import '../../index.scss'

import AdjustBeats from './AdjustBeats'

const Measures = (props) => {
  const decreaseBeats = () => {
    props.decreaseBeats()
  }
  const increaseBeats = () => {
    props.increaseBeats()
  }

  return (
    <>
      <div className="bpm-display ">{props.tempo}</div>
      <div className="measures-count">
        <AdjustBeats className="adjust stepper subtract-beats" text="-" onClick = {decreaseBeats}></AdjustBeats>
        <span className='beats-display'> {props.measures} </span>
        <AdjustBeats className="adjust stepper add-beats" text="+" onClick = {increaseBeats}></AdjustBeats>
      </div>
      <div className='counter'><div>{props.counter + 1}</div></div>
    </>
  )
}

export default Measures
