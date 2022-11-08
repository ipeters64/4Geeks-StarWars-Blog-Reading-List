import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = (item, resource) => {
	// const {store, actions}= useContext(Context);
	const params = useParams();
	const context = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 navegacion">
			<div className="Logo">
				<Link to="/">
					<img className="Img"  src="https://marcas-logos.net/wp-content/uploads/2019/11/Star-Wars-Logo-1.png"/>
				</Link>
			</div>
			<div>
			<div className="btn-group">
				
				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="badge badge-pill badge-light">
						{context.store.list.length}
					</span>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{context.store.favorite && (
						context.store.list.map((favorite, index) => {
							return (
								<li className="dropdown-item" key={favorite.uid}>
									<Link to={`${favorite.resource}/${favorite.uid}`}>
										{favorite.properties.name}
									</Link>
									<i
										className="fas fa-solid fa-trash close"
										onClick={(e) => {
											const deleteFavorite = context.store.list.filter(
												(deleteFavorite, i) => {
													if (index == i) {
														return false;
													} else {
														return true;
													}
												}
											);
											console.log(deleteFavorite);
											context.actions.deleteFavorite(deleteFavorite);
										}}>
									
									</i>
										
									
								</li>
							);
						})
					)}
				</ul>

			</div> 
			</div>
		</nav>
	);
};

Navbar.propTypes = {
    item: PropTypes.object,
    resource: PropTypes.string,
};