import { Col, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import Container from 'components/_common/Container'

function GiftCardDetails() {
    return (
        <>
            <Container activeBar={"giftcards"} />
            <div className='main-content'>
                <div className='m-4'>
                    <Row>
                        <Col xs={12}>
                            <div className='cards'>
                                <div className='row align-items-center '>
                                    <h3 className='cards-header my-4'>Gifts Cards</h3>

                                    <div className='col-sm-3'>
                                        <p className='label-text'>ID</p>
                                    </div>
                                    <div className='col-sm-9'>
                                        <p className='label-text'>GEM-8399</p>
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Activation date</p>
                                    </div>
                                    <div className='col-sm-9'>
                                        <p className='label-text'>2017-11-29</p>
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Date when bought</p>
                                    </div>
                                    <div className='col-sm-9'>
                                        <p className='label-text'>2017-11-29</p>
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Status</p>
                                    </div>
                                    <div className='col-sm-9'>
                                        <Form.Select
                                            className='h-40'
                                            aria-label='Default select example'
                                        >
                                            <option>Not Used</option>
                                            <option value='1'>One</option>
                                            <option value='2'>Two</option>
                                            <option value='3'>Three</option>
                                        </Form.Select>
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Title</p>
                                    </div>
                                    <div className='col-sm-9'>
                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter here'
                                        />
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Client</p>
                                    </div>
                                    <div className='col-sm-9'>
                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter here'
                                        />
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Recipient name</p>
                                    </div>
                                    <div className='col-sm-9'>
                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter here'
                                        />
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Recipient e-mail</p>
                                    </div>
                                    <div className='col-sm-9'>
                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter here'
                                        />
                                    </div>
                                </div>

                                <div className='row  mt-5'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Notes</p>
                                    </div>
                                    <div className='col-sm-9'>
                                        <textarea
                                            name=''
                                            id=''
                                            className='custom-textareas'
                                            rows={7}
                                        ></textarea>
                                    </div>
                                </div>

                                <div className='footersave'>
                                    <div className='footer-1'>
                                        <div className='row mt-3 justify-content-end'>
                                            <div className='col-sm-3'>
                                                <button className='btn-save'>Save </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default GiftCardDetails;
