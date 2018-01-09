import React from 'react';
import { Link } from 'react-router-dom';

export class Lesson2Python extends React.Component{
constructor(props){
	super(props);
	this.correctChoice=this.correctChoice.bind(this);
  this.wrongChoice=this.wrongChoice.bind(this);
}

correctChoice(){
		alert('CORRECT ANSWER');
		this.props.history.replace('/levelPython');
}

wrongChoice(){
  alert('WRONG ANSWER');
}

render(){
		return(
			<div className="Lesson">
				<div className="Level">
					<h1>Python Lesson 2</h1>
					<div className="Tutorial">
						<p> This level is prepared to start understanding the language.</p>
						<p>To pass the level you have to choose the correct answer. </p>
						<div className="Exercise">
							<div className="Question">
								<p> a>>bc </p>
								<p>What is the output when following statement is executed ? </p>
							</div>
              <div className="Options">
                <div>
                    <button className="buttonOption1" onClick={this.wrongChoice}>a</button>
                    <button className="buttonOption2" onClick={this.wrongChoice}>bc</button>
                </div>
                <div>
                    <button className="buttonOption3" onClick={this.wrongChoice}>bca</button>
                    <button className="buttonOption4" onClick={this.correctChoice}>abc</button>
                </div>
              </div>
						</div>
					</div>
				</div>
			</div>
			);
	}
}
