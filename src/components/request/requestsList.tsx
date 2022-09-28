import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import { Col, Form, Row } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Router from "next/router";

import Container from 'components/_common/Container'
import PageHead from 'components/_common/PageHead'
import CustomTable from 'components/_common/CustomTable'
import "react-datepicker/dist/react-datepicker.css";

function RequestsList() {
    const [loadingText, setLoadingText] = useState('');
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(5);
    const [tableData, setTableData] = useState([])
    const [keyValue, setKeyValue] = useState({
        type: "TYPE",
        customer: "CUSTOMER",
        customerId: "CUSTOMER ID",
        value: "VALUE",
        orderId: "ORDER ID",
        requestDate: "REQUEST DATE",
        statusHtml: "STATUS"
    })
    const [fromDate, setFromDate] = useState<any | null | Date>(null)
    const [toDate, setToDate] = useState<any | null | Date>(null)

    const setStatusView = (status: String) => {
        if (status === "active") {
            return (<span style={{ color: "green" }}>• Active</span>)
        } else {
            return (<span style={{ color: "red" }}>• In-Active</span>)
        }
    }

    const clickAction = (data: any) => {
        Router.push("/request-details?id=" + data.orderId);
    }

    useEffect(() => {
        setLoadingText('Loading...');
        getGiftData(10, page)
    }, [page]);

    const getGiftData = (limit: number, page: number) => {
        fetch(`http://localhost:3000/requests?_limit=${limit}&_page=${page}`)
            .then((res) =>
                res.json())
            .then((response) => {
                if (response && response.length) {
                    response.forEach((e: { status: String; id: any; }, i: number) => {
                        response[i].statusHtml = setStatusView(e.status);
                        response[i].clickAction = clickAction;
                    })
                    setTableData(response);
                    const totalRecord = 96;
                    setTotalPage(Math.ceil(totalRecord / limit));
                    setLoadingText('')
                } else {
                    setLoadingText('No Result Fount')
                }
            })
    }

    return (
        <>
            <Container activeBar={"requests"} />
            <div className='main-content'>
                <div className='m-4'>
                    <PageHead title="Requests" smallCountValue={10} setOpen={setOpen} open={open} FilterButton={true} exportButton={true} />
                    <div>
                        <Collapse in={open}>
                            <div id='example-collapse-text'>
                                <div className='col-sm-12 row align-items-center'>
                                    <div className='col-sm-12 d-flex gap-2 align-items-center'> Search <input type='text' className='form-control' /> </div>
                                </div>

                                <div className='col-sm-12 row align-items-center mt-3'>
                                    <div className='col-sm-4 d-flex gap-2 align-items-center'>
                                        <b>REQUEST DATE</b>
                                    </div>
                                </div>

                                <div className='col-sm-12 row align-items-center mt-2'>
                                    <div className='col-sm-3 d-flex gap-2 align-items-center mb-2'> From
                                        <DatePicker
                                            placeholderText={"xxxx-xx-xx"}
                                            maxDate={toDate}
                                            className='form-control'
                                            selected={fromDate}
                                            onChange={(date: Date) => setFromDate(date)}
                                        />
                                    </div>

                                    <div className='col-sm-3 d-flex gap-2 align-items-center mb-2'> To
                                        <DatePicker
                                            placeholderText={"xxxx-xx-xx"}
                                            maxDate={toDate}
                                            className='form-control'
                                            selected={fromDate}
                                            onChange={(date: Date) => setToDate(date)}
                                        />
                                    </div>

                                    <div className='col-sm-3 d-flex gap-2 align-items-center mb-2'> Type
                                        <Form.Select aria-label='Default select example'>
                                            <option>Select</option>
                                            <option value='1'>One</option>
                                            <option value='2'>Two</option>
                                            <option value='3'>Three</option>
                                        </Form.Select>
                                    </div>

                                    <div className='col-sm-3 d-flex gap-2 align-items-center mb-2'> Status
                                        <Form.Select aria-label='Default select example'>
                                            <option>Select</option>
                                            <option value='1'>One</option>
                                            <option value='2'>Two</option>
                                            <option value='3'>Three</option>
                                        </Form.Select>
                                    </div>

                                </div>

                                <hr className='hr-collapse' />
                                <div className='text-end me-4'>
                                    <button className='btn-dark-ouline width-auto btn me-4'> Clear filter </button>
                                    <button className='btn-dark-filter btn width-auto'> Filter </button>
                                </div>
                            </div>
                        </Collapse>
                    </div>
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
            </div>
        </>
    )
}

export default RequestsList;
