import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import Container from 'components/_common/Container'

function AddSupplier() {
    const [mount, setMount] = useState(false);
    const [supplierType, setSupplierType] = useState('private');
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
                            <Col xs={12}>
                                <div className='cards'>
                                    <h3 className='cards-header'>Supplier information</h3>
                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <div className="form-check form-check-inline">
                                                <input onClick={() => { setSupplierType('private') }} checked={(supplierType === "private")} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label className="form-check-label" >Private</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input onClick={() => { setSupplierType('company') }} checked={(supplierType === "company")} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                                <label className="form-check-label" >Company</label>
                                            </div>
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


                                    {(supplierType === "company") &&
                                        <>
                                            <div className='row align-items-center my-3'>
                                                <div className='col-sm-3'>
                                                    <p className='label-text'>Registration number</p>
                                                </div>
                                                <div className='col-sm-8'>
                                                    <input type='text' className='form-control' />
                                                </div>
                                            </div>
                                            <div className='row align-items-center my-3'>
                                                <div className='col-sm-3'>
                                                    <p className='label-text'>VAT number</p>
                                                </div>
                                                <div className='col-sm-8'>
                                                    <input type='text' className='form-control' />
                                                </div>
                                            </div>
                                            <div className='row align-items-center my-3'>
                                                <div className='col-sm-3'>
                                                    <p className='label-text'>Website (Optional)</p>
                                                </div>
                                                <div className='col-sm-8'>
                                                    <input type='text' className='form-control' />
                                                </div>
                                            </div>
                                            <div className='row align-items-center my-3'>
                                                <div className='col-sm-3'>
                                                    <p className='label-text'>Name of contact person</p>
                                                </div>
                                                <div className='col-sm-8'>
                                                    <input type='text' className='form-control' />
                                                </div>
                                            </div>
                                        </>
                                    }
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


                                    <div className='row align-items-center my-3'>
                                        <div className='col-sm-3'>
                                            <p className='label-text'>Documents</p>
                                        </div>
                                        <div className='col-sm-9'>
                                            <div className='col-sm-12 align-items-center mt-2'>
                                                {new Array(3).fill(undefined).map((e) => {
                                                    return (
                                                        <div className='row align-items-center mt-2'>

                                                            <div className='col-sm-4'>
                                                                <span>Document.type</span>
                                                            </div>
                                                            <div className='col-4'>
                                                                <a href='#'><span style={{ color: "#ff3290", cursor: "pointer" }}>Download</span></a>
                                                            </div>
                                                            <div className='col-4'>
                                                                <a href='#'><span style={{ color: "#ff3290", cursor: "pointer" }}>Remove</span></a>
                                                            </div>

                                                            {/* <span>Document.type</span>
                                                            <a href='#'><span style={{ color: "#ff3290", cursor: "pointer" }}>Download</span></a>
                                                            <a href='#'><span style={{ color: "#ff3290", cursor: "pointer" }}>Remove</span></a> */}
                                                        </div>
                                                    )
                                                })}
                                            </div>


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

export default AddSupplier;