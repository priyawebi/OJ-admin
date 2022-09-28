import { Col, Form, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Table from 'react-bootstrap/Table';
import { faFile, faXmark } from '@fortawesome/free-solid-svg-icons';

import diamond from '../../assets/diamond.png';
import Container from 'components/_common/Container'

function Creatorsview() {
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, []);

    return (
        <>
            <Container activeBar={"creator"} />
            {mount && (
                <div className='main-content'>
                    <div className='m4'>
                        <Row>
                            <Col sm={8}>
                                <div className='cards'>
                                    <div className='row align-items-center '>
                                        <h3 className='cards-header mb-3 mt-3'>Identification</h3>

                                        <div className='col-sm-3'>
                                            <p className='label-text'>ID</p>
                                        </div>
                                        <div className='col-sm-4'>
                                            <p className='label-text'>GEM-8399</p>
                                        </div>
                                    </div>
                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Date of registration</p>
                                        </div>
                                        <div className='col-sm-4'>
                                            <p className='label-text'>2017-11-29</p>
                                        </div>
                                    </div>
                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Status</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <Form.Select
                                                className='h-40'
                                                aria-label='Default select example'
                                            >
                                                <option>Select</option>
                                                <option value='1'>One</option>
                                                <option value='2'>Two</option>
                                                <option value='3'>Three</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Type</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <Form.Select
                                                className='h-40'
                                                aria-label='Default select example'
                                            >
                                                <option>Select</option>
                                                <option value='1'>One</option>
                                                <option value='2'>Two</option>
                                                <option value='3'>Three</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <h3 className='cards-header mb-3 mt-5'>Presentation</h3>

                                        <div className='col-sm-3'>
                                            <p className='label-text'>Image small</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <div>
                                                <label className='btn-upload' htmlFor='file-upload'>Choose File</label>
                                                <input type='file' id='file-upload' className='d-none' />
                                            </div>
                                            <div className='row mt-3'>
                                                <div className='col-sm-4 image-sec'>
                                                    <div className='bg-pink'>
                                                        <Image
                                                            src={diamond}
                                                            alt='loginImage'
                                                            width='52px'
                                                            height='57px'
                                                        />
                                                    </div>
                                                    <div className='border-cross-1'>
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
                                    <div className='row mb-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Image big</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <div>
                                                <label className='btn-upload' htmlFor='file-upload'>Choose File</label>
                                                <input type='file' id='file-upload' className='d-none' />
                                            </div>
                                            <div className='row mt-3'>
                                                <div className='col-sm-4 image-sec'>
                                                    <div className='bg-pink'>
                                                        <Image
                                                            src={diamond}
                                                            alt='loginImage'
                                                            width='52px'
                                                            height='57px'
                                                        />
                                                    </div>
                                                    <div className='border-cross-1'>
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
                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Name</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <Form.Control
                                                className='h-40'
                                                type='text'
                                                placeholder='Fancy Intense Pink'
                                            />
                                        </div>
                                    </div>
                                    <div className='row  mt-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Description</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <textarea
                                                name=''
                                                id=''
                                                className='custom-textareas'
                                                rows={7}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Country</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <Form.Select
                                                className='h-40 '
                                                aria-label='Default select example'
                                            >
                                                <option>Select Country</option>
                                                <option value='1'>1990</option>
                                                <option value='2'>1991</option>
                                                <option value='3'>1992</option>
                                            </Form.Select>
                                        </div>
                                    </div>{' '}
                                    <div className='row  mt-3'>
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
                                    <h3 className='cards-header mb-3 mt-3'>
                                        Related information
                                    </h3>
                                    <Table className='mt-3 table-2' responsive>
                                        <tbody>
                                            <tr>
                                                <td>Orders</td>
                                                <th>0</th>
                                            </tr>
                                            <tr>
                                                <td>Customers</td>
                                                <th>4</th>
                                            </tr>
                                            <tr>
                                                <td>Related DYJ</td>

                                                <th>4</th>
                                            </tr>
                                        </tbody>
                                    </Table>

                                    <div className='mt-5'>
                                        <h3 className='cards-header mb-3 mt-5'>Book keeping</h3>

                                        <div className='customer-side-box-head'>
                                            <div className='row align-items-center'>
                                                <div className='col-7'>
                                                    <p className='m-0'>Upload Documents</p>
                                                </div>
                                                <div className='col-5'>
                                                    <label className='btn-upload' htmlFor='file-upload'>Choose File</label>
                                                    <input type='file' id='file-upload' className='d-none' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-sm-12'>
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
                                        <div className='col-sm-12'>
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
                                        <div className='col-sm-12'>
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

                                    <div className='mt-5'>
                                        <div className='customer-side-box-head'>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-12  '>
                                                    <p className='m-0'>Costs</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row align-items-center  box-file-1 '>
                                            <div className='col-sm-3'>
                                                <p className='label-text'>Amount</p>
                                            </div>
                                            <div className='col-sm-9'>
                                                <Form.Control
                                                    className='h-40'
                                                    type='text'
                                                    placeholder='Enter here'
                                                />
                                            </div>
                                            <div className='mt-3'>
                                                <div className='form-check form-check-inline'>
                                                    <input
                                                        className='form-check-input'
                                                        type='checkbox'
                                                        id='inlineCheckbox1'
                                                        value='option1'
                                                    />
                                                    <label
                                                        className='form-check-label'
                                                        htmlFor='inlineCheckbox1'
                                                    >
                                                        OJ stock
                                                    </label>
                                                </div>
                                                <div className='form-check form-check-inline'>
                                                    <input
                                                        className='form-check-input'
                                                        type='checkbox'
                                                        id='inlineCheckbox2'
                                                        value='option2'
                                                    />
                                                    <label
                                                        className='form-check-label'
                                                        htmlFor='inlineCheckbox2'
                                                    >
                                                        Commision
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row align-items-center  px-0 '>
                                            <textarea
                                                name=''
                                                id=''
                                                rows={6}
                                                className='  textarea-control'
                                            ></textarea>
                                        </div>
                                        <div className='row align-items-center  box-file-1 '>
                                            <div className='col-sm-3'>
                                                <p className='label-text'>Date</p>
                                            </div>
                                            <div className='col-sm-9 px-0'>
                                                <div className='row gap-1'>
                                                    <div className='col-sm-3 px-0'>
                                                        <input type='text' className='form-control mb-f2' placeholder='DD' />
                                                    </div>
                                                    <div className='col-sm-3 px-0'>
                                                        <input type='text' className='form-control mb-f2' placeholder='MM' />
                                                    </div>
                                                    <div className='col-sm-3 px-0'>
                                                        <input type='text' className='form-control' placeholder='YY' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border p-2 text-center'>
                                            <a href='' className='add-element'>
                                                Save
                                            </a>
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
            )}
        </>
    );
}

export default Creatorsview;