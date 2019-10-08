import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PeopleTable from './components/PeopleTable';
import CharacterTable from './components/CharacterTable'
const apiKey = process.env.REACT_APP_API_KEY;
const proxyURL = "https://cors-anywhere.herokuapp.com/";
const apiURL = "https://api.salesloft.com/v2/people";
const bearer = `Bearer ${apiKey}`;


class App extends Component{

  componentDidMount(){
    this.fetchPeople()
  }

  state = {
    people: [],
    display: false
  }

  fetchPeople = () => {
    fetch(proxyURL + apiURL, {
      method: "GET",
      headers: {
        'Authorization': bearer
      }
    })
    .then(res => res.json())
    .then(res => {this.setState({...this.state, people: res.data})}
    )
  }

  collectEmails = () => {
    let allEmails = []
      this.state.people.forEach((person) => {
        allEmails.push(person.email_address)
      })
    return allEmails
  }

  characterCount = () => {
    let characters = {}
    let emails = this.collectEmails().join()
    emails.split("").map((char) => {
      characters[char] ? characters[char] += 1 : characters[char] = 1
    })
    return characters
  }

  toggleTable = () => {
    this.setState({...this.state, display: !this.state.display})
  }

  toggleButton = () => {
    if (this.state.display)
      return "Close"
    else
      return "Character Count"
  }

  render(){
    return (
      <div className="App">
      <header>
        <Button onClick={this.toggleTable}>{this.toggleButton()}</Button>
        {this.state.display ? <CharacterTable count={this.characterCount()} className="character-table" /> : null}
      </header>
        <PeopleTable people={this.state.people}/>
      </div>
    );
  }
}

export default App;
