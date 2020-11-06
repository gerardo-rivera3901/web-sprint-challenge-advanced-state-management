import axios from "axios"

export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS'
export const GET_SMURF_FAILURE = 'GET_SMURF_FAILURE'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE'

export const fetchSmurfs = () => {
  return (dispatch) => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        res.data.map(smurf => {
          dispatch({ type: GET_SMURF_SUCCESS, payload: res.data[smurf.id] })
        })
      })
      .catch(err => {
        dispatch({ type: GET_SMURF_FAILURE, payload: err.message})
      })
  }
}

export const postSmurfs = (smurf) => {
  return (dispatch) => {
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        console.log(res)
        dispatch({ type: POST_SMURF_SUCCESS, payload: res.data})
      })
      .catch(err => {
        dispatch({ type: POST_SMURF_FAILURE, payload: err.message })
      })
  }
}