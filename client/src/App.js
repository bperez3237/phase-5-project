import {useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from './context/UserContext';
import Navigator from './components/Navigator';
import EnterQuantities from './components/Enter/EnterQuantities';
import LoginPage from './components/Login/LoginPage';
import Home from './components/Home/Home';
import Upload from './components/Upload/Upload';
import ReportPage from './components/Report/ReportPage'
import { WorkWeekContext } from './context/WorkWeekContext'
import ViewPage from './components/View/ViewPage';


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

  if (!user) {
    return (
      <LoginPage setUser={setUser}/>
    )
  } else {return (
    <BrowserRouter>
    <UserContext.Provider value={{user,setUser}}>
      <WorkWeekContext.Provider value={{workWeek, setWorkWeek}}>
      <Navigator workWeek={workWeek?.end_date} />
      <Switch>
        <Route path='/upload_review_activities'><Upload workWeek={workWeek} /></Route>
        <Route path='/enter'><EnterQuantities workWeek={workWeek} /></Route>
        <Route path='/report'><ReportPage workWeek={workWeek} /></Route>
        <Route path='/view'><ViewPage /></Route>
        <Route path='/'><Home workWeek={workWeek} setWorkWeek={setWorkWeek}/></Route>
      </Switch>
      </WorkWeekContext.Provider>
    </UserContext.Provider>
    </BrowserRouter>
  );
}
}
export default App;
