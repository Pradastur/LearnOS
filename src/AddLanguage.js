import React from 'react'

export class AddLanguage extends React.Component{

  constructor(props){
    super(props);

    this.submit=this.submit.bind(this);
  }

  submit(){
  		alert('LANGUAGE ADDED')
      this.props.confirmLanguage();
      console.log("ESTOY AQUI")
  }

  render(){
    return(
      <div className="Language">
        <div className="Language Name">
          <div className="Language Name Title">
          			<label> <b> Language </b> </label>
          </div>
          <div className="Language Name Input">
            <input type="text"	placeholder="Enter Language" name="language"/>
          </div>
        </div>
        <div className="Language Description">
         <div className="Language Description Title">
                <label> <b> Description </b> </label>
         </div>
         <div className="Language Description Input">
           <input type="text"	placeholder="Enter Description"/>
         </div>
        </div>
        <div className="Language Submit">
            <input id="Submit" className="buttonSubmit" type="button" value="Confirm" onClick={this.submit}></input>
        </div>
      </div>
      )
  }
}
