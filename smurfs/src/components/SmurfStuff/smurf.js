import React from 'react';

const Smurf = (props) => {
  return(
    <div style={{background: 'grey', marginLeft: '8%', marginRight: '8%', marginTop: '3%', padding: '1rem', borderRadius: '15px', color: 'black'}}>
      <h3 style={{textDecoration: 'underline'}}>{props.smurf.name}</h3>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
  )
}

export default Smurf