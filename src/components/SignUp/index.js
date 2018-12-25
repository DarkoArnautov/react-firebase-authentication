import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () =>(
	<div>
		<SignUpForm />
	</div>
);

const SignUpLink = () => (
	<p className="has-text-centered">
		Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
	</p>
);


const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};


class SignUpFormBase extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}

	onSubmit = event => {
		const { username, email, passwordOne } = this.state;
		
		this.props.firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
		.then(authUser => {
			// Create a user in your Firebase realtime database
			return this.props.firebase
			  .user(authUser.user.uid)
			  .set({
				username,
				email,
			  });
		}).catch(error => {
			this.setState({ error });
		});

		event.preventDefault();
	}

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {

		const {
			username,
			email,
			passwordOne,
			passwordTwo,
			error,
	    } = this.state;

	    const isInvalid = 
	    	passwordOne !== passwordTwo ||
	    	passwordOne === "" ||
	    	email === "" ||
	    	username === "" ;

		return (
			<div className="section">
				<div className="container">
					<div className="columns">
						<div className="column"></div>
						<div className="column is-6">
							<h1 className="title has-text-centered">Sign Up</h1>
							<form onSubmit={this.onSubmit} >
								<div className="field">
									<label className="label">User Name</label>
									<input 
										className="input"
										name="username"
										value={username}
										onChange={this.onChange}
										type="text"
										placeholder="Full Name"
									/>
								</div>
								<div className="field">
									<label className="label">Email</label>
									<input 
										className="input"
										name="email"
										value={email}
										onChange={this.onChange}
										type="text"
										placeholder="Email Address"
									/>
								</div>
								<div className="field">
									<label className="label">Password</label>
									<input 
										className="input"
										name="passwordOne"
										value={passwordOne}
										onChange={this.onChange}
										type="password"
										placeholder="Password"
									/>
								</div>
								<div className="field">
									<label className="label">Confirm Password</label>
									<input 
										className="input"
										name="passwordTwo"
										value={passwordTwo}
										onChange={this.onChange}
										type="password"
										placeholder="Confirm Password"
									/>
								</div>
								<div className="field">
									<button className="button is-info" disabled={isInvalid} type="submit">Sign Up</button>
								</div>
								{ error && <p>{error.message}</p>}
							</form>
						</div>
						<div className="column"></div>
					</div>
				</div>
			</div>
		);
	}
}

const SignUpForm = compose (
	withRouter,
	withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };