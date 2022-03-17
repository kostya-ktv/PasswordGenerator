import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button/Button'
import IconSelector from '../../components/IconSelector/IconSelector'
import { generatePassword_action } from '../../store/actions/password-actions'
import { PASSWORD_STATE_TYPE, STORE_TYPE } from '../../store/types'
import styles from './footer.module.scss'

const Footer = () => {
  const { parameters }: PASSWORD_STATE_TYPE  = useSelector((state: STORE_TYPE) => state.password)

  const dispatch = useDispatch()
  return (
    <div className={styles.footer}>
      <div className={styles.contacts}>
        
        <div className={styles.icons}>
          <a href='https://github.com/kostya-ktv/PasswordGenerator' target='_blank'><IconSelector title='GITHUB'/></a>
          <a href='https://www.linkedin.com/in/kotov1337/' target='_blank'><IconSelector title='LINKEDIN'/></a>
        </div>
        <p>@2022 Kostya K.</p>
      </div>
         <Button type='START' label='Generate' onClick={() => generatePassword_action(parameters, dispatch)}/>
    </div>
  )
}

export default Footer