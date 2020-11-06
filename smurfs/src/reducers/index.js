import { GET_SMURF_SUCCESS, GET_SMURF_FAILURE, POST_SMURF_SUCCESS, POST_SMURF_FAILURE } from '../actions'

const initialState = {
  smurf: {
    name: '',
    age: '',
    height: '',
    error: ''
  },
  smurfs: []
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURF_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
        smurfs: action.payload
      }
      case GET_SMURF_FAILURE:
        return {
          ...state,
          error: action.payload
        }
      case POST_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: state.smurfs
        }
      case POST_SMURF_FAILURE:
        return {
          ...state,
          error: action.payload
        }
    default:
      return state
  }
}