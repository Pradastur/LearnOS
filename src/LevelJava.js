import React from 'react';
import { Link } from 'react-router-dom';



export class LevelJava extends React.Component{
	constructor(props){
		super(props);
		}

		render(){
		return(
			<div className="level">
				<div className="title">
					<h1>Java</h1>
				</div>
				<div className="Video">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/3u1fu6f8Hto"
					frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
				</div>
				<div className="listLevel">
					<ul>
					<Link to='levelJava_1'><li>Lesson 1</li></Link>
					<Link to='levelJava_2'><li>Lesson 2</li></Link>
					<Link to='levelJava_3'><li>Lesson 3</li></Link>
					</ul>
				</div>
			</div>
			)
		}
}
