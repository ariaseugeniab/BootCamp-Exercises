import React from "react";
import { useState } from "react";

const Multiplicar = () => {
	const [numero1, setNumero1] = useState("");
	const [numero2, setNumero2] = useState("");
	const [result, setResult] = useState("");

	function handleOnchange(e, value) {
		if (value === "numero1") {
			setNumero1(e.target.value);
		} else {
			setNumero2(e.target.value);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		setResult(numero1 * numero2);
	}

	return (
		<div>
			<h3>Ingresar dos numeros para miltiplicar</h3>
			<form>
				<label htmlFor="numero1">
					Numero 1
					<br />
					<input
						id="numero1"
						value={numero1}
						type="number"
						onChange={(e) => handleOnchange(e, e.target.id)}
					/>
				</label>
				<br />
				<label htmlFor="numero1">
					Numero 2
					<br />
					<input
						id="numero2"
						value={numero2}
						type="number"
						onChange={(e) => handleOnchange(e, e.target.id)}
					/>
				</label>
				<br />
				<button type="Submit" onClick={(e) => handleSubmit(e)}>
					Multiplicar
				</button>
			</form>
			{result ? (
				<p>El resultado es: {result}</p>
			) : (
				<p>Complete los campos para ver el resultado</p>
			)}
		</div>
	);
};

export default Multiplicar;
