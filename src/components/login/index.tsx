import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Router from "next/router";
import { Col } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import logo from '../../assets/logo.png';
import Images from 'components/_common/Images';
import axios from "axios";
import { url } from "components/ApiUrl/ApiUrl";
import showToaster from 'components/_common/Toaster/Toaster';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import postLogin from 'redux/action/Login';
import { AnyAction } from 'redux';

function Login() {
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  const [responseData, setResponseData] = useState("");
  const [loginSchema] = useState(Yup.object().shape({
    email: Yup.string().email('Invalid email address.').required('Email field are required.'),
    password: Yup.string()
      .min(6, 'Password length must be greater than 6 characters.')
      .max(20, 'Password length must not exceed 20 characters.')
      .required('Password field are required.')
  }));

  const [initialValues] = useState({
    email:'admin@admin.com',
    password:'Qwerty@123',
  });

  const onFormSubmit = async (values: any) => {
    const logindata = {
      email: values.email,
      password: values.password,
    };
    
    axios
    .post(`${url}api/admin/sign-in`,logindata)
    .then((response) => {
       localStorage.setItem('accessToken',response.data.accessToken);
      // showToaster("success","SignIn Successfully");
      // Router.push(`/customers-list`);
      dispatch(postLogin(values) as unknown as AnyAction);
      Router.push(`/editable-values-list`)
     })
    .catch((err) => {
      showToaster("error","Invalid login credentials.");
      setTimeout(() => { setErrorMsg("") }, 2000)
     });
     
  };
  return (
    <div>
      <div className='main-section'>
        <Col xs={4}>

          <Card className='p-5'>
            <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={onFormSubmit}>
              {({ errors, touched }) => (
                <Form>
                  <div className='text-center pb-5'>
                    <Images icon={logo} alt='loginImage' width='67px' height='70px' />
                  </div>

                  <Alert key={"danger"} variant={"danger"} dismissible={true} show={(errorMsg != "")} onClose={() => { setErrorMsg("") }}>
                    {errorMsg}
                  </Alert>

                  <Field name="email" type="email" className="form-control h-40" placeholder={"Email"} />
                  {errors.email && touched.email ? <p className={"errorMsg"}>{errors.email}</p> : null}

                  <Field name="password" type="password" className="form-control mt-4 h-40" placeholder={"Password"} />
                  {errors.password && touched.password ? <p className={"errorMsg"} >{errors.password}</p> : null}

                  <Button type='submit' className='btn-dark-login mt-4' >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Card>
        </Col>
      </div>
    </div>
  )
}

export default Login;


