import '../styles/globals.css'
import Layout from '../components/layout/Layout'


function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      {/* will be the children of the layout component */}
      {/* Component will be the current rendered page */}
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
