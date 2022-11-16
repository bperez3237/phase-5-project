import {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigator from './components/Navigation/Navigator';
import EnterQuantities from './components/Enter/EnterQuantities';
import LoginPage from './components/Login/LoginPage';
import Home from './components/Home/Home';
import Upload from './components/Upload/Upload';
import ReportPage from './components/Report/ReportPage'
import { UserContext } from './context/UserContext';
import { WorkWeekContext } from './context/WorkWeekContext'
import ViewPage from './components/View/ViewPage';
// import DismissableError from './components/Error/DismissableError'
import Sidebar from './components/Navigation/Sidebar';
import Header from './components/Header';


function App() {
  const [user,setUser] = useState(null)
  // const [error, setError] = useState('')
  const [workWeek, setWorkWeek] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((data) => setUser(data));
      } else {
        r.json().then((err) => console.log('error',err));
      }
    });
    
    fetch("/week").then((r) => {
      if (r.ok) {
        r.json().then((data) => setWorkWeek(data));
      } else {
        r.json().then((err) => console.log('error',err));
      }
    });
  }, []);

  if (!user) {
    return (
      <div className='Login'>
        <LoginPage setUser={setUser} />
      </div>
    )
  } else {return (
    <div className='App'>
      <BrowserRouter>
        <UserContext.Provider value={{user,setUser}}>
        <WorkWeekContext.Provider value={{workWeek, setWorkWeek}}>
          <Header workWeek={workWeek?.end_date} />
          <Sidebar />
          <div className='App-Body'>
            <Switch>
              <Route path='/upload_review_activities'><Upload workWeek={workWeek} /></Route>
              <Route path='/enter'><EnterQuantities workWeek={workWeek} /></Route>
              <Route path='/report'><ReportPage workWeek={workWeek} /></Route>
              <Route path='/view'><ViewPage /></Route>
              <Route path='/'><Home workWeek={workWeek} setWorkWeek={setWorkWeek}/></Route>
            </Switch>
          </div>
        </WorkWeekContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}
}
export default App;
