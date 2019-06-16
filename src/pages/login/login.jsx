import React,{Component} from 'react'
import {Form,Icon,Input,Button} from 'antd'
import logo from './images/logo.png'
import './login.less'



/* 登录一级路由组件 */
 class Login extends Component{



    handleSubmit = (event)=>{
      //取消浏览器默认行为
      event.preventDefault()

      // 统一进行所有表单项的验证
      this.props.form.validateFields((err,values)=>{
          if(!err){
              console.log('发登录ajax请求',values)
          }
      })

      /* let username = this.props.form.getFieldValue('username')
      let password = this.props.form.getFieldValue('password')
      console.log(username,password) */
    }
    /*
        对密码进行自定义验证
        1). 必须输入
        2). 必须大于等于4位
        3). 必须小于等于12位
        4). 必须是英文、数字或下划线组成
        */

    validatePwd = (rule,value='',callback)=>{
        value = value.trim()
        if(!value){
            callback('必须输入密码！')
        }else if(value.length < 4){
            callback('密码长度不能小于4位！')
        }else if(value.length > 12){
            callback('密码长度不能大于12位！')
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            callback('密码必须是英文、数字或下划线组成!')
        }else{
            callback()
        }


    }


    render(){
        let {getFieldDecorator} = this.props.form
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content">
                 <h2>用户登陆</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                          {
                              getFieldDecorator('username',{

                                //指定初始值为空
                                initialValue: '',
                                rules: [
                                    {required:true, message: '请输入用户名！'},
                                     {min:4,message:'用户名不能小于4位！'},
                                     {max:12,message:'用户名不能大于12位！'},
                                     {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须是英文、数字或下划线组成!'}
                                     ],
                              })(
                                <Input
                                   prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                   placeholder="用户名"
                                />)
                          }
                        
                        </Form.Item>
                        <Form.Item>
                         {
                            getFieldDecorator('password',{
                                //initialValue: '',
                                rules: [
                                    { validator: this.validatePwd}
                                  ]
                            })(
                                <Input
                                   prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                   type="password"
                                   placeholder="密码"
                                />)
                            }
                       
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登 陆
                        </Button>
                        </Form.Item>
                    </Form>
                </section>
                    </div>
        )
    }
}

const userLogin = Form.create()(Login)
export default userLogin


 