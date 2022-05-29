import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Weapons() {
	const [weapons, setWeapons] = useState(null);

	/* On initial render:
	Make GET request to Elden Ring fan API
	set weapons state with response data array */
	useEffect(() => {
		axios.get('https://eldenring.fanapis.com/api/weapons?limit=10')
		.then(response => {
			setWeapons(response.data.data)
		})
		.catch(error => {
			console.error(error);
			setWeapons(null);
		});
	});
	
	return (
		<div>
			<h1>Elden Ring Weapons</h1>
			{ weapons ? weapons.map(weapon => <p key={weapon.id}>{weapon.name}</p>): null}
		</div>
	);
}