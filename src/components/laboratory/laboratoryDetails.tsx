import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/router'
import Table from 'react-bootstrap/Table';

import Container from 'components/_common/Container'


function LaboratoryDetails() {
    const router = useRouter()
    const [image, setImage] = useState("");

    const getImagePath = (f: { target: { files: Blob[]; }; }) => {
        var reader = new FileReader();
        reader.onload = function (e: any) {
            setImage(e?.target?.result)
        };
        reader.readAsDataURL(f.target.files[0]);
    }

    return (
        <>
            <Container activeBar={"laboratory"} />
            <div className='main-content'>
                <div className='m-4'>
                    <Row>
                        <Col sm={router.query?.id ? 8 : 12}>
                            <div className='cards'>
                                <div className='row align-items-center '>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Is Active</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" /> &nbsp; Active
                                    </div>
                                </div>

                                <div className='row align-items-center mt-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Logo</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='row align-items-center'>
                                            {image && (<div className='col-sm-6'>
                                                <Image
                                                    src={image}
                                                    alt='loginImage'
                                                    width={'100px'}
                                                    height={"100px"}
                                                />
                                            </div>
                                            )}
                                            <div className='col-sm-6'>
                                                <label className='btn-upload' htmlFor='file-upload'>
                                                    Choose File
                                                </label>
                                                <input
                                                    onChange={(e: any) => { getImagePath(e) }}
                                                    type='file'
                                                    id='file-upload'
                                                    className='d-none'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row align-items-center mt-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Name</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <input type='text' className='form-control' placeholder='Enter here' />
                                    </div>
                                </div>

                                <div className='row align-items-center mt-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Country</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <Form.Select aria-label='Default select example'>
                                            <option>Select</option>
                                            <option value='1'>One</option>
                                            <option value='2'>Two</option>
                                            <option value='3'>Three</option>
                                        </Form.Select>
                                    </div>
                                </div>

                                <div className='row align-items-center mt-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Page/Email</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <input type='text' className='form-control' placeholder='Enter here' />
                                    </div>
                                </div>

                                <div className='row align-items-center mt-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Description</p>
                                    </div>
                                    <div className='col-sm-4'>
                                        <textarea style={{ width: "100%" }} placeholder='Description' rows={6} ></textarea>
                                    </div>
                                </div>
                                <div className='footersave'>
                                    <div className='footer-1'>
                                        <div className='row mt-3 justify-content-end'>
                                            <div className='col-sm-3'>
                                                <button className='btn-save'>{router.query?.id ? "Save Changes" : "Save"} </button>
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
                                        <Table className='mt-3 table-2'>
                                            <tbody>
                                                <tr>
                                                    <td>Gems</td>
                                                    <th>0</th>
                                                </tr>
                                                <tr>
                                                    <td>jewellery</td>

                                                    <th>4</th>
                                                </tr>
                                                <tr>
                                                    <td>Precious Things</td>

                                                    <th>4</th>
                                                </tr>
                                            </tbody>
                                        </Table>
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
        </>
    )
}

export default LaboratoryDetails;