import React from "react";

const Pokedex = ({ children }) => {
	const style = {
		display: "flex",
		listStyle: "none",
		flexWrap: "wrap",
		width: "70%",
		margin: "10px auto",
		justifyContent: "center",
	};
	// console.log(pokemons);
	return (
		<div>
			<h3 style={{ fontSize: "35px", color: "grey" }}>Pokedex</h3>
			<ul style={style}>{children} </ul>
		</div>
	);
};

export default Pokedex;
