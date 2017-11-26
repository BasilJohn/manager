import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCESS } from './types';
import firebase from 'firebase';

export const onEmailChanged = (text) => {

    return {
        type: EMAIL_CHANGED,
        payload: text
    }

};
export const onPasswordChanged = (text) => {

    return {
        type: PASSWORD_CHANGED,
        payload: text
    }

};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user =>loginUserSuccess(dispatch,user))
            .catch(() =>{
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user=> user =>loginUserSuccess(dispatch,user))
            })
    };

};

const loginUserSuccess = (dispatch,user) =>{
    dispatch ( { type : LOGIN_USER_SUCESS , payload: user });
}