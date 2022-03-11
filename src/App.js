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

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [tempo, setTempo] = useState(120)
  const [measures, setMeasures] = useState(4)
  const [active, setActive] = useState(0)

  console.log(setMeasures)
  console.log(setTempo)

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  const tempoDisplay = document.querySelector('.tempo')
  console.log(tempoDisplay)
  const tempoText = document.querySelector('.tempo-text')
  console.log(tempoText)
  const decreaseTempoBtn = document.querySelector('.decrease-tempo')
  console.log(decreaseTempoBtn)
  const increaseTempoBtn = document.querySelector('.increase-tempo-button')
  console.log(increaseTempoBtn)
  const tempoSlider = document.querySelector('.slider')
  console.log(tempoSlider)
  const startStopBtn = document.querySelector('.start-stop-button')
  console.log(startStopBtn)
  const subtractBeats = document.querySelector('.subtract-beats')
  console.log(subtractBeats)
  // const addBeats = document.querySelector('.add-beats')
  // console.log(addBeats)
  const BpmDisplayElement = document.querySelector('.bpm-display')
  console.log(BpmDisplayElement)
  const metronome = { but: 'that' }
  console.log(metronome)
  const beatsDisplay = document.querySelector('.beats-display')
  console.log(beatsDisplay)
  // while (active) {
  //   setActive(0)
  // }

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
      // myTimer.start()
      break
    default:
      stat = 0
      // myTimer.stop()
      break
    }
    setActive(stat)
  }
  // if (active === 0) {
  //   myTimer.stop()
  // } else {
  //   myTimer.start()
  // }
  // console.log(myTimer)

  // const stopTimer = () => {
  //   myTimer.start()
  // }
  // console.log(startTimer)
  // console.log(stopTimer)

  return (
    <>
      <Header user={user} />
      {msgAlerts.map(msgAlert => (
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
            element={<SignUp msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-in'
            element={<SignIn msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-out'
            element={<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} /> }
          />
          <Route
            path='/change-password'
            element={<ChangePassword msgAlert={msgAlert} user={user} /> }
          />

        </Routes>
      </main>
      <div className="parent">
        <div className="home">
          <Metronome className="metronome"
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
            // addResource={addResource}
            active={active}></Metronome>
        </div>
      </div>
    </>
  )
}

export default App
