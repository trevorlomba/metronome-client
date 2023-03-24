import React from 'react'
import NotesForm from '../Presets/NotesForm'
// import LoginForm from './Login'

const RandomNote = (props) => {
  // const onSubmit = (event, username, password) => {
  //   // event.preventDefault()
  //   console.log('onSubmitRan!')
  // }
  return (
    <>
      {/* <LoginForm onSubmit = {onSubmit}></LoginForm> */}
      <div className='notes-walk'>
        {props.currentNote.toUpperCase()} {'/ '}
        {props.randomNote.toUpperCase()}
      </div>
      <NotesForm
        counter={props.counter}
        measures={props.measures}
        currentNote={props.currentNote}
        randomNote={props.randomNote}
        setRandomNote={props.setRandomNote}
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
    </>
  )
}

export default RandomNote
