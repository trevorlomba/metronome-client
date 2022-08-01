import React from 'react'

import AdjustTempo from './AdjustTempo'

import '../../index.scss'

const TempoSlider = (props) => {
  const decreaseTempo = () => {
    props.decreaseTempo()
  }
  const increaseTempo = () => {
    props.increaseTempo()
  }
  const slideTempo = () => {
    props.onChange()
  }
  return (
    <>
      <div className = "tempo-slider">
        <AdjustTempo className="adjust decrease-tempo" text="-" onClick = {decreaseTempo} />
        <input type="range" value={props.tempo} min="40" max="180" step="1" className="slider" onChange = {slideTempo}></input>
        <AdjustTempo className="adjust increase-tempo" text="+" onClick = {increaseTempo}></AdjustTempo>
      </div>
    </>
  )
}

export default TempoSlider
