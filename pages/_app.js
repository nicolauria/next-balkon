import Layout from '../components/Layout'
import '../styles/globals.css'
// import '../styles/reset.css'
// import '../styles/plugins.css'
// import '../styles/style.css'
// import '../styles/yourstyle.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
