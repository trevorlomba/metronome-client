import React, { useState, useEffect } from 'react'
import { Howl } from 'howler'

import TempoSlider from './TempoSlider'
import Measures from './Measures'
import BpmDisplay from './BpmDisplay'
import StartStop from './StartStop'
import RandomNote from '../Metronome/RandomNote'

import '../../index.scss'
import click3 from '../../click3.wav'
import aTone from '../../noteTones/aTone.wav'
import aSharpTone from '../../noteTones/aSharpTone.wav'
import bTone from '../../noteTones/bTone.wav'
import cTone from '../../noteTones/cTone.wav'
import cSharpTone from '../../noteTones/cSharpTone.wav'
import dTone from '../../noteTones/dTone.wav'
import dSharpTone from '../../noteTones/dSharpTone.wav'
import eTone from '../../noteTones/eTone.wav'
import fTone from '../../noteTones/fTone.wav'
import fSharpTone from '../../noteTones/fSharpTone.wav'
import gTone from '../../noteTones/gTone.wav'
import gSharpTone from '../../noteTones/gSharpTone.wav'

const Metronome = (props) => {
  const [currentNote, setCurrentNote] = useState(props.notesBucket[Math.floor(Math.random() * 12)])
  const [randomNote, setRandomNote] = useState(props.notesBucket[Math.floor(Math.random() * 12)])
  const [first, setFirst] = useState(true)
  const noteTones = {
    a: aTone,
    'a#': aSharpTone,
    b: bTone,
    c: cTone,
    'c#': cSharpTone,
    d: dTone,
    'd#': dSharpTone,
    e: eTone,
    f: fTone,
    'f#': fSharpTone,
    g: gTone,
    'g#': gSharpTone
  }
  // const handleCheckChange = (position) => {
  //   const updatedCheckedState = props.checkedState.map((item, index) =>
  //     index === position ? !item : item
  //   )
  //   props.setCheckedState(updatedCheckedState)
  // }
  // console.log(handleCheckChange)
  const rand = Math.floor(Math.random() * props.notesBucket.length)
  const allNotes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#']
  const interval = ''
  useEffect((interval) => {
    if (props.notesBucket.length > 0) {
      if (props.counter === props.measures) {
        props.setCounter(0)
        if (first) {
          clearInterval(interval)
          setFirst(true)
          setRandomNote(props.notesBucket[rand])
          setCurrentNote(randomNote)
          const randomNoteString = randomNote.toString()
          const AudioPlay = new Howl({ src: [noteTones[randomNoteString]] })
          console.log(randomNoteString)
          AudioPlay.play()
        }
      } else if (props.active) {
        interval = setInterval(() => {
          props.setTotal(props.total + 1)
          props.setCounter(props.counter + 1)
          const AudioPlay = new Howl({ src: [click3] })
          AudioPlay.play()
        }, 60000 / props.tempo)
      }
      return () => {
        clearInterval(interval)
      }
    }
  }
  )

  useEffect(() => {
    clearInterval(interval)
    props.setCounter(0)
  }, [props.active])

  useEffect(() => {
    if (props.notesBucket.length > 0) {
      setRandomNote(props.notesBucket[rand])
      setCurrentNote(randomNote)
    }
  }, [props.notesBucket])

  useEffect(() => {
    let i
    console.log(i)
    const arr = []
    props.checkedState.map((note, i) => {
      i++
      if (note) {
        arr.push(allNotes[i - 1])
      }
      return allNotes[i]
    })
    props.setNotesBucket(arr)
  }, [props.checkedState])

  return (
    <>
      <RandomNote
        counter={props.counter}
        measures={props.measures}
        currentNote={currentNote}
        randomNote={randomNote}
        setRandomNote={setRandomNote}
        user={props.user}
        setMeasures={props.setMeasures}
        notesBucket={props.notesBucket}
        tempo={props.tempo}
        setTempo={props.setTempo}
        setCheckedState={props.setCheckedState}
        checkedState={props.checkedState}
        msgAlert={props.msgAlert}
        presets={props.presets}
        setPresets={props.setPresets}
        presetIndex={props.presetIndex}
        setPresetIndex={props.setPresetIndex}
        presetName={props.presetName}
        setPresetName={props.setPresetName}
      />
      <div>
        <TempoSlider
          onChange={props.slideTempo}
          className='tempo-settings'
          tempo={props.tempo}
          decreaseTempo={props.decreaseTempo}
          increaseTempo={props.increaseTempo}></TempoSlider>
      </div>
      <div className="column">
        <div>
          <BpmDisplay tempo={props.tempo}></BpmDisplay>
        </div>
        <div>
          <Measures
            className='measures'
            counter={props.counter}
            measures={props.measures}
            increaseBeats={props.increaseBeats}
            decreaseBeats={props.decreaseBeats}></Measures>
        </div>
        <div className='counter flex-item'>count: {props.total}</div>
        <div>
          <StartStop
            toggleTimer={props.toggleTimer}
            total={props.total}
            active={props.active}
            counter={props.counter}
          />
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Metronome
