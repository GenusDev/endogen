
export const NEXTSEQUENCE = "NEXTSEQUENCE";

export const shiftToNextSequence =(nextsequence)=>{
  return ({
    type: NEXTSEQUENCE,
    payload: nextsequence
  })
}
