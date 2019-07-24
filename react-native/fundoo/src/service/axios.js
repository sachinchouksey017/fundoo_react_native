import axios from 'axios'
import baseurl from '../environment/config'


const header = {
    headers: {
        "Authorization": "TphRWezZMqR4liVqvC8c2cNJT3e3wnJuvSDDtJdvDaKWQNbKyCEvpZaYttflcSjG"
    }
}


export function getAxios(url, authRequired,callback) {
    console.log('header is ', baseurl.baseUrl + url);
     axios.get(baseurl.baseUrl + url, authRequired ? header:null)
     .then(function(data){
         return callback(null,data)
     })
     .catch(function(err){
         callback(err);
     })
}

function encode(data) {
    console.log('encode call');

    const formBody = [];
    for (const property in data) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
}


export function postAxios(url, data, authRequired, encodeRequired, callback) {
    if (encodeRequired) {
        data = encode(data);
        console.log('data after encode', data);
    }
    console.log('data after second encode', data);
    axios.post(baseurl.baseUrl + url, data, authRequired ? header : null)
        .then(function (response) {
            console.log("login success");
            
            callback(null, response)
        })
        .catch(function (error) {
            console.log(error);
            callback(error)
        });
}






