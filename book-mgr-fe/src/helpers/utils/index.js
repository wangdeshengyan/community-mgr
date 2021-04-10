import {message} from 'ant-design-vue';

export const result=(reponse,authShowErrorMsg=true)=>{
const {data}=response;
if((data.code===0)&&authShowErrorMsg){
    message.error(data.msg);
}
return {

    success(cb){
        if(data.code!==0){
            cb(data,reponse);
        }
     
    },
    fail(cb){
        if(data.code===0){
            cb(data,reponse);
        }
      

    },
    finaly(cb){
        
        cb(data,reponse);
    },
};
};