import { FC, useState } from 'react'
import styles from './range.module.scss'
import { RangeProps } from './range.props'

const Range:FC<RangeProps> = ({title}) => {
   const [range, setRange] = useState<number>(6)
   const handleChange = (e: any) => {
      setRange(e.target.value)
   }
  return (
    <div className={styles.box}>
       <p>{title}</p>
       <input 
         type='range' 
         max={100} 
         min={6}
         value = {range}
         onChange={handleChange}
       />
       <span>{range}</span>
    </div>
  )
}

export default Range