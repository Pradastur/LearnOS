import React from 'react';
import './App.css';
import {NavBar} from './NavBar'
import {Content} from './Content'
import {LogIn} from './LogIn'
import {LogOut} from './LogOut'
import {Register} from './Register'
import {NavBarLogOut} from './NavBarLogOut'
import {Start} from './Start'
import {LevelC} from './LevelC'
import {LevelJava} from './LevelJava'
import {LevelPython} from './LevelPython'
import {Lesson1C} from './Lesson1C'
import {Lesson2C} from './Lesson2C'
import logo from './logo.png'


class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      selectedCode: null,
      idLevel: null,
      isLogged:false,
      textEx:''
    }
    this.changeContent= this.changeContent.bind(this);
    this.showTextContent=this.showTextContent.bind(this);
    this.main=this.main.bind(this);
    this.LogIn=this.LogIn.bind(this);
    this.Register=this.Register.bind(this);
    this.levelC=this.levelC.bind(this);
    this.levelJava=this.levelJava.bind(this);
    this.levelPython=this.levelPython.bind(this);
    this.trueLog=this.trueLog.bind(this);
    this.logged=this.logged.bind(this);
    this.logOut=this.logOut.bind(this);
    this.changeLesson1=this.changeLesson1.bind(this);
    this.changeLesson2=this.changeLesson2.bind(this);
    /*this.changeLanguage=this.changeLanguage.bind(this);*/
  }

  changeContent() {
    switch(this.state.id){
      case 0:
        return(<Content/>);
      case 1:
        return(<LogIn loggedIn={this.logged} LogNow={this.trueLog}/>);
      case 2:
        return(<Register LogNow={this.trueLog}/>);
      case 3:
        return(<Start enterLevelC={()=>this.levelC()} enterLevelJava={()=>this.levelJava()} enterLevelPython={()=>this.levelPython()} />);
      case 4:
        return(<LevelC changeToLesson1={this.changeLesson1} changeToLesson2={this.changeLesson2}/>);
      case 5:
        return(<LevelJava />);
      case 6:
        return(<LevelPython />);
      case 7:
        return (<LogOut Yes={this.trueLog} No={this.logged} />);
      case 8:
        return(<Lesson1C CorrectAnswer={()=>this.levelC()}/>);
      case 9:
        return(<Lesson2C CorrectAnswer={()=>this.levelC()}/>);
      default:
        return(<Content/>);
    }
  }

  /*changeLanguage(code){
   const levels = ['C','Java','Python'];
    console.log(this.state.idLevel);
    return levels[this.state.idLevel];
}*/

  main(){
    this.setState({
      id:0
    });
  }

  changeLesson1(){
    this.setState({
      id:8
    });
  }

  changeLesson2(){
    this.setState({
      id:9
    });
  }

  trueLog(){
    if(this.state.isLogged===true){
      this.setState({
        isLogged: !this.state.isLogged,
        id: 0
      });
    }else{
      this.setState({
        isLogged: !this.state.isLogged,
        id: 3
      });
    }
  }

  trueLogOut(){
    this.setState({
      isLogged: !this.state.isLogged,
      id: 0
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

  levelC(){
    this.setState({
      id:4
    });
  }

  levelJava(){
    this.setState({
      id:5
    });
  }

  levelPython(){
    this.setState({
      id:6
    });
  }

  logOut(){
    this.setState({
      id:7
    });
  }

  render() {
    return (
      <div className="App">
      <div className="Nav">
         {!this.state.isLogged ? <NavBar onSignIn={this.LogIn} onRegister={this.Register}/> : <NavBarLogOut goLogout= {this.logOut} />}
         </div>
      <div className="Logo">
          {!this.state.isLogged ?<img src={logo} className='logo' alt="logo" onClick={this.main}/> :<img src={logo} className='logo' alt="logo" onClick={this.logged}/>}
          </div>
      <div className="Content">
      {this.changeContent()}
      </div>
      </div>
    );
}
}

export default App;
