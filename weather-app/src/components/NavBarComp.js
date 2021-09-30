import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './NavBarComp.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../redux/slices/themeSlice';

const NavBarComp = () => {
	const [ iconStyle, setIconStyle ] = useState({ color: 'lightgray' });
	const dispatch = useDispatch();
	let { data: theme } = useSelector(state => state.theme);

	const changeIconOpacity = e => {
		if (theme === 'dark') {
			let style = e._reactName === 'onMouseEnter' ? { color: `lightgray` } : { color: 'darkgray' };
			setIconStyle(style);
		}
		else {
			let style = e._reactName === 'onMouseEnter' ? { color: '#000000', opacity: 0.7 } : { color: 'lightgray' };
			setIconStyle(style);
		}
	};

	let btnBgColor = theme === 'dark' ? '#212529' : '#f8f9fa';

	return (
		<Navbar className="navbar" bg={theme} variant={theme}>
			{console.log('Hello from Nav Comp')}
			<Container className="navbar-container">
				<Navbar.Brand className="navbar-brand">Herolo Weather Task</Navbar.Brand>
				<Button
					variant="outline-secondary"
					style={{ border: '0px', color: 'darkgray', backgroundColor: btnBgColor }}
					onClick={() => dispatch(changeTheme())}
					onMouseEnter={e => changeIconOpacity(e)}
					onMouseLeave={e => changeIconOpacity(e)}
				>
					{theme === 'dark' ? <i className="fas fa-sun" style={iconStyle} /> : <i className="fas fa-moon" style={iconStyle} />}
				</Button>
				<Nav className="me-auto d-flex">
					<Link to="/Elad-Ayaso-30-8-2021-">Home</Link>

					<Link to="/Elad-Ayaso-30-8-2021-/favorites" style={{ marginLeft: '12px' }}>
						Favorites
					</Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default React.memo(NavBarComp);
