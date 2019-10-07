import React, { Component } from 'react';
import './App.css';
const apiKey = process.env.REACT_APP_API_KEY;
const proxyURL = "https://cors-anywhere.herokuapp.com/";
const apiURL = "https://api.salesloft.com/v2/people";
const bearer = `Bearer ${apiKey}`;


class App extends Component{
  componentDidMount(){
    this.fetchPeople()
  }

  state = {
    people: []
  }


  fetchPeople = () => {
    fetch(proxyURL + apiURL, {
      method: "GET",
      headers: {
        'Authorization': bearer
      }
    })
    .then(res => res.json())
    .then(res => {this.setState({people: res.data})}
    )
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>YOU WORKIN OR NAH?</h1>
    </div>
  );
}
}

export default App;
