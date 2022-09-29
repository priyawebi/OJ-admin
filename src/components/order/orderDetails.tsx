import { Col, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Table from 'react-bootstrap/Table';

import gems from '../../assets/gems.png';
import Header from 'components/_common/Header';
import Sidebar from 'components/_common/Sidebar';

import { faFile, faXmark } from '@fortawesome/free-solid-svg-icons';
import Container from 'components/_common/Container'
function OrderDetails() {
    return (
        <>
            <Container activeBar={"orders"} />
            <div className='main-content'>
                <div className='m4'>
                    <Row>
                        <Col sm={8}>
                            <div className='cards'>
                                <div className='row align-items-center '>
                                    <h3 className='cards-header my-4'>Order details</h3>

                                    <div className='col-sm-6'>
                                        <p className='label-text'>Order ID</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>ORD-123456</p>
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Date of registration</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>2017-11-29</p>
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Status</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <Form.Select
                                            className='h-40'
                                            aria-label='Default select example'
                                        >
                                            <option>English</option>
                                            <option value='1'>One</option>
                                            <option value='2'>Two</option>
                                            <option value='3'>Three</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className='row align-items-center '>
                                    <h3 className='cards-header my-4'>Finance</h3>

                                    <div className='col-sm-6'>
                                        <p className='label-text'>Total price</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>1244,34 Eur</p>
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Used site credit</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>85 Eur</p>
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Discount</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>100 Eur (ID 12341)</p>
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Costs</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>
                                            58,58 Eur
                                            <a href='' className='view-all-tag'>
                                                View All
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className='row align-items-center '>
                                    <h3 className='cards-header my-4'>Shipping information</h3>

                                    <div className='col-sm-6'>
                                        <p className='label-text'>Customer</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Mr. Dainius Godelis</p>
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Shipping address</p>
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-6 my-2'>
                                        <p className='label-text'>Address 01</p>

                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter here'
                                        />
                                    </div>
                                    <div className='col-sm-6 my-2'>
                                        <p className='label-text'>Address 02 / Floor / Apt #</p>

                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter here'
                                        />
                                    </div>
                                    <div className='col-sm-6 my-2'>
                                        <p className='label-text'>City</p>

                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter here'
                                        />
                                    </div>
                                    <div className='col-sm-6 pe-0'>
                                        <div className='row'>
                                            <div className='col-sm-6 ps-0'>
                                                <p className='label-text'>State/Region</p>

                                                <Form.Control
                                                    className='h-40'
                                                    type='text'
                                                    placeholder='Enter here'
                                                />
                                            </div>
                                            <div className='col-sm-6 ps-0'>
                                                <p className='label-text'>Zil/Postal</p>

                                                <Form.Control
                                                    className='h-40'
                                                    type='text'
                                                    placeholder='Enter here'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6 my-2'>
                                        <p className='label-text'>Country</p>

                                        <Form.Control
                                            className='h-40'
                                            type='number'
                                            placeholder='Enter here'
                                        />
                                    </div>
                                    <div className='col-sm-6 my-2'>
                                        <p className='label-text'>Phone Number</p>

                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter Email here'
                                        />
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h3 className='cards-header my-4'>Product List</h3>

                                    <Table className='mt-3 table-3' responsive>
                                        <thead>
                                            <tr>
                                                <th className='col-sm-1'> </th>
                                                <th className='col-sm-1'>ITEM ID</th>
                                                <th className='col-sm-1'>PRODUCT</th>
                                                <th className='col-sm-1'>PRICE</th>
                                                <th className='col-sm-3'>TRACKING NUMBER</th>
                                                <th className='col-sm-3'>STATUS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className='ring-div'>
                                                        <Image
                                                            src={gems}
                                                            alt='loginImage'
                                                            width='45px'
                                                            height='45px'
                                                        />
                                                    </div>
                                                </td>
                                                <td>123123 </td>
                                                <td>DYJ</td>
                                                <td>10,00 €</td>
                                                <td>
                                                    <Form.Control
                                                        className='h-40'
                                                        type='text'
                                                        placeholder='Enter here'
                                                    />
                                                </td>
                                                <td>
                                                    <Form.Select
                                                        className='h-40'
                                                        aria-label='Default select example'
                                                    >
                                                        <option>English</option>
                                                        <option value='1'>One</option>
                                                        <option value='2'>Two</option>
                                                        <option value='3'>Three</option>
                                                    </Form.Select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='ring-div'>
                                                        <Image
                                                            src={gems}
                                                            alt='loginImage'
                                                            width='45px'
                                                            height='45px'
                                                        />
                                                    </div>
                                                </td>
                                                <td>123123 </td>
                                                <td>DYJ</td>
                                                <td>10,00 €</td>
                                                <td>
                                                    <Form.Control
                                                        className='h-40'
                                                        type='text'
                                                        placeholder='Enter here'
                                                    />
                                                </td>
                                                <td>
                                                    <Form.Select
                                                        className='h-40'
                                                        aria-label='Default select example'
                                                    >
                                                        <option>English</option>
                                                        <option value='1'>One</option>
                                                        <option value='2'>Two</option>
                                                        <option value='3'>Three</option>
                                                    </Form.Select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='ring-div'>
                                                        <Image
                                                            src={gems}
                                                            alt='loginImage'
                                                            width='45px'
                                                            height='45px'
                                                        />
                                                    </div>
                                                </td>
                                                <td>123123 </td>
                                                <td>DYJ</td>
                                                <td>10,00 €</td>
                                                <td>
                                                    <Form.Control
                                                        className='h-40'
                                                        type='text'
                                                        placeholder='Enter here'
                                                    />
                                                </td>
                                                <td>
                                                    <Form.Select
                                                        className='h-40'
                                                        aria-label='Default select example'
                                                    >
                                                        <option>English</option>
                                                        <option value='1'>One</option>
                                                        <option value='2'>Two</option>
                                                        <option value='3'>Three</option>
                                                    </Form.Select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='ring-div'>
                                                        <Image
                                                            src={gems}
                                                            alt='loginImage'
                                                            width='45px'
                                                            height='45px'
                                                        />
                                                    </div>
                                                </td>
                                                <td>123123 </td>
                                                <td>DYJ</td>
                                                <td>10,00 €</td>
                                                <td>
                                                    <Form.Control
                                                        className='h-40'
                                                        type='text'
                                                        placeholder='Enter here'
                                                    />
                                                </td>
                                                <td>
                                                    <Form.Select
                                                        className='h-40'
                                                        aria-label='Default select example'
                                                    >
                                                        <option>English</option>
                                                        <option value='1'>One</option>
                                                        <option value='2'>Two</option>
                                                        <option value='3'>Three</option>
                                                    </Form.Select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className='col-sm-1'> </th>
                                                <th className='col-sm-1'></th>
                                                <th className='col-sm-1'>5 products</th>
                                                <th className='col-sm-1'>50,00 €</th>
                                                <th className='col-sm-3'>-</th>
                                                <th className='col-sm-3'>-</th>
                                            </tr>
                                        </tbody>
                                    </Table>
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
                                                <button className='btn-delete'>Delete account</button>
                                            </div>
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
                                <h3 className='cards-header'>Related information</h3>
                                <Table className='mt-3 table-2' responsive>
                                    <tbody>
                                        <tr>
                                            <td>Orders</td>
                                            <th>0</th>
                                        </tr>
                                        <tr>
                                            <td>Transaction</td>

                                            <th>4</th>
                                        </tr>
                                        <tr>
                                            <td>Request</td>

                                            <th>4</th>
                                        </tr>
                                        <tr>
                                            <td>Booking</td>

                                            <th>4</th>
                                        </tr>
                                        <tr>
                                            <td>Gift Cards</td>

                                            <th>4</th>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className='mt-5'>
                                    <h3 className='cards-header my-4'>Book keeping</h3>
                                    <div className='customer-side-box-head'>
                                        <div className='row align-items-center'>
                                            <div className='col-sm-7'>
                                                <p className='m-0'>Upload Documents</p>
                                            </div>
                                            <div className='col-sm-5'>
                                                <label className='btn-upload' htmlFor='file-upload'>
                                                    Choose File
                                                </label>
                                                <input
                                                    type='file'
                                                    id='file-upload'
                                                    className='d-none'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row align-items-center mt-3'>
                                        <div className='col-10 px-0'>
                                            <div className='box-file'>
                                                <FontAwesomeIcon
                                                    icon={faFile}
                                                    className='icon-class'
                                                    title='View'
                                                />
                                                <span>Document.type</span>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            <div className='border-cross'>
                                                <FontAwesomeIcon
                                                    className='icon-class pinkicon'
                                                    icon={faXmark}
                                                    title='View'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row align-items-center mt-3'>
                                        <div className='col-10 px-0'>
                                            <div className='box-file'>
                                                <FontAwesomeIcon
                                                    icon={faFile}
                                                    className='icon-class'
                                                    title='View'
                                                />
                                                <span>Document.type</span>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            <div className='border-cross'>
                                                <FontAwesomeIcon
                                                    className='icon-class pinkicon'
                                                    icon={faXmark}
                                                    title='View'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row align-items-center mt-3'>
                                        <div className='col-10 px-0'>
                                            <div className='box-file'>
                                                <FontAwesomeIcon
                                                    icon={faFile}
                                                    className='icon-class'
                                                    title='View'
                                                />
                                                <span>Document.type</span>
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                            <div className='border-cross'>
                                                <FontAwesomeIcon
                                                    className='icon-class pinkicon'
                                                    icon={faXmark}
                                                    title='View'
                                                />
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

export default OrderDetails;
