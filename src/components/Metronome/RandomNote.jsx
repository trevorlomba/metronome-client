import React from 'react'

const RandomNote = (props) => {
  return (
    <>
      <div className = "notes-walk">{props.currentNote.toUpperCase()} {'-> '}{props.randomNote.toUpperCase()}</div>
      {/* <h1>{props.currentNote} {'-' + '-'.repeat((props.counter))}{'> '}{props.randomNote}</h1> */}
    </>
  )
}

export default RandomNote
