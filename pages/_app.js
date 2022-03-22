import '../styles/globals.css';
import Navbar from '../components/Navbar';
import BottomTabNavigator from '../components/BottomTabNavigator';


function MyApp({ Component, pageProps }) {
  return ( 
    <>
    <Navbar/>
    <Component {...pageProps} />
  
    </>
    )

  
}

export default MyApp
