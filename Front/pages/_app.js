import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
