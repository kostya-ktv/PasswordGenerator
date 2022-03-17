import { FC, useEffect, useState } from "react"
import { CheckBoxProps } from "./checkbox.props"
import styles from './checkbox.module.scss'

//onClick prop is a function that change a parent state value
const CheckBox:FC<CheckBoxProps> = ({title, onClick, disable}) => {

   const [isChecked, setChecked] = useState<boolean>(false)
   const [isDisable, setDisable] = useState<boolean>(false)

   const handleClick = () => {
      setChecked(!isChecked)
      onClick(!isChecked)
   }

   useEffect(() => {
    if(disable) {
      onClick(false)
      setChecked(false) 
    }
   },[disable])

   useEffect(() => {
    disable ? setDisable(true) : setDisable(false) 
   },[disable])

  return (
    <div className={styles.box}>
       <input 
       type="checkbox"
       checked={isChecked}
       onChange={handleClick}
       disabled={isDisable}
       />   
       
       <p 
         style={(isChecked && !isDisable) ? {color: 'white'} : {}} 
         onClick={() => {
           if(!isDisable) handleClick()
         }}
         >{title}
       </p>
    </div>
  )
}

export default CheckBox