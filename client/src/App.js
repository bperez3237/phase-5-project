import {useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigator from './containers/Navigator';
import LoginPage from './pages/LoginPage';
import ReviewActivities from './pages/ReviewActivities';
import Upload from './pages/Upload';
import ViewCodes from './pages/ViewCodes';


function App() {
  return (
    <BrowserRouter>
    <Navigator></Navigator>
      <Switch>
        <Route exact path='/'><ViewCodes /></Route>
        <Route path='/upload'><Upload /></Route>
        <Route path='/review_activities'><ReviewActivities /></Route>
        <Route path='/login'><LoginPage /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
