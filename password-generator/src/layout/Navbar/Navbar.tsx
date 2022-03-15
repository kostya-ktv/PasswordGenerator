import React, { useState } from 'react'
import CheckBox from '../../components/CheckBox/CheckBox'
import styles from './navbar.module.scss'
type Props = {}

const Navbar = (props: Props) => {
   const [includeDigits, setIncludeDigits] = useState<boolean>(false)
   const [includeLowercase, setIncludeLowercase] = useState<boolean>(false)
   const [beginWithALetter, setBeginWithALetter] = useState<boolean>(false)
   const [includeSymbols, setIncludeSymbols] = useState<boolean>(false)
   const [noSimilarCharacters, setNoSimilarCharacters] = useState<boolean>(false)
   const [noDuplicateCharacters, setNoDuplicateCharacters] = useState<boolean>(false)
   const [saveInCookie, setSaveInCookie] = useState<boolean>(false)

  return (
    <div className={styles.navbar}>
       <CheckBox title='Include Numbers' onClick={setIncludeDigits}/>
       <CheckBox title='Include Lowercase Characters' onClick={setIncludeLowercase}/>
       <CheckBox title='Begin With A Letter' onClick={setBeginWithALetter}/>
       <CheckBox title='Include Symbols' onClick={setIncludeSymbols}/>
       <CheckBox title='No Similar Characters' onClick={setNoSimilarCharacters}/>
       <CheckBox title='No Duplicate Characters' onClick={setNoDuplicateCharacters}/>
       <CheckBox title='Save My Preference in cookies' onClick={setSaveInCookie}/>
    </div>
  )
}

export default Navbar