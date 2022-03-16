import { useDispatch } from 'react-redux'
import Button from '../../components/Button/Button'
import { generatePassword_action } from '../../store/actions/password-actions'
import styles from './footer.module.scss'

const Footer = () => {
  const dispatch = useDispatch()
  return (
    <div className={styles.footer}>
         <Button type='START' label='Generate' onClick={() => generatePassword_action(dispatch)}/>
    </div>
  )
}

export default Footer