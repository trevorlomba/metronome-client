import React, { useEffect, useState } from 'react'
import { createPreset, deletePreset, updatePreset, loadPreset } from '../../api/presets'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import './presetForm.scss'
const qs = require('qs')

const NotesForm = (props) => {
  const [presets, setPresets] = useState([])
  const [presetIndex, setPresetIndex] = useState(0)
  const [presetName, setPresetName] = useState('default')
  const arr = []
  console.log(arr)
  const allNotes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#']
  const loadAllPresets = (user) => {
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
          const presetsArray = Object.entries(response.data.presets)
          for (let i = 0; i < presetsArray.length; i++) {
            setPresets(presets => [...presets, presetsArray[i][1]])
          }
        })
    } catch (error) { console.error(error) }
  }

  useEffect(() => {
    loadAllPresets(props.user)
  }, [])

  const addToPresets = response => {
    const presetsArray = response.data.preset
    const newPresets = [...presets, presetsArray]
    setPresets(newPresets)
  }

  const removeFromPresets = () => {
    const preset = presets[presetIndex]._id
    const newPresets = presets.filter((obj) => {
      return obj._id !== preset
    })
    setPresets(newPresets)
    document.getElementById('preset-dropdown').selectedIndex = 0
    setPresetIndex(0)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const current = {
      checks: props.checkedState,
      measures: props.measures,
      tempo: props.tempo,
      name: presetName,
      notes: extractNotes(props.checkedState),
      index: presetIndex
    }
    if (props.user) { current.owner = props.user.token }
    switch (event.nativeEvent.submitter.name) {
    case 'post':
      createPreset(current, props.user)
        .then(response => addToPresets(response))
        .catch(console.error)
      break
    case 'delete':
      // UPDATE TO REMOVE FROM STATE
      if (presets[0]) {
        current.id = presets[presetIndex]._id
        deletePreset(current, props.user)
          .then(removeFromPresets)
          .catch(console.error)
      }

      break
    case 'load':
      if (presets[0]) {
        current.id = presets[presetIndex]._id
        handleSelectNewPreset()
          .then(loadPreset(current, props.user))
          .catch(console.error)
      }

      break
    case 'edit':
      if (presets[0]) {
        current.id = presets[presetIndex]._id
        updatePreset(current, props.user)
          .catch(console.error)
      }
      break
    }
  }

  const handleCheckChange = (position) => {
    const updatedCheckedState = props.checkedState.map((item, index) =>
      index === position ? !item : item
    )
    props.setCheckedState(updatedCheckedState)
  }

  const handleSelectNewPreset = async () => {
    props.setCheckedState(presets[presetIndex].checks)
    props.setTempo(presets[presetIndex].tempo)
    props.setMeasures(presets[presetIndex].measures)
    setPresetName(presets[presetIndex].name)
  }

  const extractNotes = (preset = [props.checkState]) => {
    let i
    const arr = []
    console.log(i)
    preset?.map((check, i) => {
      i++
      if (check) {
        arr.push(allNotes[i - 1] + '/')
      }
      return check
    })
    return (arr.splice(0, arr.length - 0))
  }
  return (
    <>
      <container className="settings">
        <form className="form" onSubmit={handleSubmit}>
          {/* {presetsList} */}
          <div>
            {allNotes.map(({ name }, index) => {
              return (
                <>
                  {props.presets}
                  <input key={index}
                    className="checks"
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={allNotes[index]}
                    value={allNotes[index]}
                    checked={props.checkedState[index]}
                    onChange={() => handleCheckChange(index, allNotes[index])}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{allNotes[index].toUpperCase()}{' '}</label>
                </>
              )
            })}
          </div>
        </form>
      </container>
    </>
  )
}

export default NotesForm
