import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CostCodes from './components/CostCodes'

function App() {
  const [costCodes, setCostCodes] = useState([])

  useEffect(()=> {
    fetch(`/cost_codes`)
      .then(r=>r.json())
      .then((data)=>setCostCodes(data))
  },[])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CostCodes codes={costCodes}/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
