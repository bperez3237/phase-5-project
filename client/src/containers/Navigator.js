import React from "react";
import {Button, Container, Nav,  Navbar} from 'react-bootstrap'

function Navigator() {
    // function handleLogoutClick() {
    //     fetch("/logout", { method: "DELETE" }).then((r) => {
    //       if (r.ok) {
    //         setUser(null);
    //       }
    //     });
    //   }

    return (
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href="/">Look Back</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href="/">Home</Nav.Link>
              <Button className='justify-content-end' variant="light" >Logout</Button>
            </Nav>
          </Container>
        </Navbar>
    )


}

export default Navigator;