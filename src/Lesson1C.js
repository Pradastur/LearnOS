import React from 'react';
import { Link } from 'react-router-dom';



export class Lesson1C extends React.Component{
constructor(props){
	super(props);
	this.state={
		text:'',
	}
	this.submit=this.submit.bind(this);
	this.haveText=this.haveText.bind(this);
}

handleTextChange = (event) => {
	this.props.updateText(event.target.value);
    this.setState({ text: event.target.value });
}


submit(){
	if(this.state.text== 'printf("Hello World\n");' || this.state.text=='printf("Hello World");' ){
		alert('THE ANSWER IS CORRECT');
		this.props.history.replace('/levelC');
	}else{
		alert('WRONG ANSWER. TRY AGAIN');

	}
}

haveText(){
	if(this.props.text===''){
		return true;
	}
	else{
		return false;
	}
}

render(){
	let input=null;
	if(this.haveText){
		 input= <input type="text"
		 value={this.props.text}
		 onChange={this.handleTextChange}
		 name="level1"></input>
	 }
	 else{
		 input= <input type="text"
		 value={this.state.text}
		 onChange={this.handleTextChange}
		 name="level1"></input>
	 }
		return(
			<div className="Lesson">
					<div className="Level">
						<h1>C Lesson 1</h1>
						<div className="Tutorial">
							<p> This level is to get in touch with the language starting by the basics.</p>
							<p>To pass the level you have to complete the next code. The objective is to print a command line which says Hello World. </p>
							<div className="Exercise">
								<div className="code">
									<pre>
									/* Hello World program */<br></br>

										#include &lt;stdio.h&gt; <br></br>

										main()
										<div>
										 {'{'}
										 </div>
										 	{input}
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
