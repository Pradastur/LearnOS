import React from 'react'

export class AddTutorial extends React.Component{

  constructor(props){
    super(props);


  }

  render(){
    return(
      <div className="Exercise">
        <div className="Exercise Name">
          <div className="Exercise Name Title">
          			<label> <b> Exercise </b> </label>
          </div>
          <div className="Exercise Name Input">
            <input type="text"	placeholder="Enter Language" name="language"/>
          </div>
        </div>
        <div className="Exercise Description">
         <div className="Exercise Description Title">
                <label> <b> Description </b> </label>
         </div>
         <div className="Exercise Description Input">
           <input type="text"	placeholder="Enter Description"/>
         </div>
        </div>
        <div className="Exercise Type">
          <div className="Exercise Type Title">
               <label> <b> Type </b> </label>
            </div>
          <div className="Exercise Type Input">
          <input type="text"	placeholder="Enter Type: 1, 2 or 3"/>
            </div>
       </div>
       <div className="Exercise Answer">
         <div className="Exercise Answer Title">
              <label> <b> Answer </b> </label>
           </div>
         <div className="Exercise Answer Input">
            <input type="text"	placeholder="Enter Answer"/>
           </div>
      </div>
        <div className="Exercise Submit">
            <input id="Submit" className="buttonSubmit" type="button" value="Confirm"></input>
        </div>
      </div>
      )
  }
}
