import React, { FC } from 'react'
import { IconSelectorProps} from './iconSelector.props'
import Start from '../../assets/icons/start.svg'
import Logo from '../../assets/icons/logo.svg'

const IconSelector:FC<IconSelectorProps> = ({title}) => {
 
   switch (title) {
      case 'START': return <Start/>
      case 'LOGO': return <Logo/>

      default: return <Start/>
   }

}

export default IconSelector