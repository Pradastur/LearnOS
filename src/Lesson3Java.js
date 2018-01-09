import React from 'react';
import { Link } from 'react-router-dom';


export class Lesson3Java extends React.Component{
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
					<h1>Java Lesson 3</h1>
					<div className="Tutorial">
						<p> This level is prepared to start understanding the language.</p>
						<div className="Exercise">
							<div className="Question">
								<p>Assignment operator is evaluated Left to Right.</p>
							</div>
              <div className="Options">
                <div>
                    <button className="buttonOption1" onClick={this.wrongChoice}>true</button>
                </div>
                <div>
                    <button className="buttonOption2" onClick={this.correctChoice}>false</button>
                </div>
              </div>
						</div>
					</div>
				</div>
			</div>
			);
	}
}
