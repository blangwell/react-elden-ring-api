import { useState, useEffect } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';

export default function Weapons() {
	const [weapons, setWeapons] = useState([]);
	const [displayWeapons, setDisplayWeapons] = useState([]);
	const [filter, setFilter] = useState("");

	/* On initial render:
	Make GET request to Elden Ring fan API
	set weapons state with response data array */
	useEffect(() => {
		axios.get('https://eldenring.fanapis.com/api/weapons?limit=100')
		.then(response => {
			setWeapons(response.data.data);
			setDisplayWeapons(response.data.data);
		})
		.catch(error => {
			console.error(error);
			setWeapons(null);
		});
	}, []);

	// each time the filter is updated, filter weapons and setDisplayWeapons
	useEffect(() => {
		if (!filter) {
			setDisplayWeapons(weapons);
		} else {
			let filtered = weapons.filter(weapon => {
				return weapon.category.toLowerCase() === filter;
			});
			setDisplayWeapons(filtered);
		}
	}, [filter]);
	
	return (
		<div>
			<h1>Elden Ring Weapons</h1>
			<form onChange={e => setFilter(e.target.value)}>
			 	{/* use fieldset for accessibility https://www.w3.org/WAI/tutorials/forms/grouping/ */}
				<fieldset>
					<legend>Weapon Category</legend>
					<label htmlFor="category">
						<input defaultChecked type="radio" value="" name="category" id="all" />
						All	
					</label>
					<label htmlFor="category">
						<input type="radio" value="axe" name="category" id="axe" />
						Axe
					</label>
					<label htmlFor="category">
						<input type="radio" value="bow" name="category" id="bow" />
						Bow
					</label>
				</fieldset>
			</form>
			{/* display weapons, or load message */}
			{ displayWeapons ? displayWeapons.map(weapon => <ResultCard key={weapon.name} weapon={weapon} />): <h2>Fetching Weapons...</h2> }
		</div>
	);
}