import Footer from './Footer/Footer'
import { Header } from './Header/Header'
import styles from './layout.module.scss'
import Main from './Main/Main'
import Navbar from './Navbar/Navbar'

const Layout= () => {
   
  return (
    <>
    <div className={styles.box}>
      <Header/>

      <div className={styles.wrap}>
        <Navbar/>
        <Main/>
      </div>
           
      <Footer/>

      </div>
    </>
  )
}

export default Layout