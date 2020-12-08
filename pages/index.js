import Head from 'next/head';
import { useRouter } from 'next/router';

// This is a Route
const Home = () => {
	const router = useRouter();

	const handleClick = (e) => {
		e.preventDefault();
		router.push('/pokemon/charmander');
	};

	return (
		<>
			<Head>
				<title>My Next.js site</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<h1>Welcome, Explorer!</h1>
			<button onClick={handleClick}> Click me!</button>
		</>
	);
};

export default Home;
