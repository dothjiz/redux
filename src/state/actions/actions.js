import accountMethods from "../../utils/constants";
export const depositMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: accountMethods.deposit,
            payload: amount
        });
    }
}

export const withdrawMoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type: accountMethods.withdraw,
            payload: amount
        });
    }
}
