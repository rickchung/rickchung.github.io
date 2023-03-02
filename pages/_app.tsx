/**
 * Next.js custom APP Root. See https://nextjs.org/docs/advanced-features/custom-app
 */
import { AppProps } from "next/app";

const App = ({Component, pageProps}: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
