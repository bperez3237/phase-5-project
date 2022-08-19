import React from "react";
import {Button, Container, Nav,  Navbar} from 'react-bootstrap'

function Navigator({setUser}) {
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
            <Navbar.Brand href="/">Look Back</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href="/">View Codes</Nav.Link>
              <Nav.Link href="/upload">Upload</Nav.Link>
              <Nav.Link href="/review_activities">Review Activities</Nav.Link>
              <Nav.Link href="/enter">Enter Quantities</Nav.Link>
              <Button className='justify-content-end' variant="light" onClick={handleLogoutClick}>Logout</Button>
            </Nav>
          </Container>
        </Navbar>
    )


}

export default Navigator;