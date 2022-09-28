import { Col, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Table from 'react-bootstrap/Table';
import logo from '../../assets/u14497.png';
import ring from '../../assets/ring.png';
import Container from 'components/_common/Container'


import {
    faEye,
    faFile,
    faFileCircleXmark,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

function CustomerDetails() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Container activeBar={"customers"} />
            <div className='main-content'>
                <div className='m4'>
                    <Row>
                        <Col sm={8} >
                            <div className='cards'>
                                <div className='row align-items-center '>
                                    <h3 className='cards-header my-3'>Identification</h3>

                                    <div className='col-sm-6'>
                                        <p className='label-text'>ID</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>GEM-8399</p>
                                    </div>
                                </div>
                                <div className='row align-items-center my-3'>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Date of registration</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>2017-11-29</p>
                                    </div>
                                </div>
                                <div className='row align-items-center my-3'>
                                    <div className='col-sm-6'>
                                        <p className='label-text'>Status</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id='flexCheckDefault'
                                        />
                                        <label
                                            className='form-check-label ms-1'
                                            htmlFor='flexCheckDefault'
                                        >
                                            Active
                                        </label>
                                    </div>
                                </div>
                                <div className='row align-items-center my-3'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Language</p>
                                    </div>
                                    <div className='col-sm-8'>
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

                                <div className='row align-items-center my-3'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Title</p>
                                    </div>
                                    <div className='col-sm-8'>
                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter here'
                                        />
                                    </div>
                                </div>
                                <div className='row align-items-center my-3'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>First Name</p>
                                    </div>
                                    <div className='col-sm-8'>
                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter First Name'
                                        />
                                    </div>
                                </div>
                                <div className='row align-items-center my-3'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Last Name</p>
                                    </div>
                                    <div className='col-sm-8'>
                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter Last Name'
                                        />
                                    </div>
                                </div>
                                <div className='row align-items-center my-3'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Date of Birth</p>
                                    </div>
                                    <div className='col-sm-8 pe-0'>
                                        <div className='row'>
                                            <div className='col-sm-4 ps-0 mb-2'>
                                                {' '}
                                                <Form.Select
                                                    className='h-40 '
                                                    aria-label='Default select example'
                                                >
                                                    <option>1989</option>
                                                    <option value='1'>1990</option>
                                                    <option value='2'>1991</option>
                                                    <option value='3'>1992</option>
                                                </Form.Select>
                                            </div>
                                            <div className='col-sm-4 ps-0 mb-2'>
                                                {' '}
                                                <Form.Select
                                                    className='h-40 '
                                                    aria-label='Default select example'
                                                >
                                                    <option>12</option>
                                                    <option value='1'>11</option>
                                                    <option value='2'>10</option>
                                                    <option value='3'>09</option>
                                                </Form.Select>
                                            </div>
                                            <div className='col-sm-4 ps-0 '>
                                                {' '}
                                                <Form.Select
                                                    className='h-40 '
                                                    aria-label='Default select example'
                                                >
                                                    <option>01</option>
                                                    <option value='1'>02</option>
                                                    <option value='2'>03</option>
                                                    <option value='3'>04</option>
                                                </Form.Select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row align-items-center my-3'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Email</p>
                                    </div>
                                    <div className='col-sm-8'>
                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter Email here'
                                        />
                                    </div>
                                </div>
                                <div className='row align-items-center my-3'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Subscription</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value=''
                                            id='flexCheckDefault'
                                        />
                                        <label
                                            className='form-check-label ms-1'
                                            htmlFor='flexCheckDefault'
                                        >
                                            Enable
                                        </label>
                                    </div>
                                </div>
                                <div className='row align-items-center my-3'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Site Credit</p>
                                    </div>
                                    <div className='col-sm-8'>
                                        <Form.Control
                                            className='h-40'
                                            type='number'
                                            placeholder='Enter here'
                                        />
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <Row>
                                        <h3 className='cards-header my-3'>Shipping address</h3>

                                        <Col className=''>
                                            <div className='address-card'>
                                                <div className='d-flex justify-content-between'>
                                                    <h6>Default Address</h6>
                                                    <a href='' className='link-text'>
                                                        Edit
                                                    </a>
                                                </div>
                                                <div>
                                                    <p className='shippin-address'>Dainius Godelis </p>
                                                    <p className='shippin-address'>Harmoniestrase</p>
                                                    <p className='shippin-address'>Antwerpen, 2018</p>
                                                    <p className='shippin-address'>Belgien</p>
                                                    <p className='shippin-address'>Phone: +3706124222</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className=''>
                                            <div className='address-card'>
                                                <div className='d-flex justify-content-between'>
                                                    <h6>Default Address</h6>
                                                    <a href='' className='link-text'>
                                                        Edit
                                                    </a>
                                                </div>
                                                <div>
                                                    <p className='shippin-address'>Dainius Godelis </p>
                                                    <p className='shippin-address'>Harmoniestrase</p>
                                                    <p className='shippin-address'>Antwerpen, 2018</p>
                                                    <p className='shippin-address'>Belgien</p>
                                                    <p className='shippin-address'>Phone: +3706124222</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='mt-5'>
                                    <Row>
                                        <h3 className='cards-header my-3'>Payment methods</h3>

                                        <Col className=''>
                                            <div className='address-card'>
                                                <div className='d-flex justify-content-between'>
                                                    <h6>Other Payment method</h6>
                                                    <a href='' className='link-text'>
                                                        Edit
                                                    </a>
                                                </div>
                                                <div className='row align-items-center'>
                                                    <div className='col-sm-9 p-0'>
                                                        <p className='shippin-address'>
                                                            MasterCard/EuroCard
                                                        </p>
                                                        <p className='shippin-address'>Harmoniestrase</p>
                                                        <p className='shippin-address'>
                                                            **** **** **** 2426
                                                        </p>
                                                        <p className='shippin-address'>09/2012</p>
                                                        <p className='shippin-address'>
                                                            MR DAINIUS GODELIS
                                                        </p>
                                                    </div>
                                                    <div className='col-sm-3'>
                                                        <Image
                                                            src={logo}
                                                            alt='loginImage'
                                                            width='40px'
                                                            height='40px'
                                                        />
                                                    </div>
                                                </div>
                                                <hr />
                                                <div>
                                                    <h6>Billing Address</h6>

                                                    <p className='shippin-address'>Dainius Godelis </p>
                                                    <p className='shippin-address'>Harmoniestrase</p>
                                                    <p className='shippin-address'>Antwerpen, 2018</p>
                                                    <p className='shippin-address'>Belgien</p>
                                                    <p className='shippin-address'>Phone: +3706124222</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className=''>
                                            <div className='address-card'>
                                                <div className='d-flex justify-content-between'>
                                                    <h6>Billing Address</h6>
                                                    <a href='' className='link-text'>
                                                        Edit
                                                    </a>
                                                </div>
                                                <div className='row align-items-center'>
                                                    <div className='col-sm-9 p-0'>
                                                        <p className='shippin-address'>
                                                            MasterCard/EuroCard
                                                        </p>
                                                        <p className='shippin-address'>Harmoniestrase</p>
                                                        <p className='shippin-address'>
                                                            **** **** **** 2426
                                                        </p>
                                                        <p className='shippin-address'>09/2012</p>
                                                        <p className='shippin-address'>
                                                            MR DAINIUS GODELIS
                                                        </p>
                                                    </div>
                                                    <div className='col-sm-3'>
                                                        <Image
                                                            src={logo}
                                                            alt='loginImage'
                                                            width='40px'
                                                            height='40px'
                                                        />
                                                    </div>
                                                </div>
                                                <hr />
                                                <div>
                                                    <h6>Billing Address</h6>

                                                    <p className='shippin-address'>Dainius Godelis </p>
                                                    <p className='shippin-address'>Harmoniestrase</p>
                                                    <p className='shippin-address'>Antwerpen, 2018</p>
                                                    <p className='shippin-address'>Belgien</p>
                                                    <p className='shippin-address'>Phone: +3706124222</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
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
                                <h3 className='cards-header my-3'>Related information</h3>
                                <Table className='mt-3 table-2 ' responsive>
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
                                    <h3 className='cards-header my-3'>Book keeping</h3>
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
                                <div className='mt-2 mb-2'>
                                    <h3 className='cards-header my-3'>Favorite items</h3>
                                    <div className='customer-side-box-head '>
                                        <p className='m-0 p-1 ps-3'>Gems</p>
                                    </div>
                                    <Table className='mt-3 table-2 ' responsive>
                                        <tbody>
                                            <tr>
                                                <th className='col-sm-4'>IMAGE</th>
                                                <th className='col-sm-4'>ID</th>
                                                <th className='col-sm-4'>TITLE</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='ring-div'>
                                                        <Image
                                                            src={ring}
                                                            alt='loginImage'
                                                            width='25px'
                                                            height='45px'
                                                        />
                                                    </div>
                                                </td>
                                                <td>12412 </td>
                                                <td>Itemname</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='ring-div'>
                                                        <Image
                                                            src={ring}
                                                            alt='loginImage'
                                                            width='25px'
                                                            height='45px'
                                                        />
                                                    </div>
                                                </td>
                                                <td>12412 </td>
                                                <td>Itemname</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='ring-div'>
                                                        <Image
                                                            src={ring}
                                                            alt='loginImage'
                                                            width='25px'
                                                            height='45px'
                                                        />
                                                    </div>
                                                </td>
                                                <td>12412 </td>
                                                <td>Itemname</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className='mt-2 mb-2'>
                                    <div className='customer-side-box-head '>
                                        <p className='m-0 p-1 ps-3'>Jewellery</p>
                                    </div>
                                    <Table className='mt-3 table-2' responsive>
                                        <tbody>
                                            <tr>
                                                <th className='col-sm-4'>IMAGE</th>
                                                <th className='col-sm-4'>ID</th>
                                                <th className='col-sm-4'>TITLE</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='ring-div'>
                                                        <Image
                                                            src={ring}
                                                            alt='loginImage'
                                                            width='25px'
                                                            height='45px'
                                                        />
                                                    </div>
                                                </td>
                                                <td>12412 </td>
                                                <td>Itemname</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='ring-div'>
                                                        <Image
                                                            src={ring}
                                                            alt='loginImage'
                                                            width='25px'
                                                            height='45px'
                                                        />
                                                    </div>
                                                </td>
                                                <td>12412 </td>
                                                <td>Itemname</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='ring-div'>
                                                        <Image
                                                            src={ring}
                                                            alt='loginImage'
                                                            width='25px'
                                                            height='45px'
                                                        />
                                                    </div>
                                                </td>
                                                <td>12412 </td>
                                                <td>Itemname</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className='mt-2 mb-2'>
                                    <div className='customer-side-box-head '>
                                        <p className='m-0 p-1 ps-3'>Precious things</p>
                                    </div>
                                    <Table className='mt-3 table-2' responsive>
                                        <tbody>
                                            <tr>
                                                <th className='col-sm-4'>IMAGE</th>
                                                <th className='col-sm-4'>ID</th>
                                                <th className='col-sm-4'>TITLE</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='ring-div'>
                                                        <Image
                                                            src={ring}
                                                            alt='loginImage'
                                                            width='25px'
                                                            height='45px'
                                                        />
                                                    </div>
                                                </td>
                                                <td>12412 </td>
                                                <td>Itemname</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='ring-div'>
                                                        <Image
                                                            src={ring}
                                                            alt='loginImage'
                                                            width='25px'
                                                            height='45px'
                                                        />
                                                    </div>
                                                </td>
                                                <td>12412 </td>
                                                <td>Itemname</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className='ring-div'>
                                                        <Image
                                                            src={ring}
                                                            alt='loginImage'
                                                            width='25px'
                                                            height='45px'
                                                        />
                                                    </div>
                                                </td>
                                                <td>12412 </td>
                                                <td>Itemname</td>
                                            </tr>
                                        </tbody>
                                    </Table>
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

export default CustomerDetails;
