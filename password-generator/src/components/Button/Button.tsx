import { FC } from 'react'
import IconSelector from '../IconSelector/IconSelector'
import styles from './button.module.scss'
import { ButtonProps } from './button.props'

const Button:FC<ButtonProps> = ({type, label, onClick}) => {

  return (
    <>
   <div className={styles.wrapper}>
      <p>{label}</p>
      <button className={styles.btn} onClick={onClick}>
         <IconSelector title={type}/>
      </button>
    </div>
    </>
  )
}

export default Button