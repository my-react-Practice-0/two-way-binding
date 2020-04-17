import React, { Component } from 'react'
import './App.css'
class App extends Component {
  state =  {
    name : 'asd'
  }

  changeName = (newName) => {
    this.setState({
      name:newName
    })
  }

  changeNameFromInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className='App'>
        <button onClick={()=>{return this.changeName('yoyo')}}>change state using anon func</button>
        <button onClick={this.changeName.bind(this,'bind yoyoy')}>change state using bind</button>
        <br/><br/>
        <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
        <br/><br/>
        {this.state.name}
      </div>
    )
  }
}

export default App
