import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Smurf from './smurf'
import { fetchSmurfs } from '../../actions'

const SmurfsList = props => {
  useEffect(() => {
      props.fetchSmurfs()
  }, [])

  return (
    <div style={{background: 'teal', marginLeft: '8%', marginRight: '8%', marginTop: '3%', padding: '1rem', borderRadius: '15px', color: 'white'}}>
      <h2>Smurfs in Your Community</h2>
      <p>{props.error}</p>
      {props.smurfs.map((smurf) => (
          <Smurf smurf={smurf}/> 
      ))}
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