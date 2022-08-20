import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	//con esto consigo que funcione el dropdown sin instalar nada más
	const [dropdown, setDropdown] = useState(false);
	const toggleOpen = () => setDropdown(!dropdown);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://s.ecrater.com/stores/442768/5e6e23856b19d_442768b.jpg"
						alt="logo"
						id="logo"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" onClick={toggleOpen}>
						Favorites
					</button>
					<div
						className={`dropdown-menu dropdown-menu-right ${dropdown ? "show" : ""} `}
						aria-labelledby="dropdownMenuButton">
						<ul>
							{store.favorites.map((value, index) => {
								return (
									<li key={index}>
										{value.element.name}{" "}
										<button onClick={() => actions.deleteFavorites(value.category, value.element)}>
											Delete
										</button>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
