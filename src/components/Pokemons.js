import React from "react";

const Pokemons = ({ array }) => {
	const styles = {
		width: "200px",
		backgroundColor: "grey",
		margin: "10px 20px",
		padding: "10px 5px",
		borderRadius: "10px",
	};
	return array.map(({ id, name, type, image }) => {
		return (
			<li key={id} style={styles}>
				<h5
					style={{ color: "blue", fontFamily: "Helvetica", fontSize: "20px" }}
				>
					{name}
				</h5>{" "}
				<br /> <img alt={name} src={image} /> <br />{" "}
				<p style={{ fontWeight: 900 }}>Type: {type}</p>
			</li>
		);
	});
};

export default Pokemons;
