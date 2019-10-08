import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PeopleTable from './components/PeopleTable';
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

  characterCount = () => {
    console.log("VOILA! EMAIL CHARACTERS!")
  }

  render(){
  return (
    <div className="App">
    <header>
      <Button onClick={this.characterCount}>Character Count</Button>
    </header>
        <PeopleTable people={this.state.people}/>
    </div>
  );
}
}

export default App;
