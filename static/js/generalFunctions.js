

export const structureTextDataForDropDown = (dataToInput) => {  //put back in input component (not a general function)
  var optionsArrayToPutInState = []
  for (const key in dataToInput["inputComp"]) {
    var keyObject = {"text": key, "value": dataToInput["inputComp"][key]["nextSequence"].toString()}
    optionsArrayToPutInState.push(keyObject)
  }
    return optionsArrayToPutInState
}


export const findDataBasedOnSequence = (sequence,allTextOptions) => {
  for (const eachDisplayElementObject in allTextOptions){
    if (allTextOptions[eachDisplayElementObject]["sequence"].toString() === sequence){
      const dataToInput = allTextOptions[eachDisplayElementObject]
      return  dataToInput
    }
  }
}
