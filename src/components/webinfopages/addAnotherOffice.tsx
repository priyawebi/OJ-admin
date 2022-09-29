import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useRouter } from 'next/router'
import Image from 'next/image';

import Sidebar from 'components/_common/Sidebar'
import Header from 'components/_common/Header'

function AddAnotherOffice() {
    const [image, setImage] = useState("");
    const router = useRouter()

    const getImagePath = (f: { target: { files: Blob[]; }; }) => {
        var reader = new FileReader();
        reader.onload = function (e: any) {
            setImage(e?.target?.result)
        };
        reader.readAsDataURL(f.target.files[0]);
    }

    return (
        <>
            <div className="App">
                <div>
                    <Header />
                </div>
                <div>
                    <Sidebar activeBar={"info"} />
                </div>
            </div>
            <div className='main-content'>
                <div className='m-4'>
                    <Row>
                        <Col xs={router.query?.id ? 8 : 12}>
                            <div className='cards'>
                                <h3 className='cards-header mb-5 mt-3'>Office information</h3>
                                
                                <div className='row align-items-center '>
                                    <div className='col-3'>
                                        <p className='label-text'>Is Active</p>
                                    </div>
                                    <div className='col-4'>
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" /> &nbsp; Active
                                    </div>
                                </div>

                                <div className='row align-items-center mt-4'>
                                    <div className='col-3'>
                                        <p className='label-text'>Image</p>
                                    </div>
                                    <div className='col-6'>
                                        <div className='row align-items-center'>
                                            {image && (<div className='col-6'>
                                                <Image
                                                    src={image}
                                                    alt='loginImage'
                                                    width={'100px'}
                                                    height={"100px"}
                                                />
                                            </div>
                                            )}
                                            <div className='col-6'>
                                                <input onChange={(e: any) => { getImagePath(e) }} type='file' name='' id='file-type' accept='Image/*' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row align-items-center mt-4'>
                                    <div className='col-3'>
                                        <p className='label-text'>Name</p>
                                    </div>
                                    <div className='col-4'>
                                        <input type='text' className='form-control' placeholder='Enter here' />
                                    </div>
                                </div>

                                <div className='row align-items-center mt-4'>
                                    <div className='col-3'>
                                        <p className='label-text'>Address</p>
                                    </div>
                                    <div className='col-4'>
                                        <textarea style={{ width: "100%" }} placeholder='Address' rows={6} ></textarea>
                                    </div>
                                </div>
                                <div className='footersave'>
                                    <div className='footer-1'>
                                        <div className='row mt-3 justify-content-end'>
                                            <div className='col-3'>
                                                <button className='btn-save'>{router.query?.id ? "Save Changes" : "Save"} </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        {/* {
                            router.query?.id && (
                                <Col xs={4}>
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
                        } */}
                    </Row>
                    <div id='container'>
                        <div id='midivfixed'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAnotherOffice;