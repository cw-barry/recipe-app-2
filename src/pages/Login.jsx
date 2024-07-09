import {Formik, Form, Field, ErrorMessage} from 'formik'
import { Button, Error, LoginContainer } from '../styles/Login.styles'
import {Card} from '../styles/UI.styles';
import {useAuth} from '../context/Auth';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
  const {login} = useAuth()
  const navigate = useNavigate()

  const initialValues = {username: '', password:''};

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required').min(5, 'Minmum 5 characters')
  })

  const submitHandler = (values)=>{
    login();
    navigate('/')
  }

  return (
   
    <LoginContainer>
      <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={validationSchema}>
        <Card bg="#efefef" shadow={true}>
          <Form>

          <h1 className='text-center'> Login</h1>
          <Field type="text" name="username" placeholder="Username" autoComplete="off"/>
          <Error> <ErrorMessage name="username"/></Error>
   
          <Field type="password" name="password" placeholder="Password" autoComplete="off"/>
          <Error> <ErrorMessage name="password"/></Error>

          <div className="text-center">
            <Button>Login</Button>
          </div>

          </Form>
        </Card>
      </Formik>
    </LoginContainer>
  )
}

export default Login