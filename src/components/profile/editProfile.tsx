import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Sidebar from 'components/_common/Sidebar'
import Header from 'components/_common/Header'

function EditProfile() {

    const [editProfileSchema] = useState(Yup.object().shape({
        name: Yup.string().required('Name field are required.'),
        surname: Yup.string().required('Surname field are required.'),
        email: Yup.string().email('Invalid email address.').required('Email field are required.'),
    }));

    const [editProfileInitialValues] = useState({
        name: 'name demo',
        surname: 'surname demo',
        email: 'demo@gmail.com',
    });

    const editProfileFormSubmit = (values: any) => {
        alert("submit")
    }

    const [editPasswordSchema] = useState(Yup.object().shape({
        currentPassword: Yup.string()
            .min(8, 'Current password length must be greater than 8 characters.')
            .max(20, 'Current password length must not exceed 20 characters.')
            .required('Current password field are required.'),
        newPassword: Yup.string()
            .min(8, 'New password length must be greater than 8 characters.')
            .max(20, 'New password length must not exceed 20 characters.')
            .required('New password field are required.')
            .matches(
                '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$' as unknown as RegExp,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        reTypeNewPassword: Yup.string()
            .required('Re-type new password field are required.').
            when('newPassword', (password, field) =>
                password ? field.required().oneOf([Yup.ref('newPassword'), null], 'Passwords must match') : field
            )

    }));

    const [editPasswordInitialValues] = useState({
        currentPassword: '',
        newPassword: '',
        reTypeNewPassword: '',
    });

    const editPasswordFormSubmit = (values: any) => {
        alert("submit")
    }

    return (
        <>
            <div className="App">
                <div>
                    <Header />
                </div>
                <div>
                    <Sidebar activeBar={"profile"} />
                </div>
            </div>
            <div className='main-content'>
                <div className='m-4'>
                    <Row>
                        <h1 className='cards-header mb-3 mt-3'>Profile preferences</h1>
                        <Col xs={10}>
                            <div className='cards'>
                                <div className='row align-items-center '>
                                    <h3 className='cards-header mb-3 mt-3'>Email</h3>
                                    <Formik initialValues={editProfileInitialValues} validationSchema={editProfileSchema} onSubmit={editProfileFormSubmit}>
                                        {({ errors, touched }) => (
                                            <Form>
                                                <div className='row align-items-center mt-4'>
                                                    <div className='col-4'>
                                                        <p className='label-text'>Name</p>
                                                    </div>
                                                    <div className='col-8'>
                                                        <Field name={"name"} type='text' className='form-control' placeholder='Enter here' />
                                                        {errors.name && touched.name ? <span className={"errorMsg"}>{errors.name}</span> : null}
                                                    </div>
                                                </div>
                                                <div className='row align-items-center mt-4'>
                                                    <div className='col-4'>
                                                        <p className='label-text'>Surname</p>
                                                    </div>
                                                    <div className='col-8'>
                                                        <Field name={"surname"} type='text' className='form-control' placeholder='Enter here' />
                                                        {errors.surname && touched.surname ? <span className={"errorMsg"}>{errors.surname}</span> : null}
                                                    </div>
                                                </div>
                                                <div className='row align-items-center mt-4'>
                                                    <div className='col-4'>
                                                        <p className='label-text'>E-mail</p>
                                                    </div>
                                                    <div className='col-8'>
                                                        <Field name={"email"} type='text' className='form-control' placeholder='Enter here' />
                                                        {errors.email && touched.email ? <span className={"errorMsg"}>{errors.email}</span> : null}
                                                    </div>

                                                </div>
                                                <div className='footersave'>
                                                    <div className='footer-1'>
                                                        <div className='row mt-3 justify-content-end'>
                                                            <div className='col-3'>
                                                                <button className='btn-save'>Save Changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>

                                    <h3 className='cards-header mb-3 mt-3'>Change password</h3>
                                    <Formik initialValues={editPasswordInitialValues} validationSchema={editPasswordSchema} onSubmit={editPasswordFormSubmit}>
                                        {({ errors, touched }) => (
                                            <Form>
                                                <div className='row align-items-center mt-4'>
                                                    <div className='col-4'>
                                                        <p className='label-text'>Current password</p>
                                                    </div>
                                                    <div className='col-8'>
                                                        <Field name={"currentPassword"} type='text' className='form-control' placeholder='Enter here' />
                                                        {errors.currentPassword && touched.currentPassword ? <span className={"errorMsg"}>{errors.currentPassword}</span> : null}
                                                    </div>
                                                </div>
                                                <div className='row align-items-center mt-4'>
                                                    <div className='col-4'>
                                                        <p className='label-text'>New password</p>
                                                    </div>
                                                    <div className='col-8'>
                                                        <Field name={"newPassword"} type='text' className='form-control' placeholder='Enter here' />
                                                        {errors.newPassword && touched.newPassword ? <span className={"errorMsg"}>{errors.newPassword}</span> : null}
                                                    </div>
                                                </div>
                                                <div className='row align-items-center mt-4'>
                                                    <div className='col-4'>
                                                        <p className='label-text'>Re-type new password</p>
                                                    </div>
                                                    <div className='col-8'>
                                                        <Field name={"reTypeNewPassword"} type='text' className='form-control' placeholder='Enter here' />
                                                        {errors.reTypeNewPassword && touched.reTypeNewPassword ? <span className={"errorMsg"}>{errors.reTypeNewPassword}</span> : null}
                                                    </div>
                                                </div>
                                                <div className='footersave'>
                                                    <div className='footer-1'>
                                                        <div className='row mt-3 justify-content-end'>
                                                            <div className='col-3'>
                                                                <button className='btn-save'>Save Changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default EditProfile;