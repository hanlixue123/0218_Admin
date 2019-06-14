import React,{Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import Admin from './pages/admin/Admin.jsx'

/* 应用根组件 */

export default class App extends Component{
    render(){
        return (
            <BrowserRouter>
             <Switch>
               <Route path="/" component={Login}/>
               <Route path="/admin" component={Admin}/>
             </Switch>
            </BrowserRouter>
        )
    }
}