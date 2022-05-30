import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
	Container,
	Row,
	Col,
} from 'react-bootstrap';
import { request, gql } from 'graphql-request';

import ResultCard from './ResultCard';
import './Weapons.css';
import WeaponCategory from './WeaponCategory';

export default function Weapons() {
	const [weapons, setWeapons] = useState([]);
	const [displayWeapons, setDisplayWeapons] = useState([]);
	const [filter, setFilter] = useState("");
	const CATEGORIES = ["Axe", "Bow", "Claw", "Colossal Sword", "Colossal Weapon", "Crossbows",
		"Curved Greatsword", "Curved Sword", "Dagger", "Fist", "Flail", "Glintstone Staff", "Greataxe",
		"Great Spear", "Greatswords", "Halberd", "Hammer", "Heavy Thrusting Sword", "Katana",
		"Light Bow", "Reaper", "Sacred Seal", "Spear", "Straight Sword", "Thrusting Sword", "Torch",
		"Twinblades", "Warhammer", "Whip"
	];

	/* On initial render:
	Make GET request to Elden Ring fan API
	set weapons state with response da:w
	ta array */
	// useEffect(() => {
	// 	const query = gql`
	// 	{
	// 		weapon(category: "Axe") {
	// 			id,
	// 			name,
	// 			description,
	// 			image, 
	// 			scalesWith {
	// 				name,
	// 				scaling
	// 			},
	// 		}
	// 	}
	// 	`
	// 	request('https://eldenring.fanapis.com/api/graphql', query)
	// 	.then(data => {
	// 		console.log(data.weapon)
	// 		setWeapons(data.weapon);
	// 		setDisplayWeapons(data.weapon);
	// 	})
	// 	.catch(error => {
	// 		console.error(error);
	// 		setWeapons(null);
	// 	});
	// }, []);

	// // each time the filter is updated, filter weapons and setDisplayWeapons
	// useEffect(() => {
	// 	if (!filter) {
	// 		setDisplayWeapons(weapons);
	// 	} else {
	// 		let filtered = weapons.filter(weapon => {
	// 			return weapon.category.toLowerCase() === filter || 
	// 			// or check because some categories are pluralized 
	// 			weapon.category.toLowerCase() === filter + 's';
	// 		});
	// 		setDisplayWeapons(filtered);
	// 	}
	// }, [filter]);
	
	return (
		<Container>
			<nav>
				{CATEGORIES.map(category => (
					<Link to={`/weapons/${category}`} key={category}>
					{ category }
					</Link>
				))}
			</nav>
			<Outlet />
		</Container>
	);
}