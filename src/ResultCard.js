import { Card } from 'react-bootstrap';

export default function ResultCard(props) {
	return (
		<>
		<Card style={{ width: '20rem'}} bg="dark" className="d-flex flex-column justify-content-center align-items-center">
			<Card.Img variant="top" src={props.weapon.image} />
			<Card.Body>
				<Card.Title>{props.weapon.name}</Card.Title>
				<Card.Subtitle>{props.weapon.category}</Card.Subtitle>
				<Card.Text>{props.weapon.description}</Card.Text>
			</Card.Body>
		</Card>
		</>
	)
}