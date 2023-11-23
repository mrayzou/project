


//initialstate

import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, REGISTER_USER } from "../actionstypes/user"
import { LOGOUT_USER } from './../actionstypes/user';

const intialState ={
    user : {},
    loadUser: false ,
    errors: null,
    isAuth: false,
    newUser: {},
}

//purefunctions 

const userReducer =(state = intialState , {type,payload}) => {
    switch(type){
        case LOAD_USER :
            return{...state , load : true}
        case REGISTER_USER : 
        localStorage.setItem("token",payload.token)
        return {...state , loadUser : false , newUser : payload.user , isAuth : true}
        case LOGIN_USER :
            localStorage.setItem("token", payload.token)
            return {...state, user : payload.user , loadUser : false , isAuth : true}
        case CURRENT_USER :
            return {...state , user : payload , isAuth : true , loadUser : false}
            case LOGOUT_USER :
                localStorage.removeItem('token')
                return {
                    user : {} ,
                    loadUser : false,
                    errors : null,
                    isAuth : false ,
                    newUser : {}
                }
                case FAIL_USER :
                    return{...state , loadUser : false , errors : payload}
            default :
                return state
    }
}

export default userReducer