import { Route, Switch } from 'react-router-dom';
import NavBarComp from './NavBarComp';
import HomeScreen from './HomeScreen';
import FavoritesScreen from './FavoritesScreen';
import lightModeImg from '../images/light-mode.jpg';
import darkModeImg from '../images/night-mode.jpg';
import './App.css';
import { useSelector } from 'react-redux';

function App(){
	let { data: theme } = useSelector(state => state.theme);

	let bgImage = theme === 'dark' ? darkModeImg : lightModeImg;
	let fontColor = theme === 'dark' ? '#FFF' : '#000';

	return (
		<div className="App" style={{ color: fontColor, backgroundImage: `url(${bgImage})` }}>
			<NavBarComp />
			<Switch>
				<Route path="/:projectname/favorites" component={FavoritesScreen} />
				<Route path="/:projectname/:id" component={HomeScreen} />
				<Route path="/:projectname" component={HomeScreen} />
			</Switch>
		</div>
	);
}

export default App;
