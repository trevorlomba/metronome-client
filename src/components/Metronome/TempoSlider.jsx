import React from 'react'

import AdjustTempo from './AdjustTempo'

import '../../index.scss'

const TempoSlider = (props) => {
  const decreaseTempo = () => {
    // console.log('yup')
    props.decreaseTempo()
  }
  const increaseTempo = () => {
    // console.log('yup')
    props.increaseTempo()
  }
  const slideTempo = () => {
    props.onChange()
  }
  return (
    <>
      <div className = "tempo-slider">
        <AdjustTempo className="adjust decrease-tempo" text="-" onClick = {decreaseTempo} />
        <input type="range" value={props.tempo} min="20" max="220" step="1" className="slider" onChange = {slideTempo}></input>
        <AdjustTempo className="adjust increase-tempo" text="+" onClick = {increaseTempo}></AdjustTempo>
      </div>
    </>
  )
}

export default TempoSlider
