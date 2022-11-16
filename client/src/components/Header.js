
import React, {useContext} from "react";
import {Button, Container, Nav,  Navbar} from 'react-bootstrap'
import {UserContext} from '../context/UserContext'
import './Navigation/Navigation.css'

function Header({workWeek}) {
const {setUser} = useContext(UserContext)

function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <div className="App-Header">
        <h2>Work Week {workWeek}</h2>
        <Button className='justify-content-end' variant="light" onClick={handleLogoutClick}>Logout</Button>
    </div>
  )
}

export default Header