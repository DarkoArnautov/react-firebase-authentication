import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { Navbar } from 'react-bulma-components/full';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth  />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <Navbar fixed="top" >
    <Navbar.Brand>
      <Navbar.Item renderAs="a" href={ROUTES.HOME}>
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        />
      </Navbar.Item>
      <Navbar.Burger  
      />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Container>
        <Navbar.Item href={ROUTES.HOME}>Home</Navbar.Item>
        <Navbar.Item href={ROUTES.ACCOUNT}>Account</Navbar.Item>
        <Navbar.Item href={ROUTES.ADMIN}>Admin</Navbar.Item>
      </Navbar.Container>
      <Navbar.Container position="end">
        <Navbar.Item><SignOutButton /></Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
  
);

const NavigationNonAuth = () => (
  <Navbar fixed='top' >
    <Navbar.Brand>
      <Navbar.Item renderAs="a" href={ROUTES.LANDING}>
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        />
      </Navbar.Item>
      <Navbar.Burger  
      />
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Container position="end">
        <Navbar.Item href={ROUTES.LANDING}>Landing</Navbar.Item>
        <Navbar.Item href={ROUTES.SIGN_IN}>Sign In</Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
);

export default Navigation;
