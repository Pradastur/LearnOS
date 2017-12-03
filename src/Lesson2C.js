import React from 'react';

export class Lesson2C extends React.Component{
constructor(props){
	super(props);
	this.correctChoice=this.correctChoice.bind(this);
  this.wrongChoice=this.wrongChoice.bind(this);
}

correctChoice(){
		alert('CORRECT ANSWER');
    this.props.CorrectAnswer();
}

wrongChoice(){
  alert('WRONG ANSWER');
}

render(){
		return(
			<div className="Lesson">
				<div className="Level">
					<h1>C Lesson 1</h1>
					<div className="Tutorial">
						<p> This level is prepared to start understanding the language.</p>
						<p>To pass the level you have to choose the correct answer. </p>
						<div className="Exercise">
							<div className="Question">
								<p>The keyword used to transfer control from a function back to the calling function is</p>
							</div>
              <div className="Options">
                <div>
                    <button className="buttonOption1" onClick={this.wrongChoice}>switch</button>
                    <button className="buttonOption2" onClick={this.wrongChoice}>goto</button>
                </div>
                <div>
                    <button className="buttonOption3" onClick={this.wrongChoice}>go</button>
                    <button className="buttonOption4" onClick={this.correctChoice}>return</button>
                </div>
              </div>
						</div>
					</div>
				</div>
			</div>
			);
	}
}
