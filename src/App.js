import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import {NavBar} from './NavBar'
import {Content} from './Content'
import {RectangularBox} from './RectangularBox'
import {LogIn} from './LogIn'
import {Register} from './Register'
import {Start} from './Start'
import logo from './logo.png'


class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
    }

    this.changeContent= this.changeContent.bind(this);
    this.showTextContent=this.showTextContent.bind(this);
    this.main=this.main.bind(this);
    this.LogIn=this.LogIn.bind(this);
    this.Register=this.Register.bind(this);
    this.logged=this.logged.bind(this);
  }

  changeContent() {
    switch(this.state.id){
      case 0: 
        return(<Content/>);
      case 1: 
        return(<LogIn loggedIn={this.logged}/>);
      case 2:
        return(<Register loggedIn={this.logged}/>);
      case 3:
        return(<Start/>)
      default:
        return(<Content/>);
    }
  }

  main(){
    this.setState({
      id:0
    });
  }

  LogIn(){
    this.setState({
      id:1
    });
  }

  Register(){
    this.setState({
      id:2
    });
  }

  showTextContent(){
    const newTextContent = this.state.showText == false ? true : false;
    this.setState({ showText: newTextContent });
  }

  logged(){
    this.setState({
      id:3
    });
  }

  render() {
    return (
      <div className="App">
      <div className="Nav">
        <NavBar onSignIn={this.LogIn} onRegister={this.Register}/>
      </div>
      <div className="Logo">
          <img src={logo} className='logo' alt="logo" onClick={this.main}/>
        </div>
      {this.changeContent()} 
      </div>
    );
}
}

export default App;
