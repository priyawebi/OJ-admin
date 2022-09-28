import { Col, Form, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Table from 'react-bootstrap/Table';
import {
    faFile,
    faVideo,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

import credit from '../../assets/photo-credit.png';
import ring from '../../assets/ring.png';
import diamond from '../../assets/diamond.png';
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

function PreciousThingDetails() {
    const router = useRouter()
    const [firstColor, setFirstColor] = useState('');
    const [mount, setMount] = useState(false);


    useEffect(() => {
        setMount(true);
    }, []);

    return (
        <>
            <Container activeBar={"preciousThing"} />
            {mount && (
                <div className='main-content'>
                    <div className='m4'>
                        <Row>
                            <Col sm={router.query?.id ? 8 : 12}>
                                <div className='cards'>
                                    <div className='row align-items-center '>
                                        <h3 className='cards-header mb-3 mt-3'>Identification</h3>

                                        <div className='col-sm-3'>
                                            <p className='label-text'>ID</p>
                                        </div>
                                        <div className='col-sm-9'>
                                            <p className='label-text'>GEM-8399</p>
                                        </div>
                                    </div>
                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Date of registration</p>
                                        </div>
                                        <div className='col-sm-9'>
                                            <p className='label-text'>2017-11-29</p>
                                        </div>
                                    </div>

                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Status</p>
                                        </div>
                                        <div className='col-sm-9'>
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
                                            <p className='label-text'>Available QTY</p>
                                        </div>
                                        <div className='col-sm-9'>
                                            <Form.Control
                                                className='h-40'
                                                type='text'
                                                placeholder='2'
                                            />
                                        </div>
                                    </div>
                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>PT type</p>
                                        </div>
                                        <div className='col-sm-9'>
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
                                            <p className='label-text'>Images (up to 10)</p>
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
                                            <p className='label-text'>Cinemagraph</p>
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
                                            <p className='label-text'>360 image</p>
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
                                            <p className='label-text'>Video</p>
                                        </div>
                                        <div className='row align-items-center mt-3'>
                                            <div className='col-10 px-0'>
                                                <div className='box-file'>
                                                    <FontAwesomeIcon
                                                        icon={faVideo}
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
                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Background</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <div>
                                                <div className='position-relative'>
                                                    <input
                                                        type='color'
                                                        className='main-color-picker'
                                                        onChange={(e) => setFirstColor(e.target.value)}
                                                    />
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        value={firstColor}
                                                        disabled
                                                    />
                                                </div>
                                            </div>
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
                                                placeholder='Fancy Intense Pink'
                                            />
                                        </div>
                                    </div>
                                    <div className='row align-items-center my-3 px-0'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Subtitle</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <Form.Control
                                                className='h-40'
                                                type='text'
                                                placeholder='Enter here'
                                            />
                                        </div>
                                    </div>
                                    <div className='row align-items-start my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Dimensions</p>
                                        </div>
                                        <div className='col-sm-8 px-0'>
                                            <div className='row '>
                                                <div className='col'>
                                                    <p className='label-text'>Lenght (cm)</p>

                                                    <Form.Control
                                                        className='h-40'
                                                        type='text'
                                                        placeholder='Enter Email here'
                                                    />
                                                </div>
                                                <div className='col'>
                                                    <p className='label-text'>Width (cm)</p>

                                                    <Form.Control
                                                        className='h-40'
                                                        type='text'
                                                        placeholder='Enter Email here'
                                                    />
                                                </div>
                                                <div className='col'>
                                                    <p className='label-text'>Heigth (cm)</p>

                                                    <Form.Control
                                                        className='h-40'
                                                        type='text'
                                                        placeholder='Enter Email here'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row  mt-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Little story</p>
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
                                        <h3 className='cards-header mb-3 mt-5'>Filter info</h3>

                                        <div className='col-sm-3'>
                                            <p className='label-text'>Price</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <Form.Control
                                                className='h-40'
                                                type='number'
                                                placeholder='Enter here'
                                            />
                                        </div>
                                    </div>

                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Discount, %</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <Form.Control
                                                className='h-40'
                                                type='number'
                                                placeholder='Enter here'
                                            />
                                        </div>
                                    </div>

                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Final price</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <Form.Control
                                                className='h-40'
                                                type='number'
                                                placeholder='Enter here'
                                            />
                                        </div>
                                    </div>
                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'> Period</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <Form.Select
                                                className='h-40 '
                                                aria-label='Default select example'
                                            >
                                                <option>Select Family</option>
                                                <option value='1'>1990</option>
                                                <option value='2'>1991</option>
                                                <option value='3'>1992</option>
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Country of origin</p>
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
                                    </div>
                                    <h3 className='cards-header mb-3 mt-5 mx-2'>Creators</h3>
                                    <div className='mx-2 border-box'>
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th className='col-sm-6'>NAME</th>
                                                    <th className='col-sm-4'>TYPE</th>
                                                    <th className='col-sm-2'></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Form.Select
                                                            className='h-40 '
                                                            aria-label='Default select example'
                                                        >
                                                            <option>Select Creator</option>
                                                            <option value='1'>Creator 1</option>
                                                            <option value='2'>Creator 2</option>
                                                            <option value='3'>Creator 3</option>
                                                        </Form.Select>
                                                    </td>
                                                    <td>Designer</td>

                                                    <td>
                                                        <a href='' className='link-remove'>
                                                            Remove
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <div className='border-top p-3 text-center'>
                                            <a href='' className='add-element'>
                                                + Add Creator
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='row align-items-center my-3'>
                                            <h3 className='cards-header mb-3 mt-5'>Certificate</h3>
                                            <div className='col-sm-3'>
                                                <p className='label-text'>Certificate</p>
                                            </div>
                                            <div className='col-sm-8'>
                                                <div className='form-check form-check-inline'>
                                                    <input
                                                        className='form-check-input'
                                                        type='radio'
                                                        name='inlineRadioOptions'
                                                        id='inlineRadio5'
                                                        value='option5'
                                                    />
                                                    <label
                                                        className='form-check-label'
                                                        htmlFor='inlineRadio5'
                                                    >
                                                        Yes
                                                    </label>
                                                </div>
                                                <div className='form-check form-check-inline'>
                                                    <input
                                                        className='form-check-input'
                                                        type='radio'
                                                        name='inlineRadioOptions'
                                                        id='inlineRadio6'
                                                        value='option6'
                                                    />
                                                    <label
                                                        className='form-check-label'
                                                        htmlFor='inlineRadio6'
                                                    >
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='row align-items-center my-3'>
                                            <div className='col-sm-3'>
                                                <p className='label-text'> Laboratory</p>
                                            </div>
                                            <div className='col-sm-8'>
                                                <Form.Select
                                                    className='h-40 '
                                                    aria-label='Default select example'
                                                >
                                                    <option>Select Laboratory</option>
                                                    <option value='1'>Certificate 0</option>
                                                    <option value='2'>Certificate 1</option>
                                                    <option value='3'>Certificate 2</option>
                                                </Form.Select>
                                            </div>
                                        </div>

                                        <div className='row align-items-center my-3'>
                                            <div className='col-sm-3'>
                                                <p className='label-text'>Certificate number</p>
                                            </div>
                                            <div className='col-sm-8'>
                                                <Form.Control
                                                    className='h-40'
                                                    type='number'
                                                    placeholder='Enter here'
                                                />
                                            </div>
                                        </div>

                                        <div className='row align-items-center my-3'>
                                            <div className='col-sm-3'>
                                                <p className='label-text'>Image</p>
                                            </div>
                                            <div className='col-sm-3'>
                                                <div className='bg-pink'>
                                                    <Image
                                                        src={diamond}
                                                        alt='loginImage'
                                                        width='52px'
                                                        height='57px'
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-sm-3'>
                                                <input type='file' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-5 mx-2'>
                                        <h3 className='cards-header mb-3 mt-5'>DYJ</h3>
                                        <input type='text' className='form-control' />

                                        {
                                            new Array(3).fill(undefined).map((e, i) => {
                                                return (
                                                    <>
                                                        <div className='col-sm-12 d-flex mt-2 gap-2 mt-1'>
                                                            <div className='col-11 px-0 mt-2'>
                                                                <div className='box-file'>
                                                                    <Image
                                                                        src={ring}
                                                                        alt='loginImage'
                                                                        width='40px'
                                                                        height='40px'
                                                                    />
                                                                    <p>DYJ Name <br></br> DYJ-8397</p>
                                                                </div>
                                                            </div>
                                                            <div className='col-1 px-0 justify-content-end align-self-center'>
                                                                <div className='border-cross justify-content-center align-self-center mt-2' style={{ height: "25px" }} >
                                                                    <FontAwesomeIcon className='icon-class pinkicon' icon={faXmark} title='View' />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </>
                                                )
                                            })
                                        }

                                    </div>



                                    <div className='mt-5 mx-2'>
                                        <h3 className='cards-header mb-3 mt-5'>Details</h3>
                                        <div className='customer-side-box-head'>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-10'>
                                                    <p className='m-0'>Upload Documents</p>
                                                </div>
                                                <div className='col-sm-2'>
                                                    <label className='btn-upload' htmlFor='file-upload'>Choose File</label>
                                                    <input type='file' id='file-upload' className='d-none' />
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            new Array(3).fill(undefined).map((e, i) => {
                                                return (
                                                    <>
                                                        <div className='col-sm-12 d-flex mt-2 gap-2 mt-4'>
                                                            <img src={`https://picsum.photos/` + (200 + i)} height={"100px"} />
                                                            <textarea cols={100}></textarea>
                                                            <div className='border-cross justify-content-center align-self-center' style={{ height: "25px" }} >
                                                                <FontAwesomeIcon className='icon-class pinkicon' icon={faXmark} title='View' />
                                                            </div>
                                                        </div>
                                                        <div className='col-sm-12 d-flex mt-2 gap-2'>
                                                            <div className='col-sm-2 px-0'>
                                                                <p className='label-text'>Photo credit</p>
                                                            </div>
                                                            <div className='col-sm-10'>
                                                                <input type='text' className='form-control' />
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
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
                            {
                                router.query?.id && (
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
                                                <h3 className='cards-header mb-3 mt-5'>Select Supplier</h3>
                                                <Form.Select
                                                    className='h-40 my-3'
                                                    aria-label='Default select example'
                                                >
                                                    <option>Select</option>
                                                    <option value='1'>One</option>
                                                    <option value='2'>Two</option>
                                                    <option value='3'>Three</option>
                                                </Form.Select>
                                                <div className='customer-side-box-head'>
                                                    <div className='row align-items-center'>
                                                        <div className='row align-items-center'>
                                                            <div className='col-7'>
                                                                <p className='m-0'>Upload Documents</p>
                                                            </div>
                                                            <div className='col-5 text-end'>
                                                                <label className='btn-upload' htmlFor='file-upload'>Choose File</label>
                                                                <input type='file' id='file-upload' className='d-none' />
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
                                                <div className='row align-items-center box-file-1 '>
                                                    <div className='col-10 px-0'>
                                                        <p className='m-0'>Date: 28/02/2018 </p>
                                                        <p className='m-0'> Amount: 245</p>
                                                        <p className='m-0'>Type: OJ stock</p>
                                                    </div>
                                                    <div className='col-2 text-end'>
                                                        <div className='border-cross'>
                                                            <FontAwesomeIcon
                                                                className='icon-class pinkicon'
                                                                icon={faXmark}
                                                                title='View'
                                                            />
                                                        </div>
                                                    </div>
                                                    <p className='m-0 p-0'>
                                                        Description: Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing elit. Aenean euismod bibendum laoreet. Proin
                                                        gravida dolor sit amet lacus
                                                    </p>
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
                                )
                            }
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

export default PreciousThingDetails;