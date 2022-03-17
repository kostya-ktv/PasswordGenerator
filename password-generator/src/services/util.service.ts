import { alphabet, numbersList, symbolsList } from "./storage"

export const calculateRangeComponentLength = (
   onlyNumbers: boolean, includeNumbers: boolean, includeSymbols: boolean, noDuplicateCharacters: boolean
   ) => {
      if(onlyNumbers) return numbersList.length
      if(includeNumbers) return numbersList.length + alphabet.length
      if(includeSymbols && includeNumbers) return numbersList.length + alphabet.length + symbolsList.length
      if(includeSymbols) return alphabet.length + symbolsList.length

      if(noDuplicateCharacters) return alphabet.length
      return 100
}