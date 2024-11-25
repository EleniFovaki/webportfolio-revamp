import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/NavBar";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Pinterest from '@mui/icons-material/Pinterest';
import "../styles/NavBar.css";

function MyNavBar() {
    return (
        <NavBar fixed="top" expand="lg" className="bg-body-tertiary">
            <Container>
                <NavBar.Brand href="#home">Eleni Fovaki</NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav"/>
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                        <Nav.Link href="https://www.linkedin.com/in/elenifovaki055/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon></LinkedInIcon>
                        </Nav.Link>
                        <Nav.Link href="https://github.com/EleniFovaki" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon></GitHubIcon>
                        </Nav.Link>
                        <Nav.Link href="https://nl.pinterest.com/elenifovaki/" target="_blank" rel="noopener noreferrer">
                        <Pinterest></Pinterest>
                        </Nav.Link>
                    </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    );
}
export default MyNavBar;
