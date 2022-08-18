import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivityList from './containers/ActivityList';
import CostCodesList from './containers/CostCodesList'
import Navigator from './containers/Navigator';
import LoginPage from './pages/LoginPage';
import ReviewActivities from './pages/ReviewActivities';
import Upload from './pages/Upload'
import ViewCodes from './pages/ViewCodes';


function App() {
  


  return (
    <BrowserRouter>
    <Navigator></Navigator>
      <Routes>
        <Route path='/' element={<ViewCodes />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/review_activities' element={<ReviewActivities />} />
        <Route path='/login' element={<LoginPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
