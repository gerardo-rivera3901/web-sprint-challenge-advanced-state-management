import React, {useState} from 'react'
import { connect } from 'react-redux'

const initialValues = {
  name: '',
  age: '',
  height: ''
}

const onChange

export const NewSmurf = () => {
  const [text, setText] = useState(initialValues)
  return (
    <div style={{background: 'teal', marginLeft: '8%', marginRight: '8%', padding: '1rem', borderRadius: '15px', color: 'white'}}>
      <h2>Create a Smurf!</h2>
      <form>
        <input 
          style={{margin: '0.25rem'}}
          type='text'
          placeholder='Smurf Name'
        /><br />
        <input 
          style={{margin: '0.25rem'}}
          type='text'
          placeholder='Smurf Age'
        /><br />
        <input 
          style={{margin: '0.25rem'}}
          type='text'
          placeholder='Smurf Height'
        /><br />
        <button style={{margin: '0.25rem'}}>Submit</button>
      </form>
    </div>
  )
}

export default connect(null, {})(NewSmurf)