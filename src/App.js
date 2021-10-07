import "./App.css";
import Welcome from "./components/Welcome";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Description from "./components/Description";
import Person from "./components/Person";
import Pokedex from "./components/Pokedex";
import Pokemons from "./components/Pokemons";
import { PokemonList } from "./components/PokemonList";
import Multiplicar from "./components/Multiplicar";

function App() {
	return (
		<div className="App">
			<p>Ejercicio 1</p>
			<Welcome name="Eugenia" />

			<p>Ejercicio 2</p>
			<Title />
			<Subtitle />
			<Description nombre="Euge" />

			<p>Ejercicio 3</p>
			<Person edad="19" />

			<p>Ejercicio 4</p>
			<Pokedex>
				<Pokemons array={PokemonList} />
			</Pokedex>

			<p>Ejercicio 5</p>
			<Multiplicar />
		</div>
	);
}

export default App;
