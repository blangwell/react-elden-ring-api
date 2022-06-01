import './App.css';
import { Outlet, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function App() {
  return (
    <div className="App"  style={{paddingTop: '80px'}} >
			<Navbar bg="dark" variant="dark" fixed="top">
				<Container fluid>
				<LinkContainer to="/">
					<Navbar.Brand>Elden Ring</Navbar.Brand>
				</LinkContainer>
				<Nav className="me-auto" activeKey="/">
					<LinkContainer to="weapons">
						<Nav.Link eventKey="weapons">Weapons</Nav.Link>
					</LinkContainer>
					<LinkContainer to="notWeapons">
						<Nav.Link eventKey="notWeapons">Not Weapons</Nav.Link>
					</LinkContainer>
				</Nav>
				</Container>
			</Navbar>
			<Outlet />
    </div>
  );
}

export default App;
