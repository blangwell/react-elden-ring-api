import { Link, Outlet } from 'react-router-dom';
import {
	Container,
	Row,
	Col,
	Accordion,
	ListGroup,
} from 'react-bootstrap';
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
									<ListGroup.Item action href={category}>
										<Link to={`/weapons/${category}`} key={category}>
										{category}
										</Link>
									</ListGroup.Item>
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