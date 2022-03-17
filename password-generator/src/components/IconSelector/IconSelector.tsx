import React, { FC } from 'react'
import { IconSelectorProps} from './iconSelector.props'
import Start from '../../assets/icons/start.svg'
import Logo from '../../assets/icons/logo.svg'
import Linkedin from '../../assets/icons/lindedin.svg'
import Github from '../../assets/icons/github.svg'
import Copy from '../../assets/icons/copy.svg'

const IconSelector:FC<IconSelectorProps> = ({title}) => {
 
   switch (title) {
      case 'START': return <Start/>
      case 'LOGO': return <Logo/>
      case 'GITHUB': return <Github/>
      case 'LINKEDIN': return <Linkedin/>
      case 'COPY': return <Copy/>

      default: return <Start/>
   }

}

export default IconSelector