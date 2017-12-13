import React from 'react';

export class Lesson3Python extends React.Component{
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
					<h1>C Lesson 3</h1>
					<div className="Tutorial">
						<p> This level is prepared to start understanding the language.</p>
						<p> Functions cannot return more than one value at a time </p>
						<div className="Exercise">
							<div className="Question">
								<p>The keyword used to transfer control from a function back to the calling function is</p>
							</div>
              <div className="Options">
                <div>
                    <button className="buttonOption1" onClick={this.correctChoice}>true</button>
                </div>
                <div>
                    <button className="buttonOption2" onClick={this.wrongChoice}>false</button>
                </div>
              </div>
						</div>
					</div>
				</div>
			</div>
			);
	}
}
