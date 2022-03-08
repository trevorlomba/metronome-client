import React from 'react'

import '../../index.scss'

import AdjustBeats from './AdjustBeats'

const Measures = (props) => {
  const decreaseBeats = () => {
    // console.log('yup')
    props.decreaseBeats()
  }
  const increaseBeats = () => {
    // console.log('yup')
    props.increaseBeats()
  }

  return (
    <>

      <div className="measures-count">
        <AdjustBeats className="adjust stepper" text="-" onClick = {decreaseBeats}></AdjustBeats>
        <span className='beats-display'> {props.measures} </span>
        <AdjustBeats className="adjust stepper" text="+" onClick = {increaseBeats}></AdjustBeats>
      </div>
    </>
  )
}

export default Measures
