import axios from 'axios'


export default function ajax(url,data={},method='GET'){
   return new Promise((resolve,reject)=>{
       let promise 
       //发送get请求
      if(method==='GET'){
        promise = axios.get(url,{
            params:data
        })
      }else{
          //发送post请求
          promise = axios.post(url,data)
      }
      promise.then(
          responce =>{
              resolve(responce.data)
          },
          error =>{
              alert('请求出错：'+error.message)
          }
      )
   })
}

/* async function login(){
    const result = await ajax('/login',{
       username:'admin',
       password:'admin'
    },'POST')
    if(result.status===0){

    }else{
        
    }
} */