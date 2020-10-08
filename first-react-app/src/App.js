import React from 'react';
import '../src/App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

const App = (props) => {

  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className = "app-wrapper-content">
  <Route 
  path='/dialogs' 
  render={ () => 
      <Dialogs 
        messages={props.state.messagesPage.messagesData} 
        dialogs={props.state.messagesPage.dialogsData}
      /> 
    } />
      <Route 
      path='/profile' 
      render=
        { () => 
        <Profile 
          posts={props.state.profilePage.postData}/>
        }
      />
      <Route path='/news' component={News}/>
      <Route path='/music' component={Music}/>
      <Route path='/settings' component={Settings}/>
      </div>
    </div>
    </BrowserRouter>
  );
}
export default App;
