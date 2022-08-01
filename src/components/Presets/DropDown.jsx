/* eslint-disable multiline-ternary */
import React from 'react'

const DropDown = props => {
  const handleChange = () => {
    props.setPresetIndex(document.getElementById('preset-dropdown').selectedIndex)
  }

  return (
    <>
      {props.presets.length > 0 ? 'select or create a preset' : 'create a preset'}
      <div key={props.presets.length}>
        {props.presets.length > 0 ? <select id = "preset-dropdown" onChange={handleChange}>
          {props.presets.map(({ tempo, measures, notes }, i = 0) => {
            i++
            return (
              <>
                <option key={i}>{i}) {tempo} | {measures} | {notes}</option>
              </>
            )
          })}
        </select> : '' }
      </div>
    </>
  )
}

export default DropDown
