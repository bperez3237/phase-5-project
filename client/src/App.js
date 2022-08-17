import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CostCodesList from './containers/CostCodesList'
import Navigator from './containers/Navigator';
import Upload from './pages/Upload'


function App() {
  const [costCodes, setCostCodes] = useState([])

  useEffect(()=> {
    fetch(`/cost_codes`)
      .then(r=>r.json())
      .then((data)=>setCostCodes(data))
  },[])


  return (
    <BrowserRouter>
    <Navigator></Navigator>
      <Routes>
        <Route path='/' element={<CostCodesList codes={costCodes}/>} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
