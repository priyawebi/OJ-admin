import { Col, Form, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import Container from 'components/_common/Container'

import CustomTable from 'components/_common/CustomTable'

function GiftCard() {
    const router = useRouter()
    const [loadingText, setLoadingText] = useState('');
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(5);
    const [tableData, setTableData] = useState([])
    const [keyValue, setKeyValue] = useState({

        number: "NUMBER",
        client: "CLIENT",
        dateOfUsage: "DATE OF USAGE",
        statusHtml: "STATUS",
    })

    useEffect(() => {
        setLoadingText('Loading...');
        getDiscountCodes(10, page)
    }, [page]);

    const setStatusView = (status: String) => {
        if (status === "used") {
            return (<span style={{ color: "green" }}>• Used</span>)
        } else {
            return (<span style={{ color: "red" }}>• Not Used</span>)
        }
    }

    const getDiscountCodes = (limit: number, page: number) => {
        fetch(`http://localhost:3000/listOfCodes?_limit=${limit}&_page=${page}`)
            .then((res) =>
                res.json())
            .then((response) => {
                if (response && response.length) {
                    response.forEach((e: { status: String; id: any; }, i: number) => {
                        response[i].statusHtml = setStatusView(e.status);
                    })
                    setTableData(response);
                    const totalRecord = 4;
                    setTotalPage(Math.ceil(totalRecord / limit));
                    setLoadingText('')
                } else {
                    setLoadingText('No Result Fount')
                }
            })
    }

    return (
        <>
            <Container activeBar={"discountcodes"} />
            <div className='main-content'>
                <div className='m-4'>
                    <Row>
                        <Col xs={12}>
                            <div className='cards'>
                                <div className='row align-items-center my-4'>
                                    <h3 className='cards-header mb-4'>Discount code</h3>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Name of campaign</p>
                                    </div>
                                    <div className='col-sm-5'>
                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter here'
                                        />
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Status</p>
                                    </div>
                                    <div className='col-sm-5'>
                                        <Form.Select
                                            className='h-40'
                                            aria-label='Default select example'
                                        >
                                            <option>Active</option>
                                            <option value='1'>One</option>
                                            <option value='2'>Two</option>
                                            <option value='3'>Three</option>
                                        </Form.Select>
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Term</p>
                                    </div>
                                    <div className='col-sm-5 d-flex align-items-center gap-3 mb-2'>
                                        <div>Till</div>
                                        <Form.Control
                                            className='h-40'
                                            type='date'
                                            placeholder='Enter here'
                                        />
                                    </div>
                                    <div className='col-sm-3'>
                                        <div className='form-check'>
                                            <input
                                                type='checkbox'
                                                className='form-check-input'
                                                id='exampleCheck1'
                                            />
                                            <label
                                                className='form-check-label'
                                                htmlFor='exampleCheck1'
                                            >Unlimited</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Expresion</p>
                                    </div>
                                    <div className='col-sm-5 p-0'>
                                        <div className='row'>
                                            <div className='col'>
                                                <Form.Control
                                                    className='h-40'
                                                    type='text'
                                                    placeholder='Enter here'
                                                />
                                            </div>
                                            <div className='col'>
                                                <Form.Select
                                                    className='h-40'
                                                    aria-label='Default select example'
                                                >
                                                    <option>Active</option>
                                                    <option value='1'>One</option>
                                                    <option value='2'>Two</option>
                                                    <option value='3'>Three</option>
                                                </Form.Select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Title of the code</p>
                                    </div>
                                    <div className='col-sm-5'>
                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter here'
                                        />
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Type</p>
                                    </div>
                                    <div className='col-sm-5'>
                                        <div className='form-check form-check-inline'>
                                            <input
                                                className='form-check-input'
                                                type='radio'
                                                name='inlineRadioOptions'
                                                id='inlineRadio1'
                                                value='option1'
                                            />
                                            <label
                                                className='form-check-label'
                                                htmlFor='inlineRadio1'
                                            >
                                                Multiple
                                            </label>
                                        </div>
                                        <div className='form-check form-check-inline'>
                                            <input
                                                className='form-check-input'
                                                type='radio'
                                                name='inlineRadioOptions'
                                                id='inlineRadio2'
                                                value='option2'
                                            />
                                            <label
                                                className='form-check-label'
                                                htmlFor='inlineRadio2'
                                            >
                                                Single user only
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Available times</p>
                                    </div>
                                    <div className='col-sm-5'>
                                        <div className='form-check form-check-inline'>
                                            <input
                                                className='form-check-input'
                                                type='radio'
                                                name='inlineRadioOptions'
                                                id='inlineRadio3'
                                                value='option3'
                                            />
                                            <label
                                                className='form-check-label'
                                                htmlFor='inlineRadio3'
                                            >
                                                Unlimited
                                            </label>
                                        </div>
                                        <div className='form-check form-check-inline'>
                                            <input
                                                className='form-check-input'
                                                type='radio'
                                                name='inlineRadioOptions'
                                                id='inlineRadio4'
                                                value='option4'
                                            />
                                            <label
                                                className='form-check-label'
                                                htmlFor='inlineRadio4'
                                            >
                                                Single
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row align-items-center my-4'>
                                    <div className='col-sm-3'>
                                        <p className='label-text'>Title of the code</p>
                                    </div>
                                    <div className='col-sm-5'>
                                        <Form.Control
                                            className='h-40'
                                            type='text'
                                            placeholder='Enter here'
                                        />
                                    </div>
                                </div>
                                {
                                    router.query?.id &&
                                    <div className='my-5'>
                                        <h3 className='cards-header mb-4'>List of codes</h3>
                                        <div className='mt-3'>
                                            {
                                                loadingText
                                                    ?
                                                    <p style={{ textAlign: "center" }}>{loadingText}</p>
                                                    :
                                                    <CustomTable page={page} totalPage={totalPage} setPage={setPage} keyValue={keyValue} tableData={tableData} />
                                            }
                                        </div>
                                    </div>
                                }

                                <div className='footersave'>
                                    <div className='footer-1'>
                                        <div className='row mt-3 justify-content-end'>
                                            <div className='col-sm-3'>
                                                <button className='btn-save'>Save </button>
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

export default GiftCard;
