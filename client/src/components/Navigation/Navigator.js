import React, {useContext} from "react";
import {Button, Container, Nav,  Navbar} from 'react-bootstrap'
import {UserContext} from '../../context/UserContext'
import './Navigation.css'

function Navigator({workWeek}) {
  const {setUser} = useContext(UserContext)

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return (
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href="/">Work Week {workWeek}</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/view">View Codes</Nav.Link>
              <Nav.Link href="/upload_review_activities">Upload/Review Activities</Nav.Link>
              <Nav.Link href="/enter">Enter Quantities</Nav.Link>
              <Nav.Link href="/report">Weekly Report</Nav.Link>
              <Button className='justify-content-end' variant="light" onClick={handleLogoutClick}>Logout</Button>
            </Nav>
          </Container>
        </Navbar>
    )


}

export default Navigator;