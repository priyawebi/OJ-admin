import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'

import Container from 'components/_common/Container'

function RequestDetails() {
    return (
        <>
            <Container activeBar={"requests"} />
            <div className='main-content'>
                <div className='m4'>
                    <Row>
                        <Col sm={8}>
                            <div className='cards'>
                                <div className='row align-items-center '>
                                    <h3 className='cards-header my-3'>Request information</h3>

                                    <div className='col-sm-6'>
                                        <p className='label-text'>Type</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Lost Gift Card</p>
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Customer</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Dainius Godelis</p>
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Value</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>1.289,99 €</p>
                                    </div>
                                </div>

                                <div className='row align-items-center '>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Request date</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>2017-12-11 12:34</p>
                                    </div>
                                </div>

                                <div className='row  my-4'>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Notes</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <textarea
                                            name=''
                                            id=''
                                            className='custom-textareas'
                                            rows={7}
                                        ></textarea>
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Status</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-check form-check-inline'>
                                            <input
                                                className='form-check-input'
                                                type='radio'
                                                name='inlineRadioOptions'
                                                id='inlineRadio1'
                                                value='option1'
                                            />
                                            <label
                                                className='form-check-label'
                                                htmlFor='inlineRadio1'
                                            >
                                                Open
                                            </label>
                                        </div>
                                        <div className='form-check form-check-inline'>
                                            <input
                                                className='form-check-input'
                                                type='radio'
                                                name='inlineRadioOptions'
                                                id='inlineRadio2'
                                                value='option2'
                                            />
                                            <label
                                                className='form-check-label'
                                                htmlFor='inlineRadio2'
                                            >
                                                Closed
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='footersave'>
                                    <div className='footer-1'>
                                        <div className='row mt-3 justify-content-end'>
                                            <div className='col-sm-3'>
                                                <button className='btn-save'>Save Changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className='cards'>
                                <h3 className='cards-header my-4'>Related information</h3>
                                <Table className='mt-3 table-2'>
                                    <tbody>
                                        <tr>
                                            <td>Orders</td>
                                            <th>0</th>
                                        </tr>
                                        <tr>
                                            <td>Customer</td>

                                            <th>4</th>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                    <div id='container'>
                        <div id='midivfixed'></div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default RequestDetails;