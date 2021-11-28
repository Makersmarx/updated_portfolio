import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MyWork from './components/MyWork/MyWork';
import MySkills from './components/MySkills/MySkills';
import AboutMe from './components/AboutMe/AboutMe';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/mywork' component={MyWork} />
          <Route path='/myskills' component={MySkills} />
          <Route path='/aboutme' component={AboutMe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
