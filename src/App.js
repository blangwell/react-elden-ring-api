import './App.css';
import { Outlet, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function App() {
  return (
    <div className="App">
			<Navbar bg="dark" variant="dark">
				<Container>
				<LinkContainer to="/">
					<Navbar.Brand>Elden Ring</Navbar.Brand>
				</LinkContainer>
				<Nav className="me-auto">
					<LinkContainer to="/weapons">
						<Nav.Link>Weapons</Nav.Link>
					</LinkContainer>
				</Nav>
				</Container>
			</Navbar>
		 	<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/weapons">Weapons</NavLink>
			</nav>
			<Outlet />
    </div>
  );
}

export default App;
