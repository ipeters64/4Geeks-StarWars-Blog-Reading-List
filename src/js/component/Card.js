import propTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Card = ({item, resource}) => {
    const {store, actions}= useContext(Context);
    if (resource === "planets")
        return(
        <div className="card1 my-3 mx-3" style={{width: "400 px"}}>
            <img 
            src={"https://starwars-visualguide.com/assets/img/planets/" + `${item.uid}.jpg`} 
            className="card-img-top" 
            alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.url}</p>
                <div className="Buttons">
                    <Link to={`/${resource}/${item.uid}`} className="btn btn-outline-primary">
                        {"Learn more!"}
                    </Link>
                    <button
						type="button"
						className="btn btn-outline-warning"
						onClick={(e) => {
							actions.AddFavorite(resource, item.uid);
							}}>
						<i className="far fa-heart"></i>
					</button>
                </div>
            </div>
        </div>
        );
    if (resource === "people")
        return(
        <div className="card1 my-3 mx-3" style={{width: "400 px"}}>
            <img 
            src={"https://starwars-visualguide.com/assets/img/characters/" + `${item.uid}.jpg`} 
            className="card-img-top" 
            alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.url}</p>
                <div className="Buttons">
                    <Link to={`/${resource}/${item.uid}`} className="btn btn-outline-primary">
                        {"Learn more!"}
                    </Link>
                    <button
						type="button"
						className="btn btn-outline-warning"
						onClick={(e) => {
							actions.AddFavorite(resource, item.uid);
							}}>
						<i className="far fa-heart"></i>
					</button>
                    
                </div>
            </div>
        </div>
        );
};

Card.propTypes = {
    item: propTypes.object,
    resource: propTypes.oneOf(["people","planets"]),
};