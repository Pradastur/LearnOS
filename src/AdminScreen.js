import React from 'react';

export class AdminScreen extends React.Component{
  render(){
    return(
      <div className="AdminContent">
      <div>
        <h1>Hi, Admin!!</h1>
        </div>
      <div>
        <h2>What do you want to do???</h2>
      </div>
      <div className="List of Actions">
        <ul>
          <li>Add Language</li>
          <li>Add Exercise</li>
        </ul>
      </div>
      </div>
    )
  }
}
