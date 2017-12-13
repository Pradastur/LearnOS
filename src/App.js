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
import {Lesson3C} from './Lesson3C'
import {Lesson1Java} from './Lesson1Java'
import {Lesson2Java} from './Lesson2Java'
import {Lesson3Java} from './Lesson3Java'
import {Lesson1Python} from './Lesson1Python'
import {Lesson2Python} from './Lesson2Python'
import {Lesson3Python} from './Lesson3Python'
import {AdminScreen} from './AdminScreen'
import {AddTutorial} from './AddTutorial'
import {AddLanguage} from './AddLanguage'
import {AddExercise} from './AddExercise'
import logo from './logo.png'


class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      selectedCode: null,
      idLevel: null,
      isLogged:false,
      textEx:'',
      username:''
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
    this.changeLessonC1=this.changeLessonC1.bind(this);
    this.changeLessonC2=this.changeLessonC2.bind(this);
    this.changeLessonC3=this.changeLessonC3.bind(this);
    this.changeLessonJava1=this.changeLessonJava1.bind(this);
    this.changeLessonJava2=this.changeLessonJava2.bind(this);
    this.changeLessonJava3=this.changeLessonJava3.bind(this);
    this.changeLessonPython1=this.changeLessonPython1.bind(this);
    this.changeLessonPython2=this.changeLessonPython2.bind(this);
    this.changeLessonPython3=this.changeLessonPython3.bind(this);
    this.changeToAdminScreen=this.changeToAdminScreen.bind(this);
    this.changeToAddLanguage=this.changeToAddLanguage.bind(this);
    this.changeToAddExercise=this.changeToAddExercise.bind(this);
    this.changeToAddTutorial=this.changeToAddTutorial.bind(this);
    this.adminScreen=this.adminScreen.bind(this);
    this.getName=this.getName.bind(this);
    /*this.changeLanguage=this.changeLanguage.bind(this);*/
  }

  changeContent() {
    switch(this.state.id){
      case 0:
        return(<Content/>);
      case 1:
        return(<LogIn loggedIn={this.logged} LogNow={this.trueLog} AdminScreen={this.changeToAdminScreen}/>);
      case 2:
        return(<Register LogNow={this.trueLog}/>);
      case 3:
        return(<Start enterLevelC={()=>this.levelC()} enterLevelJava={()=>this.levelJava()} enterLevelPython={()=>this.levelPython()} />);
        //Al pasar cada nivel mandar usuario, lenguaje y nivel. Base de Datos: https://backend-fagcpkyvda.now.sh/levels
        //Pedir Ejercicios. Base de datos: https://backend-fagcpkyvda.now.sh/games
      case 4:
        return(<LevelC changeToLesson1={this.changeLessonC1} changeToLesson2={this.changeLessonC2} changeToLesson3={this.changeLessonC3}/>);
      case 5:
        return(<LevelJava changeToLesson1={this.changeLessonJava1} changeToLesson2={this.changeLessonJava2} changeToLesson3={this.changeLessonJava3}/>);
      case 6:
        return(<LevelPython changeToLesson1={this.changeLessonPython1} changeToLesson2={this.changeLessonPython2} changeToLesson3={this.changeLessonPython3}/>);
      case 7:
        return (<LogOut Yes={this.trueLog} No={this.logged} />);
      case 8:
        return(<Lesson1C CorrectAnswer={()=>this.levelC()}/>);
      case 9:
        return(<Lesson2C CorrectAnswer={()=>this.levelC()}/>);
      case 10:
        return(<Lesson3C CorrectAnswer={()=>this.levelC()}/>);
      case 11:
        return(<Lesson1Java CorrectAnswer={()=>this.levelJava()}/>);
      case 12:
        return(<Lesson2Java CorrectAnswer={()=>this.levelJava()}/>);
      case 13:
        return(<Lesson3Java CorrectAnswer={()=>this.levelJava()}/>);
      case 14:
        return(<Lesson1Python CorrectAnswer={()=>this.levelPython()}/>);
      case 15:
        return(<Lesson2Python CorrectAnswer={()=>this.levelPython()}/>);
      case 16:
        return(<Lesson3Python CorrectAnswer={()=>this.levelPython()}/>);
      case 17:
        return(<AdminScreen changeToLanguage={this.changeToAddLanguage} changeToExercise={this.changeToAddExercise} changeToTutorial={this.changeToAddTutorial}/>);
      case 18:
        return(<AddLanguage confirmLanguage={this.adminScreen}/>);
      case 19:
        return(<AddExercise confirmExercise={this.adminScreen}/>);
      case 20:
        return(<AddTutorial />);
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

  changeLessonC1(){
    this.setState({
      id:8
    });
  }

  changeLessonC2(){
    this.setState({
      id:9
    });
  }

  changeLessonC3(){
    this.setState({
      id:10
    });
  }

  changeLessonJava1(){
    this.setState({
      id:11
    });
  }

  changeLessonJava2(){
    this.setState({
      id:12
    });
  }

  changeLessonJava3(){
    this.setState({
      id:13
    });
  }

  changeLessonPython1(){
    this.setState({
      id:14
    });
  }

  changeLessonPython2(){
    this.setState({
      id:15
    });
  }

  changeLessonPython3(){
    this.setState({
      id:16
    });
  }
  changeToAdminScreen(){
    if(this.state.isLogged===true){
      this.setState({
        isLogged: !this.state.isLogged,
        id: 0
      });
    }else{
      this.setState({
        isLogged: !this.state.isLogged,
        id: 17
      });
    }
  }

  adminScreen(){
    this.setState({
      id:17
    });
  }

  changeToAddLanguage(){
    this.setState({
      id:18
    });
  }

  changeToAddExercise(){
    this.setState({
      id:19
    });
  }

  changeToAddTutorial(){
    this.setState({
      id:20
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

  getName(name){
    var usuario=name;
    console.log("GET NAME: "+name);
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
