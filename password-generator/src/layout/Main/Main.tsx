import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PASSWORD_STATE_TYPE, STORE_TYPE } from '../../store/types'
import styles from './main.module.scss'

const Main = () => {
  const {password}: PASSWORD_STATE_TYPE  = useSelector((state: STORE_TYPE) => state.password)
  
  useEffect(() => {

  },[password])
  return (
    <div className={styles.main}>
       <div className={styles.password}>
          {password}
       </div>
    </div>
  )
}

export default Main