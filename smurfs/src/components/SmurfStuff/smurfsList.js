import React, {useEffect} from 'react'
import { connect } from 'react-redux'
// import Smurf from './smurf'
import { fetchSmurfs } from '../../actions'

const SmurfsList = (props) => {
  useEffect(() => {
      props.fetchSmurfs()
      console.log(props);
  }, [])

  return (
    <div>
      {/* <h2>Smurfs</h2>
      <p>{props.error}</p>
      {props.smurfs.map((smurf) => (
          <Smurf smurf={smurf}/> 
      ))} */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfsList)