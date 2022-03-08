import React from 'react'

import TempoSlider from './TempoSlider'
import Measures from './Measures'
import BpmDisplay from './BpmDisplay'

import '../../index.scss'

const Metronome = (props) => {
  return (
    <>
      <div><BpmDisplay tempo={props.tempo}></BpmDisplay></div>
      <div><TempoSlider onChange={props.slideTempo} className="tempo-settings" tempo={props.tempo} decreaseTempo={props.decreaseTempo} increaseTempo={props.increaseTempo}></TempoSlider></div>
      <div><Measures className="measures" measures={props.measures} increaseBeats={props.increaseBeats} decreaseBeats={props.decreaseBeats}></Measures></div></>
  )
}

export default Metronome
