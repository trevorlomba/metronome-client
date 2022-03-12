import React from 'react'

const RandomNote = (props) => {
  return (
    <>
      <h1>{props.currentNote.toUpperCase()} {'-> '}{props.randomNote.toUpperCase()}</h1>
      {/* <h1>{props.currentNote} {'-' + '-'.repeat((props.counter))}{'> '}{props.randomNote}</h1> */}
    </>
  )
}

export default RandomNote
