import Layout from '../components/layout'
import './style.css'

export default function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
    </Layout>
}