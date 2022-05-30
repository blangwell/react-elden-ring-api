import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

export default function WeaponIndex(props) {
	return (
		<Container>
			<Row xs="auto" className="d-flex justify-content-center">
				{props.categories.map(category => (
					<Link to={`${category}`} key={category}>
						<h3>{category}</h3>
					</Link>
				))}
			</Row>
		</Container>
	)
}