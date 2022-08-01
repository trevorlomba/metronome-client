/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import './index.scss'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

import Metronome from './components/Metronome/Metronome'
import NotesForm from './components/Presets/NotesForm'
import PresetsForm from './components/Presets/PresetsForm'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [tempo, setTempo] = useState(120)
  const [measures, setMeasures] = useState(4)
  const [active, setActive] = useState(0)
  const [checkedState, setCheckedState] = useState([true, true, true, true, true, true, true, true, true, true, true, true])
  const [total, setTotal] = useState(0)
  const [notesBucket, setNotesBucket] = useState(['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'])
  const [counter, setCounter] = useState(1)
  const [presets, setPresets] = useState([])
  const [presetIndex, setPresetIndex] = useState(0)
  const [presetName, setPresetName] = useState('default')

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  const tempoSlider = document.querySelector('.slider')

  const decreaseTempo = () => {
    if (tempo < 20) {
      return true
    } else {
      setTempo(tempo => tempo - 1)
    }
  }

  const increaseTempo = () => {
    if (tempo > 240) {
      return true
    } else {
      setTempo(tempo => tempo + 1)
    }
  }

  const decreaseBeats = () => {
    if (measures <= 2) {
      return true
    } else {
      setMeasures(measures => measures - 1)
    }
  }

  const increaseBeats = () => {
    if (measures >= 8) {
      return true
    } else {
      setMeasures(measures => measures + 1)
    }
  }

  const slideTempo = () => {
    setTempo(parseInt(tempoSlider.value))
  }

  const toggleTimer = () => {
    let stat = active
    switch (active) {
    case 0:
      stat = 1
      break
    default:
      stat = 0
      break
    }
    setActive(stat)
    setTotal(0)
  }

  return (
    <>
      <Header user={user} />
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
        />
      ))}
      <main className='container'>
        <Routes>
          <Route
            path='/sign-up'
            element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
          />
          <Route
            path='/sign-in'
            element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
          />
          <Route
            path='/sign-out'
            element={
              <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
            }
          />
          <Route
            path='/change-password'
            element={<ChangePassword msgAlert={msgAlert} user={user} />}
          />
          <Route
            className='presets'
            path='/settings'
            element={
              <NotesForm
                user={user}
                measures={measures}
                setMeasures={setMeasures}
                notesBucket={notesBucket}
                tempo={tempo}
                setTempo={setTempo}
                counter={counter}
                setCheckedState={setCheckedState}
                checkedState={checkedState}
                msgAlert={msgAlert}
                presets={presets}
                setPresets={setPresets}
                presetIndex={presetIndex}
                setPresetIndex={setPresetIndex}
                presetName={presetName}
                setPresetName={setPresetName}
              />
            }
          />
          <Route
            className='presets'
            path='/presets'
            element={
              <PresetsForm
                user={user}
                measures={measures}
                setMeasures={setMeasures}
                notesBucket={notesBucket}
                tempo={tempo}
                setTempo={setTempo}
                counter={counter}
                setCheckedState={setCheckedState}
                checkedState={checkedState}
                msgAlert={msgAlert}
                presets={presets}
                setPresets={setPresets}
                presetIndex={presetIndex}
                setPresetIndex={setPresetIndex}
                presetName={presetName}
                setPresetName={setPresetName}
              />
            }
          />
        </Routes>
      </main>
      <div className='parent'>
        {checkedState}
        <div className='home'>
          <Metronome
            className='metronome'
            setTempo={setTempo}
            setMeasures={setMeasures}
            tempo={tempo}
            measures={measures}
            decreaseTempo={decreaseTempo}
            increaseTempo={increaseTempo}
            increaseBeats={increaseBeats}
            decreaseBeats={decreaseBeats}
            slideTempo={slideTempo}
            toggleTimer={toggleTimer}
            user={user}
            counter={counter}
            setCounter={setCounter}
            notesBucket={notesBucket}
            setNotesBucket={setNotesBucket}
            checkedState={checkedState}
            setCheckedState={setCheckedState}
            total={total}
            setTotal={setTotal}
            active={active}></Metronome>
        </div>
      </div>
    </>
  )
}

export default App
