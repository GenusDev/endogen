
export const appStringify = (array) => {
  var newString= "";
  for (const number in array) {
    newString = newString.concat(newString, array[number].toString());
  }

  return newString
}


export const structureTextDataForDropDown = (dataToInput) => {
  var optionsArrayToPutInState = []
  for (const key in dataToInput["inputComp"]) {
    var keyObject = {"text": key, "value": appStringify(dataToInput["inputComp"][key]["nextSequence"])}
    optionsArrayToPutInState.push(keyObject)
  }

    return optionsArrayToPutInState
}


export const findDataBasedOnSequence = (sequence,allTextOptions) => {
  for (const eachDisplayElementObject in allTextOptions){
    if (appStringify(allTextOptions[eachDisplayElementObject]["sequence"]) === sequence){
      const dataToInput = allTextOptions[eachDisplayElementObject]
      return  dataToInput
    }
  }
}
