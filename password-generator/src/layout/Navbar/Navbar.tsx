/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import CheckBox from '../../components/CheckBox/CheckBox'
import Range from '../../components/Range/Range'
import { PasswordParameters } from '../../models/PasswordParameters'
import { calculateRangeComponentLength } from '../../services/util.service'
import { savePassword_action } from '../../store/actions/password-actions'
import styles from './navbar.module.scss'

const Navbar = () => {
  const dispatch = useDispatch()

   const [includeNumbers, setIncludeNumbers] = useState<boolean>(false)
   const [includeUpperCase, setIncludeUpperCase] = useState<boolean>(false)
   const [beginWithALetter, setBeginWithALetter] = useState<boolean>(false)
   const [includeSymbols, setIncludeSymbols] = useState<boolean>(false)
   const [onlyNumbers, setOnlyNumbers] = useState<boolean>(false)
   const [noDuplicateCharacters, setNoDuplicateCharacters] = useState<boolean>(false)
   const [saveInCookie, setSaveInCookie] = useState<boolean>(false)
   const [passwordLength, setPasswordLength] = useState<number>(6)
   
   const parameters = new PasswordParameters(
     passwordLength,
     onlyNumbers,
     includeNumbers,
     includeUpperCase,
     beginWithALetter,
     includeSymbols,
     noDuplicateCharacters,
     saveInCookie
     )

   useEffect(() => {
    savePassword_action(parameters, dispatch)
   },[parameters])
   
   const handleRangeLength = () => {
     if(!noDuplicateCharacters) return 100
     return calculateRangeComponentLength(onlyNumbers, includeNumbers, includeSymbols, noDuplicateCharacters)
   }

  return (
    <div className={styles.navbar}>
       <Range title='Password Length' onChange = {setPasswordLength} max={handleRangeLength()}/>
       <CheckBox title='Only numbers' onClick={setOnlyNumbers}/>
       <CheckBox title='Include Numbers' onClick={setIncludeNumbers} disable={onlyNumbers}/>
       <CheckBox title='Include Uppercase Characters' disable={onlyNumbers} onClick={setIncludeUpperCase}/>
       <CheckBox title='Begin With A Letter' disable={onlyNumbers} onClick={setBeginWithALetter}/>
       <CheckBox title='Include Symbols' disable={onlyNumbers} onClick={setIncludeSymbols}/>
       <CheckBox title='No Duplicate Characters' onClick={setNoDuplicateCharacters}/>
       <CheckBox title='Save My Preference in cookies' onClick={setSaveInCookie}/>
       
    </div>
  )
}

export default Navbar