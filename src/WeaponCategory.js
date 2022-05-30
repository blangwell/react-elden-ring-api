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
		setWeapons([]);
		const query = gql`
			query getWeapon($weaponCategory: String!) {
				weapon(category: $weaponCategory, limit: 100) {
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
		const variables = { weaponCategory: params.weaponCategory.replace('%20', ' ') }
		request('https://eldenring.fanapis.com/api/graphql', query, variables)
		.then(data => {
			setWeapons(data.weapon);
		})
		.catch(error => {
			console.error(error);
			setWeapons(null);
		});
	}, [params]);


	return (
		<div>
			{weapons ? weapons.map(weapon => (
				<ResultCard key={weapon.name} weapon={weapon} />
			)) : <h1>Fetching Weapons...</h1>}
		</div>
	)
}