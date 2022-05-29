export default function ResultCard(props) {
	return (
		<div>
			<h3>{props.weapon.name}</h3>
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