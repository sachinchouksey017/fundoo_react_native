import fire from '../config/firebase';
import { getAxios, postAxios } from './axios'
import Snackbar from 'react-native-snackbar';

export function userRegister(object, callback) {
    postAxios('user/userSignUp', object, false,false, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })

}

export function userLogin(object, callback) {
    
    postAxios('user/login', object,false, false, (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data)
        }
    })
}
export function userForgot(object, callback) {
    postAxios('user/reset', object,false, false, (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data)
        }
    })
}

export function  showSnackbar(title) {
    Snackbar.show({
      title: title,
      duration: Snackbar.LENGTH_SHORT,
    });
  }








// export function userRegister(object,callback) {
//     console.log('data in service', object);

//     fire.auth().createUserAndRetrieveDataWithEmailAndPassword(object.email, object.password).then(data => {
//         console.log(data);
//         fire.database().ref('users/' + data.user.uid).set({
//             firstName: object.firstName,
//             lastName: object.lastName,
//             email: object.email

//         })
//         return callback(null,object);


//     })
//         .catch(err => {
//             console.log(err);
//             return callback(err);

//         })

// }

