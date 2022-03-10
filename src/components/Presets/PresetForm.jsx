import React from 'react'

// import { Link } from 'react-router-dom'

const PresetForm = (props) => {
  // const handleSubmit = event => {
  //   event.preventDefault()
  //   console.log(props.tempo, props.measure)
  // }

  return (
    <>
      <form onSubmit={props.onSubmit}>
        <h2>Hello</h2>
        <h4>{props.tempo}</h4>
        <h4>{props.measure}</h4>
        <button type='submit'>button</button>
        <h1>{props.timer}</h1>
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
