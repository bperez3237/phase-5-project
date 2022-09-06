import {useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from './context/UserContext';
import Navigator from './containers/Navigator';
import EnterQuantities from './pages/EnterQuantities';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Upload from './pages/Upload';
import ViewCodes from './pages/ViewCodes';
import ReportPage from './pages/ReportPage'
// import { ActivitiesContext } from './context/ActivitiesContext';
import { WorkWeekContext } from './context/WorkWeekContext'


function App() {
  const [user,setUser] = useState(null)
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

  console.log(workWeek)
  if (!user) {
    return (
      <LoginPage setUser={setUser}/>
    )
  } else {return (
    <BrowserRouter>
    <UserContext.Provider value={{user,setUser}}>
      <WorkWeekContext.Provider value={{workWeek, setWorkWeek}}>
      <Navigator />
      <Switch>
        <Route path='/upload_review_activities'><Upload workWeek={workWeek} /></Route>
        <Route path='/enter'><EnterQuantities workWeek={workWeek} /></Route>
        <Route path='/report'><ReportPage workWeek={workWeek} /></Route>
        <Route path='/view'><ViewCodes /></Route>
        <Route path='/'><Home workWeek={workWeek} setWorkWeek={setWorkWeek}/></Route>
      </Switch>
      </WorkWeekContext.Provider>
    </UserContext.Provider>
    </BrowserRouter>
  );
}
}
export default App;
