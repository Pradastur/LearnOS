import React from 'react';
import { Link } from 'react-router-dom';

export class Lesson1Java extends React.Component{
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
	if(this.state.text== 'System.out.println("Hello World");'){
		alert('THE ANSWER IS CORRECT');
		this.props.history.replace('/levelJava');
	}else{
		alert('WRONG ANSWER. TRY AGAIN');

	}
}

render(){
		return(
			<div className="Lesson">
				<div className="Level">
					<h1>Java Lesson 1</h1>
					<div className="Tutorial">
						<p> This level is to get in touch with the language starting by the basics.</p>
						<p>To pass the level you have to complete the next code. The objective is to print a command line which says Hello World. </p>
						<div className="Exercise">
							<div className="code">
								<pre>
								/* Hello World program */<br></br>

									main()
									<div>
									 {'{'}
									 </div>
											<input type="text"
											value={this.state.text}
											onChange={this.handleTextChange}
											name="level1"></input>
									<div>
										 {'}'}
										</div>
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
