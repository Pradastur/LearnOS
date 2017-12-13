import React from 'react';



export class Lesson1Python extends React.Component{
constructor(props){
	super(props);
	this.state={
		text:'',
	}
	this.submit=this.submit.bind(this);
}

handleTextChange = (event) => {
    this.setState({ text: event.target.value });
  };

submit(){
	if(this.state.text== 'print("Hello, world!")'){
		alert('THE ANSWER IS CORRECT');
		this.props.CorrectAnswer();
	}else{
		alert('WRONG ANSWER. TRY AGAIN');

	}
}

render(){
		return(
			<div className="Lesson">
				<div className="Level">
					<h1>Python Lesson 1</h1>
					<div className="Tutorial">
						<p> This level is to get in touch with the language starting by the basics.</p>
						<p>To pass the level you have to complete the next code. The objective is to print a command line which says Hello World. </p>
						<div className="Exercise">
							<div className="code">
								<pre>
								/* Hello World program */<br></br>
											<input type="text"
											value={this.state.text}
											onChange={this.handleTextChange}
											name="level1"></input>
								</pre>
							</div>
							<button className="SubmitExercise" onClick={this.submit}>
			  				Submit
			  			</button>
						</div>
					</div>
				</div>
			</div>
			);
	}
}
