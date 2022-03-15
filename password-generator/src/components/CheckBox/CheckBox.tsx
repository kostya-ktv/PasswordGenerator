import { FC, useState } from "react"
import { CheckBoxProps } from "./checkbox.props"
import styles from './checkbox.module.scss'

const CheckBox:FC<CheckBoxProps> = ({title, onClick}) => {

   const [isChecked, setChecked] = useState<boolean>(false)
   const handleClick = () => {
      setChecked(!isChecked)
      onClick(isChecked)
   }

  return (
    <div className={styles.box}>
       <input 
       type="checkbox"
       checked={isChecked}
       onClick={handleClick}
       />
       {title}
    </div>
  )
}

export default CheckBox