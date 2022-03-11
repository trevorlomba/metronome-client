import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'

// import { Link } from 'react-router-dom'

const PresetForm = (props) => {
  const [presets, setPresets] = useState([{ name: 'that', tempo: 120, notes: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], measures: 4 }, { name: 'this', tempo: 20, notes: [false, true, true, false, true, true, true, true, true, true, true, true, false, true, true, true], measures: 3 }])
  const [presetName, setPresetName] = useState(null)
  // const handleSubmit = event => {
  //   event.preventDefault()
  //   console.log(props.tempo, props.measure)
  // }
  // const getFormattedPrice = (price) => `$${price.toFixed(2)}`

  // const arr = []
  // presets.map(preset =>
  //   arr.push(preset))
  // console.log(arr)
  const arr = []
  console.log(arr)
  console.log(presetName)
  const allNotes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#']
  // const notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g#']

  useEffect(() => {
    axios
      .get(`${apiUrl}/presets`)
      .then(response => setPresets(response.data.presets))
      .catch(console.error)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const current = {
      notes: props.notesBucket,
      measures: props.measures,
      tempo: props.tempo,
      name: presetName
    }
    console.log(current)
    if (event.nativeEvent.submitter.name === 'post') {
      if (document.getElementById('presetName').value) { setPresetName(document.getElementById('presetName').value.name) } else {
        setPresetName(() => {
          const d = new Date()
          return (d.getDay() + 1 + '/' + d.getMonth() + 1 + '/' + d.getUTCFullYear()
          )
        })
      }
      axios.post(`${apiUrl}/presets`, { current })
        .then(response => {
          console.log(response)
          console.log(response.data)
          console.log(response.data.notes)
          props.setCheckedState(response.data.notes)
        })
        .catch(console.error)
    } else if (event.nativeEvent.submitter.name === 'edit') {
      if (document.getElementById('presetName').value) { setPresetName(document.getElementById('presetName').value) } else { setPresetName(presets[props.presetIndex]) }
      const presetID = 1
      axios.patch(`${apiUrl}/presets/${presetID}`, { current })
        .then(response => {
          console.log(response)
          console.log(response.data)
          console.log(response.data.notes)
          props.setCheckedState(response.data.notes)
        })
        .catch(console.error)
    } else if (event.nativeEvent.submitter.name === 'delete') {
      axios.delete(`${apiUrl}/presets/${props.presetIndex}`)
        .then(response => {
          console.log(response)
          console.log(response.data)
          console.log(response.data.notes)
          props.setCheckedState(response.data.notes)
        })
        .catch(console.error)
    }
  }
  const handlePresetChange = () => {
    props.loadPreset(document.getElementById('myList').options[document.getElementById('myList').selectedIndex].index)
    props.setPresetIndex(document.getElementById('myList').options[document.getElementById('myList').selectedIndex].index)
  }
  const renderedPresets = presets.map(preset => {
    return (
      <li key={preset._id}>
        <Link to={`/presets/${preset._id}`}>
          <h6>{preset.title}</h6>
        </Link>
        <p>{preset.author}</p>
      </li>
    )
  })

  // console.log(renderedPresets)

  const handleOnChange = (position, value) => {
    const updatedCheckedState = props.checkedState.map((item, index) =>
      index === position ? !item : item
    )
    console.log(updatedCheckedState)
    props.setCheckedState(updatedCheckedState)
    console.log(updatedCheckedState.length)
    console.log(props.checkedState[1])
  }
  return (
    <>
      {/* <form onSubmit={props.onSubmit}>
        <h2>Hello</h2>
        <h4>{props.tempo}</h4>
        <h4>{props.measure}</h4>
        <button type='submit'>button</button>
        <h1>{props.counter + 1}</h1>
      </form> */}
      <form onSubmit={handleSubmit}>
        {allNotes.map(({ name }, index) => {
          return (
            <ul key={index}>
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={allNotes[index]}
                value={allNotes[index]}
                checked={props.checkedState[index]}
                onChange={() => handleOnChange(index, allNotes[index])}
              />
              <label htmlFor={`custom-checkbox-${index}`}>{allNotes[index]}</label>
            </ul>
          )
        })}

        {/* {presets[1]} */}
        <form>
          <b> select a preset </b>
          <select id = "myList" onChange = {handlePresetChange} >
            {renderedPresets.map(({ name }, index) => {
              return (
                <option key={index}>{presets[index].name}: {presets[index].tempo} - {presets[index].notes.map(notes => (notes + '|'))} - {presets[index].measures}</option>
              )
            })}
          </select>
        </form>
        <div><input id='presetName'></input><button name='post' type='submit'>Save As New</button> <button name='edit' type='submit'>Update Preset</button><button name='delete' type='submit'>Delete Preset</button></div>
      </form>
    </>
  )
}

// const PresetForm = ({ book, handleChange, handleSubmit, cancelUrl }) => {
//   <>
//     <form onSubmit={handleSubmit}>
//       <label htmlFor={'title'}>Title</label>
//       <input
//         id={'title'}
//         // value represents what is in state
//         value={book.title}
//         // when the input changes -- state is updated
//         onChange={handleChange}
//         name='title'
//       />

//       <label htmlFor='author'>Author:</label>
//       <input
//         id='author'
//         value={book.author}
//         onChange={handleChange}
//         name='author'
//       />

//       <button type='submit'>SUBMIT TO THE FORM</button>
//     </form>

//     <Link to={cancelUrl}>GET ME OUTTA HERE!!!!</Link>
//   </>
// }

export default PresetForm
