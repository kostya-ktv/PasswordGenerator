export class PasswordParameters {
   passwordLength? = 6
   onlyNumbers? = false
   includeNumbers? = false
   includeUpperCase? = false
   beginWithALetter? = false
   includeSymbols? = false
   noDuplicateCharacters? = false
   saveInCookie? = false

   constructor(
      passwordLength?: number,
      onlyNumbers?: boolean,
      includeNumbers?: boolean,
      includeUpperCase?: boolean,
      beginWithALetter?: boolean,
      includeSymbols?: boolean,
      noDuplicateCharacters?: boolean,
      saveInCookie?: boolean    
   ){
      this.passwordLength = passwordLength
      this.onlyNumbers = onlyNumbers
      this.includeNumbers = includeNumbers
      this.includeUpperCase = includeUpperCase
      this.beginWithALetter = beginWithALetter
      this.includeSymbols = includeSymbols
      this.noDuplicateCharacters = noDuplicateCharacters
      this.saveInCookie = saveInCookie
   }
}