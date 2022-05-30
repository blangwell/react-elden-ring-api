import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { request, gql } from 'graphql-request';
import ResultCard from './ResultCard';

export default function Weapon(props) {
	const [weapons, setWeapons] = useState([]);
	let params = useParams();

	// query graphql service for all weapons in params category
	
	// store weapons in state on initial render
	useEffect(() => {
		const query = gql`
			query getWeapon($weaponCategory: String!) {
				weapon(category: $weaponCategory) {
					id,
					name,
					description,
					image, 
					scalesWith {
						name,
						scaling
					}
				}
			}
		`
		const variables = { weaponCategory: params.weaponCategory }
		request('https://eldenring.fanapis.com/api/graphql', query, variables)
		.then(data => {
			setWeapons(data.weapon);
		})
		.catch(error => {
			console.error(error);
			setWeapons(null);
		});
	}, []);


	return (
		<div>
			{weapons ? weapons.map(weapon => (
				<ResultCard key={weapon.name} weapon={weapon} />
			)) : <h1>Fetching Weapons...</h1>}
		</div>
	)
}