import React, { useState , useEffect } from "react";
import { Button, Checkbox, Form, Input } from 'antd';


function Login() {
    const [list, setList] = useState([]);
    const [isloading,setIsLoading] = useState('');
    useEffect(()=>{
          setIsLoading(true)
          fetch('https://restcountries.com/v2/all')
          .then(res => {
            return res.json()
          })
          .then(res => {
            setIsLoading(false)
            setList(res)
          })
          .catch(err => {
            console.log("err = ", err)
          })
        }, [])

    return ( 
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        
        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button isloading={true} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        </Form> );
}

export default Login;