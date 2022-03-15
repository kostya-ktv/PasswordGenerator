import React from 'react'
import Button from '../../components/Button/Button'
import Range from '../../components/Range/Range'
import styles from './footer.module.scss'
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>
         <Button type='START' label='Click'/>
         <Button type='START' label='Click'/>
         <Range title='Password Length'/>
       </div>
  )
}

export default Footer