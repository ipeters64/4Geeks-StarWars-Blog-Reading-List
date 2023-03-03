import React, { useEffect, useState } from "react";
import { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { Title } from "../component/Title";
import { Context } from "../store/appContext";

export const Home = () => {
const {store, actions}= useContext(Context);
return(
	// creating an index for the characters and then planets  //
		<div className=" mt-5 ">
			<div className="d-flex justify-content-right ml-0.8rem"><Title text="Characters" /></div>
			<div className="Grupo1 ">
				{store.people.map((character, index) => {
					return (
						<Card key={character.uid} item={character} resource={"people"} />
					)
				})} 
			</div>
			<div className="d-flex justify-content-right"><Title text="Planets" /></div>
			<div className=" Grupo1">
				{store.planets.map((planet, index) => {
					return (
						<Card key={planet.uid} item={planet} resource={"planets"} />
					)
				})}
			</div>
		</div>
)}

	

