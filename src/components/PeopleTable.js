import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class PeopleTable extends Component{

  renderTableRow = (people) => {
    return(
      people.map( (person) => {
        return(
          <tr key={person.id}>
            <td>{person.display_name}</td>
            <td>{person.email_address}</td>
            <td>{person.phone}</td>
          </tr>
        )
      })
    )
  }


  render(){
    return(
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
            <th>Job Title</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTableRow(this.props.people)}
        </tbody>
      </Table>
    )
  }
}

export default PeopleTable;
