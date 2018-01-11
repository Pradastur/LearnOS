import React from 'react';
import './App.css';
import { Switch, Route,Link } from 'react-router-dom'
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
    this.state={
      selectedCode: null,
      idLevel: null,
      isLogged:false,
      textEx:'',
      username:'',
      languages:[]
    }
    this.trueLog=this.trueLog.bind(this);
    this.changeToAdminScreen=this.changeToAdminScreen.bind(this);
    this.TryLog();
  }

  /*changeLanguage(code){
   const levels = ['C','Java','Python'];
    console.log(this.state.idLevel);
    return levels[this.state.idLevel];
}*/

TryLog = () => {
  var languages=[];
return fetch("https://learnos-backend.herokuapp.com/languages/",
    {
      method: "GET",
    }
  )
  .then((response) => response.json() )
  .then((responseData) => {
    var obj=JSON.stringify(responseData);
        console.log(obj)
    var stringify = JSON.parse(obj);
        console.log(stringify)
    for (var i = 0; i < stringify.length; i++) {
      languages.push(stringify[i]['_id']);
  }
  this.setState({...this.state.languages, languages});
    }).catch(function(e) {
    alert( e.message);
    })
}

trueLog () {
    this.setState({
      isLogged: !this.state.isLogged
    });
}

changeToAdminScreen(){
  this.setState({
    isLogged: !this.state.isLogged
  });
}

  trueLogOut(){
    this.setState({
      isLogged: !this.state.isLogged,
    });
}

  showTextContent(){
    const newTextContent = this.state.showText == false ? true : false;
    this.setState({ showText: newTextContent });
  }

  render() {
    return (
      <div className="App">
      <div className="Nav">
         {!this.state.isLogged ? <NavBar/> : <NavBarLogOut/>}
         </div>
      <div className="Logo">
          {!this.state.isLogged ?<Link to='/'> <img src={logo} className='logo' alt="logo"/> </Link> : <Link to='/start'> <img src={logo} className='logo' alt="logo"/> </Link>}
          </div>
      <div className="Content">
      <Switch>
  		      <Route exact path='/' render={(props) => (<Content {...props} languageList={this.state.languages}/>)}/>
  		      <Route path='/login' render={(props) => (<LogIn {...props} LogNow={this.trueLog} changeToAdmin={this.changeToAdminScreen}/>)} />
            <Route path='/logout' render={(props) => (<LogOut{...props} Yes={this.trueLog} No={this.trueLog} refreshHome={this.TryLog}/>)} />
            <Route path='/start' render={(props) => (<Start {...props} languageList={this.state.languages}/>)}/>
  		      <Route path='/register' render={(props) => (<Register {...props} LogNow={this.trueLog}/>)} />
            <Route path='/admin' component={AdminScreen}/>
            <Route path='/levelC' render={(props) => (<LevelC{...props}/>)} />
            <Route path='/levelJava' render={(props) => (<LevelJava />)} />
            <Route path='/levelPython' render={(props) => (<LevelPython/>)} />
            <Route path='/levelC_1' render={(props) => (<Lesson1C{...props}/>)} />
            <Route path='/levelC_2' render={(props) => (<Lesson2C{...props}/>)} />
            <Route path='/levelC_3' render={(props) => (<Lesson3C{...props}/>)} />
            <Route path='/levelJava_1' render={(props) => (<Lesson1Java{...props}/>)} />
            <Route path='/levelJava_2' render={(props) => (<Lesson2Java{...props}/>)} />
            <Route path='/levelJava_3' render={(props) => (<Lesson3Java{...props}/>)} />
            <Route path='/levelPython_1' render={(props) => (<Lesson1Python{...props}/>)} />
            <Route path='/levelPython_2' render={(props) => (<Lesson2Python{...props}/>)} />
            <Route path='/levelPython_3'  render={(props) => (<Lesson3Python{...props}/>)} />

  </Switch>
      </div>
      </div>
    );
}
}

export default App;
