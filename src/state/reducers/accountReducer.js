import accountMethods from "../../utils/constants";
const account = (state =0, action) =>{
    switch (action.type) {
        case accountMethods.deposit:{
            return state + action.payload;
        }
        case accountMethods.withdraw:{
            return state - action.payload;
        }
        default: return state;
    }
};

export default account;
