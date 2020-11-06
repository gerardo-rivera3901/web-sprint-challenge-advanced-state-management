import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions'
// import { NewSmurf } from './SmurfForm'
import SmurfsList from './SmurfStuff/smurfsList'

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <h3 style={{color: 'red'}}>{this.props.error}</h3>
        {/* <NewSmurf /> */}
        <SmurfsList />
        <div style={{background: 'teal', marginLeft: '8%', marginRight: '8%', marginTop: '3%', padding: '1rem', borderRadius: '15px', color: 'white'}}>
          <h2>Your Smurf Community</h2>
          <div style={{background: 'grey', marginLeft: '8%', marginRight: '8%', marginTop: '3%', padding: '1rem', borderRadius: '15px', color: 'black'}}>
            <h3 style={{textDecoration: 'underline'}}>{this.props.name}</h3>
            <h4>Age: {this.props.age}</h4>
            <h4>Height: {this.props.height}</h4>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    age: state.age,
    height: state.height
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(App);
