import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarComp from './NavBarComp';
import HomeScreen from './HomeScreen';
import FavoritesScreen from './FavoritesScreen';
import lightModeImg from '../images/light-mode.jpg';
import darkModeImg from '../images/night-mode.jpg';
import './App.css';

function App(){
	const [ theme, setTheme ] = useState('dark');
	const [ bgImage, setBgImage ] = useState(darkModeImg);
	const [ fontColor, setFontColor ] = useState('#FFF');
	const [ iconStyle, setIconStyle ] = useState({});

	const handleThemeChange = () => {
		if (theme === 'dark') {
			setTheme('light');
			setBgImage(lightModeImg);
			setFontColor('#000');
			setIconStyle({ color: '#000000', opacity: 0.7 });
		}
		else {
			setTheme('dark');
			setBgImage(darkModeImg);
			setFontColor('#FFF');
			setIconStyle({ color: 'lightgray' });
		}
	};

	return (
		<div className="App" style={{ color: fontColor, backgroundImage: `url(${bgImage})` }}>
			<NavBarComp handleThemeChange={handleThemeChange} theme={theme} iconStyle={iconStyle} setIconStyle={setIconStyle} />
			<Switch>
				<Route path="/favorites" component={FavoritesScreen} />
				<Route path="/:id" component={HomeScreen} />
				<Route path="/" component={HomeScreen} />
			</Switch>
		</div>
	);
}

export default App;
