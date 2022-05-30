import { useState, useEffect } from 'react';
import {
	Container,
	Row,
	Col,
} from 'react-bootstrap';
import { request, gql } from 'graphql-request';

import ResultCard from './ResultCard';
import './Weapons.css';

export default function Weapons() {
	const [weapons, setWeapons] = useState([]);
	const [displayWeapons, setDisplayWeapons] = useState([]);
	const [filter, setFilter] = useState("");

	/* On initial render:
	Make GET request to Elden Ring fan API
	set weapons state with response data array */
	useEffect(() => {
		const query = gql`
		{
			weapon(category: "Axe") {
				id,
				name,
				description,
				image, 
				scalesWith {
					name,
					scaling
				},

			}
		}
		`
		request('https://eldenring.fanapis.com/api/graphql', query)
		.then(data => {
			console.log(data.weapon)
			setWeapons(data.weapon);
			setDisplayWeapons(data.weapon);
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
				return weapon.category.toLowerCase() === filter || 
				// or check because some categories are pluralized 
				weapon.category.toLowerCase() === filter + 's';
			});
			setDisplayWeapons(filtered);
		}
	}, [filter]);
	
	return (
		<Container>
			<h1>Elden Ring Weapons</h1>
			<Row>
				<Col md={4} id="filters">
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
							<label htmlFor="category">
								<input type="radio" value="colossal sword" name="category" id="colossal-sword" />
								Colossal Sword
							</label>
							<label htmlFor="category">
								<input type="radio" value="colossal weapon" name="category" id="colossal-weapon" />
								Colossal Weapon
							</label>
							<label htmlFor="category">
								<input type="radio" value="crossbow" name="category" id="crossbow" />
								Crossbow
							</label>
							<label htmlFor="category">
								<input type="radio" value="curved greatsword" name="category" id="curved-greatsword" />
								Curved Greatsword
							</label>
							<label htmlFor="category">
								<input type="radio" value="curved sword" name="category" id="curved-sword" />
								Curved Sword
							</label>
							<label htmlFor="category">
								<input type="radio" value="dagger" name="category" id="dagger" />
								Dagger
							</label>
							<label htmlFor="category">
								<input type="radio" value="fist" name="category" id="fist" />
								Fist
							</label>
						</fieldset>
					</form>
				</Col>
				<Col md={8} id="results">
					{/* display weapons, or load message */}
					{ displayWeapons ? displayWeapons.map(weapon => <ResultCard key={weapon.name} weapon={weapon} />): <h2>Fetching Weapons...</h2> }
				</Col>
			</Row>
		</Container>
	);
}