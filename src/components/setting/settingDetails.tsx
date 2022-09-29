import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Table from 'react-bootstrap/Table';
import { MultiSelect } from 'react-multi-select-component';
import { faFile, faXmark } from '@fortawesome/free-solid-svg-icons';


import diamond from '../../assets/diamond.png';
import Container from 'components/_common/Container';


const options1 = [
    { label: 'Blue ', value: 'Blue' },
    { label: 'Red ', value: 'Red' },
    { label: 'Green', value: 'Green' },
    { label: 'Yellow', value: 'Yellow' },
    { label: 'Black', value: 'Black' },
    { label: 'White ', value: 'White' },
];

function SettingDetails() {
    const router = useRouter()
    const [selected, setSelected] = useState([]);
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, []);

    return (
        <>
            <Container activeBar={"setting"} />
            {mount && (
                <div className='main-content'>
                    <div className='m-4'>
                        <Row>
                            <Col sm={router.query?.id ? 8 : 12}>
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
                                            <p className='label-text'>Gem type</p>
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
                                            <p className='label-text'>Images (up to 10)</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <label className='btn-upload' htmlFor='file-upload'>
                                                Choose File
                                            </label>
                                            <input
                                                type='file'
                                                id='file-upload'
                                                className='d-none'
                                            />
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
                                            <label className='btn-upload' htmlFor='file-upload'>
                                                Choose File
                                            </label>
                                            <input
                                                type='file'
                                                id='file-upload'
                                                className='d-none'
                                            />
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
                                            <p className='label-text'>Title</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type='text' className='form-control' />
                                        </div>
                                    </div>

                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Small description</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <textarea className='form-control' rows={5} cols={5}></textarea>
                                        </div>
                                    </div>

                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Description for checkout</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <textarea className='form-control' rows={5} cols={5}></textarea>
                                        </div>
                                    </div>


                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Description for checkout</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label className="form-check-label" >Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <label className="form-check-label" >No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className='cards-header mb-3 mt-5'>Filter info</h3>

                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Style for Women</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label className="form-check-label" >Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <label className="form-check-label" >No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Style for Men</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label className="form-check-label" >Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <label className="form-check-label" >No</label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Style</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <MultiSelect
                                                options={options1}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy='Select'
                                            />
                                        </div>
                                    </div>


                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Jewellery type</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <Form.Select
                                                className='h-40 '
                                                aria-label='Default select example'
                                            >
                                                <option>Select Shape</option>
                                                <option value='1'>1990</option>
                                                <option value='2'>1991</option>
                                                <option value='3'>1992</option>
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Metal type</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <Form.Select
                                                className='h-40 '
                                                aria-label='Default select example'
                                            >
                                                <option>Select Shape</option>
                                                <option value='1'>1990</option>
                                                <option value='2'>1991</option>
                                                <option value='3'>1992</option>
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Finish type</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <Form.Select
                                                className='h-40 '
                                                aria-label='Default select example'
                                            >
                                                <option>Select Shape</option>
                                                <option value='1'>1990</option>
                                                <option value='2'>1991</option>
                                                <option value='3'>1992</option>
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Price</p>
                                        </div>
                                        <div className='col-sm-8'>
                                            <input type='text' className='form-control' />
                                        </div>
                                    </div>



                                    <h3 className='cards-header mb-3 mt-5 mx-2'>Creators</h3>
                                    <div className='mx-2 border-box'>
                                        <Table>
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
                            {
                                router.query?.id && (
                                    <Col sm={4}>
                                        <div className='cards'>
                                            <h3 className='cards-header mb-3 mt-3'>
                                                Related information
                                            </h3>
                                            <Table className='mt-3 table-2'>
                                                <tbody>
                                                    <tr>
                                                        <td>DYJ Combination</td>
                                                        <th>0</th>
                                                    </tr>
                                                    <tr>
                                                        <td>Orders</td>
                                                        <th>4</th>
                                                    </tr>
                                                </tbody>
                                            </Table>

                                            <div className='mt-4'>
                                                <h3 className='cards-header mb-3'>Book keeping</h3>
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
                                                        + Add Creator
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

export default SettingDetails;