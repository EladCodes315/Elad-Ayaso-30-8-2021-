import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarComp from './NavBarComp';
import HomeScreen from './HomeScreen';
import FavoritesScreen from './FavoritesScreen';
import lightModeImg from '../images/light-mode.jpg';
import darkModeImg from '../images/night-mode.jpg';
import './App.css';
import { useSelector } from 'react-redux';

function App(){
	const [ bgImage, setBgImage ] = useState();
	const [ fontColor, setFontColor ] = useState();
	let { data: theme } = useSelector(state => state.theme);

	useEffect(
		() => {
			if (theme === 'light') {
				setBgImage(lightModeImg);
				setFontColor('#000');
			}
			else {
				setBgImage(darkModeImg);
				setFontColor('#FFF');
			}
		},
		[ theme ]
	);

	return (
		<div className="App" style={{ color: fontColor, backgroundImage: `url(${bgImage})` }}>
			{console.log('Hello from App Comp')}
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
