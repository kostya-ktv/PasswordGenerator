import { useSelector } from 'react-redux'
import IconSelector from '../../components/IconSelector/IconSelector'
import { PASSWORD_STATE_TYPE, STORE_TYPE } from '../../store/types'
import styles from './main.module.scss'

const Main = () => {
  const {password}: PASSWORD_STATE_TYPE  = useSelector((state: STORE_TYPE) => state.password)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    .catch(err => {
      console.log('Something went wrong', err);
    });
  }

  return (
    <div className={styles.main}>
          <button className={styles.password} onClick={copyToClipboard}>{password}</button>  
          <p className={styles.copy} onClick={copyToClipboard}><IconSelector title='COPY'/></p>
    </div>
  )
}

export default Main