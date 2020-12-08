import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
	return (
		<>
			<Head>
				<title>Blog</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<h1>Welcome, blog reader!</h1>
			<Link href="/">
				<a>Go back home</a>
			</Link>
		</>
	);
};

export default Home;
