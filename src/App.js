import './App.css';
import { Outlet, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		 	<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/weapons">Weapons</NavLink>
			</nav>
			<Outlet />
    </div>
  );
}

export default App;
