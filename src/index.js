import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Provider} from 'mobx-react'


import Footer from './components/common/footer/footer'
import Menu from './components/common/menu/menu'
import Home from './components/home/home'
import Register from './components/register/register'
import Consult from './components/consult/consult'
import Student from './components/student/student'


import database from './utilities/dbObservable'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider Database={database}>
        <Menu/>
        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/consult" component={Consult}/>
          <Route exact path="/student/:id" component={Student}/>
          <Route>
            <Redirect to="/home" />
          </Route>
        </Switch>
        <Footer />
      </Provider>
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
