import { Link, Outlet } from 'react-router-dom';
import {
	Container,
	Row,
	Col,
	Accordion,
	ListGroup,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import categories from './categories';
import './Weapons.css';

export default function Weapons() {
	return (
		<Container fluid>
		<Row>
			<Col xs={12} sm={3}>
				<Accordion flush>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Categories</Accordion.Header>
					<Accordion.Body>
					<nav>
						<ListGroup className="bg-dark">
							{categories.map(category => (
								<LinkContainer to={category} key={category} >
									<ListGroup.Item key={category} action href={category}>
										{category}
									</ListGroup.Item>
								</LinkContainer>
							))}	
						</ListGroup>
					</nav>
					</Accordion.Body>
				</Accordion.Item>
				</Accordion>
			</Col>
			<Col xs={12} sm={9} className="offset-md-3">
				<Outlet />
			</Col>
		</Row>
		</Container>
	);
}