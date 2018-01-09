import React from 'react';
import { Link } from 'react-router-dom';


export class Lesson2Java extends React.Component{
constructor(props){
	super(props);
	this.correctChoice=this.correctChoice.bind(this);
  this.wrongChoice=this.wrongChoice.bind(this);
}

correctChoice(){
		alert('CORRECT ANSWER');
		this.props.history.replace('/levelJava');
	}

wrongChoice(){
  alert('WRONG ANSWER');
}

render(){
		return(
			<div className="Lesson">
				<div className="Level">
					<h1>Java Lesson 2</h1>
					<div className="Tutorial">
						<p> This level is prepared to start understanding the language.</p>
						<p>To pass the level you have to choose the correct answer. </p>
						<div className="Exercise">
							<div className="Question">
								<p>Which one is a valid declaration of a boolean?</p>
							</div>
              <div className="Options">
                <div>
                    <button className="buttonOption1" onClick={this.wrongChoice}>boolean b4 = Boolean.false()</button>
                    <button className="buttonOption2" onClick={this.wrongChoice}> boolean b2 = null; </button>
                </div>
                <div>
                    <button className="buttonOption3" onClick={this.wrongChoice}> boolean b2 = 'false'; </button>
                    <button className="buttonOption4" onClick={this.correctChoice}> boolean b3 = false; </button>
                </div>
              </div>
						</div>
					</div>
				</div>
			</div>
			);
	}
}
