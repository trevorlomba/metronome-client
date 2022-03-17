// import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import apiUrl from '../../apiConfig'
import { createPreset, deletePreset, updatePreset, loadPreset } from '../../api/presets'
import DropDown from './DropDown'
import axios from 'axios'
import apiUrl from '../../apiConfig'
const qs = require('qs')

// import { Link } from 'react-router-dom'
// const formatDate = () => {
//   const d = new Date()
//   return (d.getDay() + 1 + '/' + d.getMonth() + 1 + '/' + d.getUTCFullYear()
//   )
// }

const PresetForm = (props) => {
  // const [presetIndex, setPresetIndex] = useState(1)
  // const [presets, setPresets] = useState(['h'])
  // const [index, setIndex] = useState(document.querySelector('#preset-dropdown').selectedIndex - 1)
  const [presets, setPresets] = useState([])
  // console.log(presets)
  const [presetIndex, setPresetIndex] = useState(0)
  const [presetName, setPresetName] = useState('default')
  // const [disabled, setDisabled] = useState(() => (presets.length))

  // const [date] = useState(formatDate())
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
  // console.log(presetName)
  const allNotes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#']
  // const notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g#']
  // const loadPreset = (index) => {
  //   console.log(index)
  //   props.setTempo(presets[index].tempo)
  //   props.setMeasures(presets[index].measures)
  //   props.setCheckedState(presets[index].notes)
  // }
  const loadAllPresets = (user) => {
    // console.log(user)
    // console.log(user.token)
    try {
      axios
        .get(`${apiUrl}/presets`, {
          params: {
            user: user.token
          },
          paramsSerializer: params => {
            return qs.stringify(params)
          }
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
        .then(response => {
          // console.log(response.data.presets)
          // console.log(response)
          // console.log(presets)
          const presetsArray = Object.entries(response.data.presets)
          // let newPresets = [...presets, presetsArray[400][1]]
          // newPresets = () => {
          for (let i = 0; i < presetsArray.length; i++) {
            setPresets(presets => [...presets, presetsArray[i][1]])
          }
          //     // console.log('NEW PRESET')
          //     // console.log(presets)
          //     // console.log(presetsArray[i])
          //     // console.log(presetsArray[i][1])
          //     // newPresets = [...presets, presetsArray[i][1]]
          //   }
          // }
          // console.log(typeof presetsArray)
          // console.log(presets)
          // console.log(presets)
        })
    } catch (error) { console.error(error) }
  }

  useEffect(() => {
    loadAllPresets(props.user)
    // setDisabled(() => (presets.length))
  }, [])

  let presetsList
  // console.log(presetsList)
  useEffect((presetsList) => {
    // console.log('ran')
    // console.log(presets)
    presetsList = presets.map((preset) => (
      <li key={preset._id}>
        {preset}
      </li>))
    // console.log(presetsList)
    return presetsList
  })
  // console.log(presetsList)

  const addToPresets = response => {
    const presetsArray = response.data.preset
    // console.log(`${presetsArray} presetsarray`)
    // console.log(presetsArray)
    const newPresets = [...presets, presetsArray]
    setPresets(newPresets)
    // setDisabled(() => (presets.length))
  }

  const removeFromPresets = () => {
    const preset = presets[presetIndex]._id
    // console.log(`${preset} presetToRemove`)
    // console.log(presets)
    const newPresets = presets.filter((obj) => {
      return obj._id !== preset
    })
    // const newPresets = [presets.splice(presetIndex)]
    // console.log(newPresets)
    setPresets(newPresets)
    // setDisabled(() => (presets.length))
    document.getElementById('preset-dropdown').selectedIndex = 0
    setPresetIndex(0)
    // console.log(presets)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(props.checkedState)
    // console.log(presetIndex)
    const current = {
      checks: props.checkedState,
      measures: props.measures,
      tempo: props.tempo,
      name: presetName,
      notes: extractNotes(props.checkedState),
      index: presetIndex
    }
    if (props.user) { current.owner = props.user.token }
    // console.log(current)
    switch (event.nativeEvent.submitter.name) {
    case 'post':
      createPreset(current, props.user)
        .then(response => addToPresets(response))
        // .then(response => console.log(response.data.preset))
        // .then(response => props.setCheckedState(response.data.notes))
        .catch(console.error)
      break
    case 'delete':
      // UPDATE TO REMOVE FROM STATE
      if (presets[0]) {
        current.id = presets[presetIndex]._id
        deletePreset(current, props.user)
          // .then(console.log(presets))
          // .then(() => setPresets(presets.pop(presetIndex)))
          // // .then(response => { props.setCheckedState(response.data.notes) })
          .then(removeFromPresets)
          // .then(console.log(presets))
          .catch(console.error)
      }

      break
    case 'load':
      if (presets[0]) {
        current.id = presets[presetIndex]._id
        handleSelectNewPreset()
          .then(loadPreset(current, props.user))
        // .then(response => { props.setCheckedState(response.data.notes) })
          .catch(console.error)
      }

      break
    case 'edit':
      if (presets[0]) {
        current.id = presets[presetIndex]._id
        updatePreset(current, props.user)
        // .then(response => { props.setCheckedState(response.data.notes) })
          .catch(console.error)
      }
      break
    }
  }
  // const handlePresetChange = () => {
  //   console.log('handlepreset')
  //   // props.loadPreset(document.getElementById('myList').options[document.getElementById('myList').selectedIndex].index)
  //   // props.setPresetIndex(document.getElementById('myList').options[document.getElementById('myList').selectedIndex].index)
  // }
  // const renderedPresets = presets.map(preset => {
  //   return (
  //     <li key={preset._id}>
  //       <Link to={`/presets/${preset._id}`}>
  //         <h6>{preset.title}</h6>
  //       </Link>
  //       <p>{preset.author}</p>
  //     </li>
  //   )
  // })

  // console.log(renderedPresets)

  const handleCheckChange = (position) => {
    const updatedCheckedState = props.checkedState.map((item, index) =>
      index === position ? !item : item
    )
    // console.log(updatedCheckedState)
    props.setCheckedState(updatedCheckedState)
    // console.log(updatedCheckedState.length)
    // console.log(props.checkedState[1])
  }

  const handleSelectNewPreset = async () => {
    // const index = document.querySelector('#preset-dropdown').selectedIndex - 1
    props.setCheckedState(presets[presetIndex].checks)
    props.setTempo(presets[presetIndex].tempo)
    props.setMeasures(presets[presetIndex].measures)
    setPresetName(presets[presetIndex].name)
    // document.getElementById('presetName').innerHTML(presetName)
  }

  const handlePresetNameChange = (event) => {
    let updatedPreset
    if (event.nativeEvent.data) {
      updatedPreset = presetName + event.nativeEvent.data
      // console.log(updatedPreset)
    } else {
      updatedPreset = presetName.substring(0, presetName.length - 1)
    }
    setPresetName(updatedPreset)
  }
  const extractNotes = (preset = [props.checkState]) => {
    // console.log('extractNotes')
    let i
    const arr = []
    console.log(i)
    // console.log(arr)
    preset?.map((check, i) => {
      i++
      if (check) {
        arr.push(allNotes[i - 1] + '/')
      }
      return check
    })
    return (arr.splice(0, arr.length - 0))
  }
  // console.log(props.checkedState)
  // console.log(allNotes)
  return (
    <>
      {presetsList}
      {/* <form onSubmit={props.onSubmit}>
        <h2>Hello</h2>
        <h4>{props.tempo}</h4>
        <h4>{props.measure}</h4>
        <button type='submit'>button</button>
        <h1>{props.counter + 1}</h1>
      </form> */}
      <form onSubmit={handleSubmit}>
        <div>
          {allNotes.map(({ name }, index) => {
            return (
              <>
                {props.presets}
                <input key={index}
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={allNotes[index]}
                  value={allNotes[index]}
                  checked={props.checkedState[index]}
                  onChange={() => handleCheckChange(index, allNotes[index])}
                />
                <label htmlFor={`custom-checkbox-${index}`}>{allNotes[index].toUpperCase()} {''}</label>
              </>
            )
          })}
        </div>
        {/* {document.querySelector} */}
        {/* {presetsList} */}
        {/* {console.log(presetIndex)} */}
        {/* {presetIndex} */}
        {/* {props.tempo} */}
        <b> select a preset </b>
        {() => (presets.length)}
        <div><DropDown extractNotes={extractNotes} presets={presets} tempo={props.tempo}presetIndex={presetIndex}setPresetIndex={setPresetIndex} setPresets={setPresets}/><button name='load' type='submit' className='presetButtons' >Load</button><button name='edit' type='submit' className='presetButtons' >Update</button><button name='delete' type='submit' className='presetButtons' >Delete</button></div><input id='presetName' value={presetName} onChange = {handlePresetNameChange}></input><button name='post' type='submit'>Save As</button>
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
