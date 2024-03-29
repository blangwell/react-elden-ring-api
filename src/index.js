import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { 
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import App from './App';
import Home from './Home';
import Weapons from './Weapons';
import WeaponCategory from './WeaponCategory';
import WeaponIndex from './WeaponIndex';
import categories from './categories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Home />} />
				<Route path="weapons" element={<Weapons />} >
					<Route index element={<WeaponIndex categories={categories} />} />
					<Route path=":weaponCategory" element={<WeaponCategory />} /> 
				</Route>
				<Route path="*" element={<div><h2>There ain't nothin here!</h2></div>} />
			</Route> 
		</Routes>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
