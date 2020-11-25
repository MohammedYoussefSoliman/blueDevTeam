import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.module.scss';
import {UserData, Mode} from './context';
import AppTheme from './theme';
import Main from './components/layout/main/main';
import Dashboard from './components/layout/dashboard/dashboard';
import SignIn from './components/signin/signin';


const App = ()=> {

  return (
    <AppTheme>
      <Mode>
        <UserData>
            <Switch>
              <Route path='/sign-in' component={SignIn}/>
              <Route path='/dashboard' exact component={Dashboard}/>
              <Route path='/' exact component={Main}/>
            </Switch>
        </UserData>
      </Mode>
    </AppTheme>
  )
}

export default App