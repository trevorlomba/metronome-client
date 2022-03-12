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
    `${apiUrl}/posts`,
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
      console.log(response.data.notes)
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
export const loadPreset = async (current, user) => {
  const presetID = current.id
  axios.get(`${apiUrl}/presets/${presetID}`)
    .then(response => {
      console.log(response.data.notes)
    })
    .catch(console.error)
}
