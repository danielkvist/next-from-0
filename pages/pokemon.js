// Gets called at build time
export async function getStaticProps() {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
	const pokemon = await res.json();

	return {
		props: {
			pokemon,
		},
	};
}

const Pokemon = ({ pokemon }) => {
	return (
		<div>
			<h1>Welcome, {pokemon?.name}</h1>
			<img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
		</div>
	);
};

export default Pokemon;
