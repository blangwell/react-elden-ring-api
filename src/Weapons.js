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
		<Container>
			<Row>
				<Col md="3">
					<Accordion flush>
						<Accordion.Item eventKey="0">
							<Accordion.Header>Categories</Accordion.Header>
							<Accordion.Body>
							<nav>
							<ListGroup>
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
				<Col md="9">
					<Outlet />
				</Col>
			</Row>
		</Container>
	);
}