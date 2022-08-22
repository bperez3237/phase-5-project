import {useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from './context/UserContext';
import Navigator from './containers/Navigator';
import EnterQuantities from './pages/EnterQuantities';
import LoginPage from './pages/LoginPage';
import ReviewActivities from './pages/ReviewActivities';
import Upload from './pages/Upload';
import ViewCodes from './pages/ViewCodes';
import ReportPage from './pages/ReportPage'
import { ActivitiesContext } from './context/ActivitiesContext';


function App() {
  const [user,setUser] = useState(null)
  const [activities, setActivities] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((data) => setUser(data));
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
    <Navigator setUser={setUser} />
    <UserContext.Provider value={{user,setUser}}>
      <ActivitiesContext.Provider value={{activities, setActivities}}>
      <Switch>
        <Route path='/upload'><Upload /></Route>
        <Route path='/review_activities'><ReviewActivities /></Route>
        <Route path='/enter'><EnterQuantities /></Route>
        <Route path='/report'><ReportPage /></Route>
        <Route path='/'><ViewCodes /></Route>
      </Switch>
      </ActivitiesContext.Provider>
    </UserContext.Provider>
    </BrowserRouter>
  );
}
}
export default App;
