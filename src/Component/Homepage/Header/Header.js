import React from 'react';
import './Header.css';
import logo from '../../../Utility/logos/Logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="bg-white">
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-light py-3">
					<Link to="/">
						<img style={{ width: '100px' }} src={logo} alt="" />
					</Link>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto d-flex align-items-center">
							<li className="nav-item active">
								<Link to="/" className="nav-link">
									Home <span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className="nav-item active">
								<Link to="/about" className="nav-link">
									About <span className="sr-only">(current)</span>
								</Link>
							</li>
							{/* <li className="nav-item active">
								<Link to="/service" className="nav-link">
									Service <span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className="nav-item active">
									<Link className="nav-link">
										Concerns <span className="sr-only">(current)</span>
									</Link>
								</li>
								<li className="nav-item active">
									<Link className="nav-link">
										Event <span className="sr-only">(current)</span>
									</Link>
								</li> */}
							<li className="nav-item active">
								<Link to="/contact" className="nav-link" href="#">
									Contact <span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className="header-btn">
								<Link to="/login" className="nav-link" href="/login">
									Login
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
