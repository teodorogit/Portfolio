import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundImage:'linear-gradient(to right,#0C0C0C,#1E3431)'}}>
      <Container>
        <Navbar.Brand href="#home" style={{color:'#eee'}}>Portfólio Pessoal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:'#ddd',width:'100%',backgroundColor:'#7FFCAD',cursor:'pointer'}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#sobre" style={{color:'#eee',textAlign:"center"}} >Sobre Mim</Nav.Link>
            <Nav.Link href="#projetos" style={{color:'#eee',textAlign:"center"}}>Projetos</Nav.Link>
            <Nav.Link href="https://github.com/teodorogit" target='_blank' style={{color:'#eee',textAlign:"center"}}>GitHub</Nav.Link>
            <Nav.Link href="https://wa.me/5544999755163?text=Visualizei+seu+portf%C3%B3lio+e+gostaria+de+entrar+em+contato" target='_blank' style={{color:'#eee',textAlign:"center"}}>Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;