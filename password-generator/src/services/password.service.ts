import { PasswordParameters } from "../models/PasswordParameters";
import { alphabet, alphabetUp, numbersList, symbolsList } from "./storage";

export const generatePassword = (parameters: PasswordParameters):string => {
   console.log(parameters);
   
   const {
      beginWithALetter,
      onlyNumbers, 
      includeNumbers, 
      includeSymbols,
      includeUpperCase,
      noDuplicateCharacters,
      passwordLength,
      saveInCookie
   } = parameters

   let preparedArr = prepareArray(passwordLength, includeNumbers, includeSymbols, onlyNumbers, includeUpperCase, noDuplicateCharacters)
   let password = preparedArr.join('')

   if(beginWithALetter) password = insertFirstLetter(password)

   if(saveInCookie) document.cookie = `password=${JSON.stringify(parameters)}`

   return password  
}

//SIMPLE FUNCTION TO SHUFFLE AN ARRAY
const arrayShuffle = (arr: Array<any>) => {
   return arr.sort(() => Math.random() - 0.5);
}

//PREPARING AN ARRAY ACCORDING TO PARAMETERS
const prepareArray = (
   passwordLength: number | any, 
   numbers?: boolean, 
   symbols?: boolean,
   onlyNumbers?: boolean,
   includeUpperCase?: boolean,
   noDuplicateCharacters?: boolean
   ) => { 

   let temp: Array<any> = [''];
   if(onlyNumbers){
      temp = [...numbersList]
   }else{
      includeUpperCase ? temp = insertUpperCaseCharacters() : temp = [...alphabet]
      
      if(numbers) temp = [...temp, ...numbersList]
      if(symbols) temp = [...temp, ...symbolsList]
   }

   return fillArray(temp, passwordLength, noDuplicateCharacters)
}

//A FUNCTION THATH CHANGES A FIRST INDEX ELEMENT TO UPPERCASE LETTER
const insertFirstLetter = (str: string):string => {
   str = arrayShuffle(alphabet)[0].toUpperCase() + str.substring(1)
   return str
}

//A FUNCTION THAT ADDS A UPPERCASE CHARACTERS IN ARRAY 50% / 50%
const insertUpperCaseCharacters = () :Array<any> => {
   return [
      ...arrayShuffle(alphabet).slice(0, 12), 
      ...arrayShuffle(alphabetUp).slice(0, 12)
   ]
}
//A FUNCTION THAT FEELS AN ARRAY WITH PREPARED VALUES FROM BOILERPLATE ARRAY
const fillArray = (boilerplate: Array<any>, passwordLength: number, noDuplicateCharacters?: boolean) => {
   let temp = [...boilerplate]
   let result: Array<any> = [''];
   
   for(let i = 0; i < passwordLength - 1; i++) {
      result.push(arrayShuffle(temp)[0])
      if(noDuplicateCharacters)temp.shift()
   }

   return result
}