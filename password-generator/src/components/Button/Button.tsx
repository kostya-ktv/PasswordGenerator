import { FC } from 'react'
import IconSelector from '../IconSelector/IconSelector'
import styles from './button.module.scss'
import { ButtonProps } from './button.props'

const Button:FC<ButtonProps> = ({type, label}) => {

  return (
    <>
   <div className={styles.wrapper}>
      <p>{label}</p>
      <button className={styles.btn}>
         <IconSelector title={type}/>
      </button>
    </div>
    </>
  )
}

export default Button