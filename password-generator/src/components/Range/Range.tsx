import { FC, useEffect, useState } from 'react'
import styles from './range.module.scss'
import { RangeProps } from './range.props'

const Range:FC<RangeProps> = ({title, onChange, max}) => {

   const [range, setRange] = useState<number>(6)
   const [maxValue, setmaxValue] = useState<number>(100)

   const handleChange = (e: any) => {
    setRange(e.target.value)
   }

   useEffect(() => {
    onChange(range)
   },[range])

//EFFECT THAT CHANGES A MAX VALUE. DEPEND ON <NO_DUPLICATE_VALUE>. ALSO RESETS A CURRENT RANGE TO MIN
   useEffect(() => {
    onChange(range)
    setmaxValue(max)
    setRange(6)
   },[max])

  return (
    <div className={styles.box}>
       <p style={{color: 'white'}}>{title}</p>
       <input 
         type='range' 
         max={maxValue} 
         min={6}
         value = {range}
         onChange={handleChange}
       />
       <span style={{color: 'white'}}>{range}</span>
    </div>
  )
}

export default Range