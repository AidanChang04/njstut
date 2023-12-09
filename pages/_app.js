import '@/styles/globals.css'
import Layout from 'C:/Users/aidan/njstut/components/Layout.jsx'

export default function App({ Component, pageProps }) {

  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  );
};