// import React from 'react'
import React, { useState, useEffect } from 'react'

import TempoSlider from './TempoSlider'
import Measures from './Measures'
import BpmDisplay from './BpmDisplay'
import StartStop from './StartStop'
import PresetForm from '../Presets/PresetForm'

import '../../index.scss'

const Metronome = (props) => {
  const [timer, setTimer] = useState(0)
  // const [intervalID, setIntervalID] = useState(0)
  // const toggleTimer = () => {
  //   props.toggleTimer()
  // }

  // function Timer (callback, timeInterval, errorCallback) {
  //   this.timeout = ''
  //   this.timeoutID = ''
  //   this.timeInterval = timeInterval
  //   this.start = () => {
  //     this.expected = Date.now() + this.timeInterval
  //     this.timeout = setTimeout(this.round, this.timeInterval)
  //     this.timeoutID = this.timeout
  //     console.log('Started')
  //     console.log(this.timeout)
  //     return this.timeout
  //   }
  //   this.stop = () => {
  //     console.log(this.timeout)
  //     clearTimeout(this.timeout)
  //     console.log(this.timeout)
  //     console.log('Stopped')
  //   }
  //   this.round = () => {
  //     const drift = Date.now() - this.expected
  //     if (drift > this.timeInerval) {
  //       errorCallback()
  //     }
  //     callback()
  //     this.expected += this.timeInterval
  //     console.log(drift)
  //     console.log(this.timeInterval - drift)
  //     console.log(this.timeout)
  //     this.timeout = setTimeout(this.round, this.timeInterval - drift)
  //   }
  //   this.nah = () => {
  //     console.log('nah' * 50)
  //   }
  // }
  // const addResource =
  // console.log(myTimer)
  // myTimer.start()
  // let tempo = 120
  // let measures = 4

  // const click1 = new Audio('/click1.wav')
  // const click2 = new Audio('/click2.wav')

  // if (active === 1) { myTimer.start() }
  // if (active === 0) { myTimer.stop() }

  // const myTimer = new Timer(() => { console.log(props.tempo) }, 1000)

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
  const interval = ''
  console.log(interval)
  useEffect((interval) => {
    if (props.active) {
      interval = setInterval(() => {
        setTimer(timer + 1)
        console.log(props.tempo)
        console.log(props.tempo * 60)
        console.log(timer)
      }, 60000 / props.tempo)
      // console.log(interval)
      // setIntervalID(interval)
      return () => {
      // setTimer(0)
        clearInterval(interval)
      }
    }
  }

  )

  useEffect(() => {
    clearInterval(interval)
    setTimer(0)
  }, [props.active])
  // }, [props.active === 1])
  // l
  // const startMetronome = (event) => {
  //   event.preventDefault()
  //   const interval = setInterval(() => {
  //     setTimer(timer + 1)
  //     console.log(props.tempo)
  //     console.log(props.tempo * 60)
  //     console.log(timer)
  //   }, 60000 / props.tempo)
  //   console.log(interval)
  //   // setIntervalID(interval)
  // }
  // const stopMetronome = (event) => {
  //   event.preventDefault()
  //   // clearInterval(intervalID)
  // }
  // const resetCount = (event) => {
  //   event.preventDefault()
  //   // setTimer(0)
  // }
  // useEffect((callback = () => console.log('yup'), tempo = props, errorCallback) => {
  //   let timeout
  //   let timeoutID
  //   const timeInterval = tempo
  //   let expected
  //   console.log('timeout: ' + timeout)
  //   console.log('timeoutID: ' + timeoutID)
  //   console.log('timeoutInterval: ' + timeInterval)
  //   console.log('expected: ' + expected)
  //   const start = (timeout, timeoutID) => {
  //     expected = Date.now() + timeInterval
  //     timeout = setTimeout(round, timeInterval)
  //     timeoutID = timeout
  //     console.log('Started')
  //     return timeout
  //   }
  //   const round = (timeout, timeoutID) => {
  //     console.log('round')
  //     callback()
  //     const drift = Date.now() - expected
  //     if (drift > timeInterval) {
  //       errorCallback()
  //     }
  //     console.log(drift)
  //     console.log(timeInterval - drift)
  //     expected += timeInterval
  //     timeout = setTimeout(round, timeInterval - drift)
  //     timeoutID = timeout
  //   }

  //   console.log(start)
  //   console.log(round)
  //   return (
  //     clearTimeout(timeoutID)
  //   )
  // })
  // useEffect((callback, tempo = 1000, errorCallback) => {
  //   let timeout
  //   let timeoutID
  //   const timeInterval = tempo
  //   let expected
  //   console.log(timeout)
  //   console.log(timeoutID)
  //   console.log(timeInterval)
  //   console.log(expected)
  //   const start = (timeout, timeoutID) => {
  //     expected = Date.now() + timeInterval
  //     timeout = setTimeout(round, timeInterval)
  //     timeoutID = timeout
  //     console.log('Started')
  //     console.log(timeout)
  //     return timeout
  //   }
  //   const round = () => {
  //     const drift = Date.now() - expected
  //     if (drift > timeInterval) {
  //       errorCallback()
  //     }
  //     expected += timeInterval
  //     console.log(drift)
  //     console.log(timeInterval - drift)
  //     console.log(timeout)
  //     timeout = setTimeout(round, timeInterval - drift)
  //   }

  //   start()
  //   console.log(round)
  //   return (
  //     clearTimeout(timeoutID)
  //   )
  // })
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('runner')
  //     setTimeout(console.log('ran'), 1000)
  //   }, 1000)
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [props.active])
  // useEffect(() => {
  //   myTimer.start()
  //   // console.log('success')
  //   // // why can't i construct this object
  //   // const myTimer = new Timer(() => { console.log('it ran!') }, 1000)
  //   return () => {
  //     myTimer.start()
  //     console.log('unmounted')
  //   }
  // }, [props.active])
  // console.log(myTimer)

  return (
    <>
      <div><BpmDisplay tempo={props.tempo}></BpmDisplay></div>
      <div><TempoSlider onChange={props.slideTempo} className="tempo-settings" tempo={props.tempo} decreaseTempo={props.decreaseTempo} increaseTempo={props.increaseTempo}></TempoSlider></div>
      <div><Measures className="measures" measures={props.measures} increaseBeats={props.increaseBeats} decreaseBeats={props.decreaseBeats}></Measures></div>
      <div><StartStop toggleTimer={props.toggleTimer} active={props.active}/></div>
      <PresetForm tempo={props.tempo} measure={props.measures} timer={timer}/>
      {/* <PresetForm tempo={props.tempo} measure={props.measures} timer={timer} onSubmit={resetCount}/> */}
      {/* <PresetForm tempo={props.tempo} measure={props.measures} timer={timer} onSubmit={startMetronome}/> */}
      {/* <PresetForm tempo={props.tempo} measure={props.measures} timer={timer} onSubmit={stopMetronome}/> */}
      {/* <div><StartStop toggleTimer={addResource} active={props.active}/></div> */}
    </>
  )
}

export default Metronome
