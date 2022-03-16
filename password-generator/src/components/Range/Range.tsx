import { FC, useState } from 'react'
import styles from './range.module.scss'
import { RangeProps } from './range.props'

const Range:FC<RangeProps> = ({title, onChange}) => {

   const [range, setRange] = useState<number>(6)
   const handleChange = (e: any) => {
      setRange(e.target.value)
      onChange(range)
   }
  return (
    <div className={styles.box}>
       <p style={{color: 'white'}}>{title}</p>
       <input 
         type='range' 
         max={100} 
         min={6}
         value = {range}
         onChange={handleChange}
       />
       <span style={{color: 'white'}}>{range}</span>
    </div>
  )
}

export default Range