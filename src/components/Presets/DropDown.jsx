import React, { useEffect } from 'react'

const DropDown = props => {
//   useEffect(() => presetsList(), [props.presets])
//   const presetsList = props.presets.length > 0 &&
//     props.presets.map((preset, i) => {
//       return (
//         <option key={i} value={preset.id}>{preset.name}</option>
//       )
//     })

  //   useEffect(() => {
  //     for (const [index, [notes, , owner, measures, tempo, name]] of Object.entries(props.presets)) {
  //       console.log(props.presets[index])
  //       console.log(props.presets[notes])
  //       console.log(props.presets[measures])
  //       console.log(props.presets[owner])
  //       console.log(index[0])
  //       console.log(notes[0] + ': ' + notes[1])
  //       console.log(owner[0] + ': ' + owner[1])
  //       console.log(measures[0] + ': ' + measures[1])
  //       console.log(tempo[0] + ': ' + tempo[1])
  //       console.log(name[0] + ': ' + name[1])
  //       presetsList.push(name[1])
  //       console.log(presetsList)
  //     }
  //     return presetsList
  //   }
  //   )
  useEffect(() => {
    presetsArray = props.presets
  }, [props.presets])

  let presetsArray = props.presets?.map((preset, i = 0) => {
    i++
    return (
      <option key = {preset._id}>{i}. {preset[6][1]}_{preset[5][1]}/{preset[4][1]}_{preset[1][1]}_{preset[2][1]}</option>
    )
  })

  return (
    <>
      <div key={props.presets.length}>
        {/* <h2>{props.presets[1]}</h2> */}
        {/* <h2>{() => presetsList}</h2> */}
        {/* <h2>{presetsList}</h2> */}
        {/* {props.presets[4]} */}
        {/* {props.presets} */}
        <select id = "preset-dropdown" onChange={() => props.setPresetIndex(document.getElementById('preset-dropdown').selectedIndex)}>
          <option hidden>Select A Preset</option>
          {presetsArray}
        </select>
      </div>
    </>
  )
}

export default DropDown
