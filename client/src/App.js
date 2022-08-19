import {useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from './components/UserContext';
import Navigator from './containers/Navigator';
import LoginPage from './pages/LoginPage';
import ReviewActivities from './pages/ReviewActivities';
import Upload from './pages/Upload';
import ViewCodes from './pages/ViewCodes';


function App() {
  const [user,setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((data) => setUser('not null'));
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
    <Navigator></Navigator>
    <UserContext.Provider value={{user,setUser}}>
      <Switch>
        <Route path='/upload'><Upload /></Route>
        <Route path='/review_activities'><ReviewActivities /></Route>
        <Route path='/'><ViewCodes /></Route>
      </Switch>
    </UserContext.Provider>
    </BrowserRouter>
  );
}
}
export default App;
