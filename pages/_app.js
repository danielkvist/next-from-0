import 'normalize.css';
import '../global.css';

// This is the app root
const Application = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export const reportWebVitals = (metric) => {
	switch (metric.name) {
		case 'FCP':
			break;
		case 'LCP':
			break;
		case 'FID':
			break;
		case 'TTFB':
			break;
		default:
			break;
	}
};

export default Application;
