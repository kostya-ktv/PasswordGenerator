import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import CheckBox from '../../components/CheckBox/CheckBox'
import Range from '../../components/Range/Range'
import { savePassword_action } from '../../store/actions/password-actions'
import { PASSWORD_PARAMETERS_TYPE } from '../../store/types'
import styles from './navbar.module.scss'

const Navbar = () => {
  const dispatch = useDispatch()

   const [includeNumbers, setIncludeNumbers] = useState<boolean>(false)
   const [includeLowercase, setIncludeLowercase] = useState<boolean>(false)
   const [beginWithALetter, setBeginWithALetter] = useState<boolean>(false)
   const [includeSymbols, setIncludeSymbols] = useState<boolean>(false)
   const [noSimilarCharacters, setNoSimilarCharacters] = useState<boolean>(false)
   const [noDuplicateCharacters, setNoDuplicateCharacters] = useState<boolean>(false)
   const [saveInCookie, setSaveInCookie] = useState<boolean>(false)
   const [passwordLength, setPasswordLength] = useState<number>(6)
   
   const parameters: PASSWORD_PARAMETERS_TYPE = {
     beginWithALetter: beginWithALetter,
     passwordLength: passwordLength,
     saveInCookie: saveInCookie,
     noDuplicateCharacters: noDuplicateCharacters,
     noSimilarCharacters: noSimilarCharacters,
     includeLowerCase: includeLowercase,
     includeSymbols: includeSymbols,
     includeNumbers: includeNumbers
   }
   
   savePassword_action(parameters, dispatch)

  return (
    <div className={styles.navbar}>
       <Range title='Password Length' onChange = {setPasswordLength}/>
       <CheckBox title='Include Numbers' onClick={setIncludeNumbers}/>
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