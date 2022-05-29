export default function ResultCard(props) {
	return (
		<div style={{
			border: '1px solid grey',
			borderRadius: '5px',
			padding: '2vh 2vw',
		}}>
			<h2>{props.weapon.name}</h2>
			<p>{props.weapon.category}</p>
			<img src={props.weapon.image} alt={`${props.weapon.name} weapon`} />
			<p>{props.weapon.description}</p>
			<h4>Scales With</h4>
			<ul>
				{props.weapon.scalesWith.map(item => <li key={item.name}>{item.name} - {item.scaling}</li>)}
			</ul>
		</div>
	)
}