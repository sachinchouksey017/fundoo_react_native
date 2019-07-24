import { postAxios,getAxios } from "../service/axios";


export function addNoteService(data,callback) {
    
    postAxios('notes/addNotes',data,true,true,(err,object)=>{
        if(err){
            console.log(err);
            callback(err)
            
        }else{
            console.log(object);
            callback(object)
        }
    })
}
export function getAllCardService(callback){
getAxios('notes/getNotesList',true,(err,object)=>{
    if(err){
        callback(err);
    }else{
        callback(null,object);
    }
})
}