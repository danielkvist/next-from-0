import Head from 'next/head';

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
		<>
			<Head>
				<title>Pokemon: {pokemon?.name}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div>
				<h1>Welcome, {pokemon?.name}</h1>
				<img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
			</div>
		</>
	);
};

export default Pokemon;
