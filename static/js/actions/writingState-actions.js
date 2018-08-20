
export const ISWRITING = "ISWRITING";

export const shiftToWriting =(WritingState)=>{
  return ({
    type: ISWRITING,
    payload: WritingState
  })
}
