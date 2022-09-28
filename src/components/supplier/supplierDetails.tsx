import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Table from 'react-bootstrap/Table';
import {
    faFile,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';


import Container from 'components/_common/Container'


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const options1 = [
    { label: 'Blue ', value: 'Blue' },
    { label: 'Red ', value: 'Red' },
    { label: 'Green', value: 'Green' },
    { label: 'Yellow', value: 'Yellow' },
    { label: 'Black', value: 'Black' },
    { label: 'White ', value: 'White' },
];

function SupplierDetails() {
    const [selected, setSelected] = useState([]);
    const [firstColor, setFirstColor] = useState('');
    const [secondColor, setSecondColor] = useState('');
    const [value, setValue] = useState('');
    const [mount, setMount] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        setMount(true);
    }, []);

    return (
        <>
            <Container activeBar={"suppliers"} />
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

                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Name</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type='text' className='form-control' />
                                        </div>
                                    </div>

                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Country</p>
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
                                            <p className='label-text'>Address</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type='text' className='form-control' />
                                        </div>
                                    </div>
                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Phone number</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type='text' className='form-control' />
                                        </div>
                                    </div>
                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Email</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type='text' className='form-control' />
                                        </div>
                                    </div>
                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Notes</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <textarea className='form-control' rows={5} cols={5}></textarea>
                                        </div>
                                    </div>


                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className='cards'>
                                    <h3 className='cards-header mb-3 mt-3'>
                                        Related information
                                    </h3>
                                    <Table className='mt-3 table-2'>
                                        <tbody>
                                            <tr>
                                                <td>Gems</td>
                                                <th>0</th>
                                            </tr>
                                            <tr>
                                                <td>Jewellery</td>
                                                <th>4</th>
                                            </tr>
                                            <tr>
                                                <td>Precious things</td>
                                                <th>4</th>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Table className='mt-3 table-2'>
                                        <tbody>
                                            <tr>
                                                <td>DYJ</td>
                                                <th>0</th>
                                            </tr>
                                            <tr>
                                                <td>Packings</td>
                                                <th>4</th>
                                            </tr>
                                        </tbody>
                                    </Table>

                                    <div className='mt-4'>
                                        <h3 className='cards-header mb-3'>Book keeping</h3>

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

                                        {new Array(3).fill(undefined).map((e, i) => {
                                            return (
                                                <div className='col-sm-12 align-items-center mt-2'>
                                                    <div className='d-flex gap-1 align-items-center'>
                                                        <div className='box-file col-sm-11'>
                                                            <FontAwesomeIcon
                                                                icon={faFile}
                                                                className='icon-class'
                                                                title='View'
                                                            />
                                                            <span>Document.type</span>
                                                        </div>
                                                        <div className='border-cross'>
                                                            <FontAwesomeIcon
                                                                className='icon-class pinkicon'
                                                                icon={faXmark}
                                                                title='View'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className='mt-5' style={{ border: "2px solid rgba(215, 215, 215, 1)" }}>
                                        <div className='customer-side-box-head'>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-12  '>
                                                    <p className='m-0'>Costs</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-sm-12 row align-items-center mt-2 mb-2'>
                                            <div className='col-sm-12 d-flex gap-2 align-items-center'> Amount
                                                <input type='text' className='form-control' />
                                                <div className='border-cross'>
                                                    <FontAwesomeIcon
                                                        className='icon-class pinkicon'
                                                        icon={faXmark}
                                                        title='View'
                                                    />
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
                                                + Add New
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

export default SupplierDetails;