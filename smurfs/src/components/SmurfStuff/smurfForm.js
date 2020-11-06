import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../../actions';

const SmurfForm = (props) => {
  const initialValues = props.smurf
  const [formValues, setFormValues] = useState(initialValues)

  const onChange = event => {
      setFormValues({
          ...formValues,
          [event.target.name]: event.target.value,
      })
  }

  const onSubmit = () => {
      props.postSmurfs(formValues)
      setFormValues(initialValues)
  }

  return (
    <form onSubmit={onSubmit} style={{background: 'teal', marginLeft: '8%', marginRight: '8%', marginTop: '3%', padding: '1rem', borderRadius: '15px', color: 'white'}}>
      <h2 style={{margin: '0.5rem'}}>Make A Smurf!</h2>
      <input 
        type='text'
        name='name'
        placeholder='Smurf Name'
        value={formValues.name}
        onChange={onChange}
        style={{margin: '0.25rem'}}
      /><br />
      <input 
        type='text'
        name='age'
        placeholder='Smurf Age'
        value={formValues.age}
        onChange={onChange}
        style={{margin: '0.25rem'}}
      /><br />
      <input 
        type='text'
        name='height'
        placeholder='Smurf Height'
        value={formValues.height}
        onChange={onChange}
        style={{margin: '0.25rem'}}
      /><br />
      <button style={{margin: '0.25rem'}}>Add Smurf</button>
    </form>
  )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        smurf: state.smurf,
        error: state.error
    }
}

export default connect(mapStateToProps, {postSmurfs})(SmurfForm)