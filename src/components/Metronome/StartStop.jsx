import React from 'react'

const StartStop = (props) => (
  <>
    <button className='start-stop flex-item' onClick={props.toggleTimer}>
      {props.active ? 'stop' : 'start'}
    </button>
  </>
)

export default StartStop
