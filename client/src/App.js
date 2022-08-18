import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivityList from './containers/ActivityList';
import CostCodesList from './containers/CostCodesList'
import Navigator from './containers/Navigator';
import Upload from './pages/Upload'


function App() {
  


  return (
    <BrowserRouter>
    <Navigator></Navigator>
      <Routes>
        <Route path='/' element={<CostCodesList />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/review_activities' element={<ActivityList />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
