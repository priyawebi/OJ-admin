import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/router'

import Container from 'components/_common/Container'


function shapeDetails() {
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
            <Container activeBar={"editableValue"} />
            <div className='main-content'>
                <div className='m-4'>
                    <Row>
                        <Col sm={12}>
                            <div className='cards'>
                                <div className='row align-items-center mt-4'>
                                    <div className='col-3'>
                                        <p className='label-text'>Image</p>
                                    </div>
                                    <div className='col-6'>
                                        <div className='row align-items-center'>
                                            {image && (<div className='col-8'>
                                                <Image
                                                    src={image}
                                                    alt='loginImage'
                                                    width={'100px'}
                                                    height={"100px"}
                                                />
                                            </div>
                                            )}
                                            <div className='col-4'>
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
                                    <div className='col-3'>
                                        <p className='label-text'>Name</p>
                                    </div>
                                    <div className='col-9'>
                                        <input type='text' className='form-control' placeholder='Enter here' />
                                    </div>
                                </div>
                                <div className='footersave'>
                                    <div className='footer-1'>
                                        <div className='row mt-3 justify-content-end'>
                                            
                                            <div className='col-sm-3'>
                                                <button className='btn-save'>{router.query?.id ? "Save Changes" : "Save"}</button>
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
    )
}

export default shapeDetails;