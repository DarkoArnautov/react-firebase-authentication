import React from 'react';
const LandingPage = () => (
	<div>
		<section className='hero is-medium'>
			<div className="hero-body">
				<div className="container">
					<h1 className="title">
						React Firebase App Starter
					</h1>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="columns">
					<div className='column has-text-centered'>
						<div className="box">
							<h1 className="title">Autherization Module</h1>
							<p>
								Implemented Sign Up, In, Out, Foreget Passwod, Change Password Module.
							</p>
						</div>
					</div>
					<div className='column has-text-centered'>
						<div className="box">
							<h1 className="title">Session Handling, Database Sync</h1>
							<p>
								User Session Handling, Sync with Firebase Real Database
							</p>	
						</div>
					</div>
					<div className='column has-text-centered'>
						<div className="box">
							<h1 className="title">Bulma Design, Custom SCSS</h1>
							<p>
								Design Layout based on Bulma, Added Custom SCSS 
							</p>	
						</div>
					</div>
				</div>
			</div>
		</section>
		<footer className="footer">
			<div className="content has-text-centered">
				<p>
				<strong>Bulma-React-Firebase</strong> by <a href="https://jgthms.com">Darko Arnautov</a>.
				</p>
			</div>
		</footer>
	</div>
);

export default LandingPage;