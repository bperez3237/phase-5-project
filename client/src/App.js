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
        <Route path='/' element={<ViewCodes />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/review_activities' element={<ReviewActivities />} />
        <Route path='/login' element={<LoginPage />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
