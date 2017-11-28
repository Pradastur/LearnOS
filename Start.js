import React from 'react';
import {RectangularBox} from './RectangularBox'

export class Start extends React.Component{
	render(){
		return(
			<div className="StartGame">

				<h1> Select Level </h1>
				<div className="Languages">
					<RectangularBox pl="C" desc="This is the language C"/>
					<RectangularBox pl="Java" desc="This is the language Java"/>
					<RectangularBox pl="Python" desc="This is the language Python"/>
				</div>
			</div>
			)
	}
}