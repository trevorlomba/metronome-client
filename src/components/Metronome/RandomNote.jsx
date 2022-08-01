import React from 'react'

const RandomNote = (props) => {
  return (
    <>
      <div className = "notes-walk">{props.currentNote.toUpperCase()} {'/ '}{props.randomNote.toUpperCase()}</div>
    </>
  )
}

export default RandomNote
