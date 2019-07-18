import React, {useState, useEffect, useRef} from 'react';
import './App.scss';
import './SCSS/index.module.scss';
import { Route, Link, Switch } from 'react-router-dom'

import Home from './components/Home/Home.js'
import Rules from './components/Rules/Rules.js'
import Info from './components/Info/Info.js'

function App() {

  return (
    <div className="App">
    <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/rules' component={Rules} />
    <Route path='/info' component={Info} />
    </Switch>
    </div>
  )
}


export default App;
