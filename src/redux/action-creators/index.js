export const increament = (amount)=>{
    return (dispatch)(
        dispatch={
          type: 'increment',
          payload: amount
        }
    )
}


export const decrement = (amount)=>{
    return (dispatch)(
        dispatch={
            type: 'decrement',
            payload: amount
        }
    )
}