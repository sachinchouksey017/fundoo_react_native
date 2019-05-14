import axios from 'axios'
import baseurl from '../environment/config'


export function getAxios(url, authRequired) {
    console.log(baseurl.baseUrl);
    // return axios.get(baseurl.baseUrl + url);
}



export function postAxios(url, data, authRequired, callback) {
    axios.post(baseurl.baseUrl + url, data)
        .then(function (response) {
            return callback(null, response)
        })
        .catch(function (error) {
            console.log(error);
            return callback(error)
        });
}






