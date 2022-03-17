import axios from 'axios'
import apiUrl from '../apiConfig'

export const createPreset = async (current, user) => {
  console.log(current)
  console.log(user)
  console.log(user.token)
  return axios.post(`${apiUrl}/presets`,
    {
      preset: {
        owner: user,
        measures: current.measures,
        tempo: current.tempo,
        name: current.name,
        notes: current.notes,
        checks: current.checks
      }
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

  )
}

export const createPost = (title, content, user) => {
  return axios.post(
    `${apiUrl}/presets`,
    { post: { title, content } },
    // Pass along the authorization which includes our user's token
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

export const updatePreset = async (current, user) => {
  const presetID = current.id
  axios.patch(`${apiUrl}/presets/${presetID}`, {
    preset: {
      owner: user,
      measures: current.measures,
      tempo: current.tempo,
      name: current.name,
      notes: current.notes,
      checks: current.checks
    }
  },
  {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  }
  )
    .then(response => {
      console.log(response)
    })
    .catch(console.error)
}

export const deletePreset = async (current, user) => {
  const presetID = current.id
  axios.delete(`${apiUrl}/presets/${presetID}`,
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
    .then(response => {
      console.log(response.data.notes)
    })
    .catch(console.error)
}

export const deleteAllPresets = async (user) => {
  axios.delete(`${apiUrl}/presets`,
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
    .then(response => {
      console.log(response.data.notes)
    })
    .catch(console.error)
}

export const loadPreset = async (current, user) => {
  const presetID = current.id
  axios.get(`${apiUrl}/presets/${presetID}`)
    .then(response => {
      console.log(response.data.notes)
    })
    .catch(console.error)
}

// export const loadAllPresets = async (user) => {
//   try {
//     axios
//       .get(`${apiUrl}/presets`, {
//         params: {
//         // owner: user.token
//           _id: '622be6a5c8a0d5b0d537f939'
//         }
//       })
//       .then(response => {
//         console.log(response.data.presets)
//         console.log(response)
//         return response
//       })
//   } catch (error) { console.error(error) }
// }
