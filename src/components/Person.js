import React from "react";

const Person = ({ edad }) => {
	return (
		<div>
			{edad > 18 ? (
				<p>invitar a tomar algo</p>
			) : (
				<p>No tiene edad legal para tomar alcohol</p>
			)}
		</div>
	);
};

export default Person;
