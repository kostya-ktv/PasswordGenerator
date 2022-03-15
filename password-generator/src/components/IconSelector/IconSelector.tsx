import React, { FC } from 'react'
import { IconSelectorProps} from './iconSelector.props'
import Start from '../../assets/icons/start.svg'

const IconSelector:FC<IconSelectorProps> = ({title}) => {
 
   switch (title) {
      case 'START': return <Start/>

      default: return <Start/>
   }

}

export default IconSelector