import IconSelector from '../../components/IconSelector/IconSelector'
import styles from './header.module.scss'

export const Header = () => {
   return(
      <>
       <div className={styles.header}>
          <div className={styles.menu}>
             <IconSelector title='LOGO'/>
             <p className={styles.name}>Fast-Password-Generator</p>

         </div>
      </div>
      </>
     
   )
}