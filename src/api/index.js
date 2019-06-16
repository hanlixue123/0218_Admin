import ajax from './ajax'
const BASE = 'http://localhost:3000'

export const reqLogin=(username,password)=>ajax(BASE + '/login', {username, password}, 'POST')
//添加用户
export const reqAddUser = (user) =>ajax(BASE + '/manage/user/add',user,'POST')
//简单测试一下
reqLogin('admin','admin').then(result =>{
    console.log('result',result)
})