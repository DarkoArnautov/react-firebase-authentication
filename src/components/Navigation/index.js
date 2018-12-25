import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as ROUTES from '../../constants/routes';
import { Navbar } from "react-bulma-components/full";
import SignOutButton from '../SignOut';

import { AuthUserContext } from '../Session';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			active : false 
		};
	}

	handleClick = () => { 
		const { active } = this.state;
		console.log(active);
		this.setState({ active: !active }); 
	}
	
	render(){
		return	(
			<div className="container">
				<Navbar active={this.state.active}>
					<Navbar.Brand>
						<Navbar.Item href={ROUTES.LANDING}>
						<img
							src="https://bulma.io/images/bulma-logo.png"
							alt="Bulma: a modern CSS framework based on Flexbox"
							width="112"
							height="28"
						/>
						</Navbar.Item>
						<Navbar.Burger 
							active={this.state.active}
							onClick={this.handleClick}
						/>
					</Navbar.Brand>
					<AuthUserContext.Consumer>
						{authUser =>
							authUser ? <NavigationAuth /> : <NavigationNonAuth />
						}
					</AuthUserContext.Consumer>
				</Navbar>
			</div>
		);
	}
}

const NavigationAuth = () =>(
	<Navbar.Menu >
		<Navbar.Container>
			<Navbar.Item href={ROUTES.HOME}>Home</Navbar.Item>
			<Navbar.Item href={ROUTES.ACCOUNT}>Account</Navbar.Item>
			<Navbar.Item href={ROUTES.ADMIN}>Admin</Navbar.Item>
		</Navbar.Container>
		<Navbar.Container position="end">
			<Navbar.Item><SignOutButton /></Navbar.Item>
		</Navbar.Container>
	</Navbar.Menu>
);

const NavigationNonAuth = () =>(
	<Navbar.Menu >
		<Navbar.Container>
			<Navbar.Item href={ROUTES.LANDING}>Landing</Navbar.Item>
		</Navbar.Container>
		<Navbar.Container position="end">
			<Navbar.Item href={ROUTES.SIGN_IN}>SignIn</Navbar.Item>
		</Navbar.Container>
	</Navbar.Menu>
);

export default Navigation;

Navigation.propTypes = {
	active: PropTypes.bool,
}