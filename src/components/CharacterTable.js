import React, {Component} from 'react';
import { Table } from 'react-bootstrap';

class CharacterTable extends Component{

  renderTableRow = (chars) => {
    let sortedChars = Object.keys(chars).sort(function(a, b) { return chars[b] - chars[a] });
    return(
      sortedChars.map( (key) => {
        return(
          <tr>
            <td>{key}</td>
            <td>{chars[key]}</td>
          </tr>
        )
      })
    )
  }

  render(){
    return(
      <Table>
        <thead>
          <tr>
            <th>Character</th>
            <th>Frequency</th>
            </tr>
        </thead>
        <tbody>
          {this.renderTableRow(this.props.count)}
        </tbody>
      </Table>
    )
  }
}

export default CharacterTable;
