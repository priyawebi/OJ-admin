import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import DatePicker from "react-datepicker";

import Container from 'components/_common/Container'
import CustomTable from 'components/_common/CustomTable'
import "react-datepicker/dist/react-datepicker.css";

function CostsList() {
    const [loadingText, setLoadingText] = useState('');
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(5);
    const [tableData, setTableData] = useState([])
    const [keyValue, setKeyValue] = useState({
        id: "Id",
        itemId: "ITEM ID",
        date: "DATE",
        desctiption: "DESCRIPTION",
        type: "TYPE",
        amount: "AMOUNT",
    })
    const [fromDate, setFromDate] = useState<any | null | Date>(null)
    const [toDate, setToDate] = useState<any | null | Date>(null)

    useEffect(() => {
        setLoadingText('Loading...');
        getCustomerData(10, page)
    }, [page]);

    const getCustomerData = (limit: number, page: number) => {
        fetch(`http://localhost:3000/costs?_limit=${limit}&_page=${page}`)
            .then((res) =>
                res.json())
            .then((response) => {
                if (response && response.length) {
                    setTableData(response);
                    const totalRecord = 50;
                    setTotalPage(Math.ceil(totalRecord / limit));
                    setLoadingText('')
                } else {
                    setLoadingText('No Result Fount')
                }
            })
    }

    return (
        <>
            <Container activeBar={"cost"} />
            <div className='main-content'>
                <div className='m-4'>

                    <Row className='mb-3'>
                        <Col sm={2}>
                            <div className='col-sm-12 d-flex gap-2 align-items-center'>
                                <h3 className='table-head-text me-5'> Cost </h3>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className='d-flex gap-2 align-items-center mb-2'>
                                From
                                <DatePicker
                                    placeholderText={"xxxx-xx-xx"}
                                    maxDate={toDate}
                                    className='form-control'
                                    selected={fromDate}
                                    onChange={(date: Date) => setFromDate(date)}
                                />
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className='d-flex gap-2 align-items-center mb-2'>
                                To
                                <DatePicker
                                    placeholderText={"xxxx-xx-xx"}
                                    maxDate={toDate}
                                    className='form-control'
                                    selected={fromDate}
                                    onChange={(date: Date) => setToDate(date)}
                                />
                            </div>
                        </Col>
                        <Col sm={2}>
                            <input type='text' placeholder='Enter Id' className='form-control mb-2' />
                        </Col>
                        <Col sm={2}>
                            <div className='d-flex align-items-end'>
                                <Button aria-controls='example-collapse-text' aria-expanded={open} className='btn-dark-ouline me-2' > Search </Button>
                                <Button aria-controls='example-collapse-text' aria-expanded={open} className='btn-dark-ouline' > Export </Button>
                            </div>
                        </Col>
                    </Row>


                    {/* <Row className='mb-3'>
                        <Col sm={12}>
                            <div className='col-sm-12 row gap-2 align-items-center'>
                                <h3 className='table-head-text me-5'> Cost </h3>
                                <div className='col-sm-3 d-flex gap-2 align-items-center'>
                                    From
                                    <DatePicker
                                        placeholderText={"xxxx-xx-xx"}
                                        maxDate={toDate}
                                        className='form-control'
                                        selected={fromDate}
                                        onChange={(date: Date) => setFromDate(date)}
                                    />
                                </div>
                                <div className='col-sm-3 d-flex gap-2 align-items-center'>
                                    To
                                    <DatePicker
                                        placeholderText={"xxxx-xx-xx"}
                                        maxDate={toDate}
                                        className='form-control'
                                        selected={fromDate}
                                        onChange={(date: Date) => setToDate(date)}
                                    />
                                </div>
                                <div className='col-sm-2 d-flex align-items-center'>
                                    <input type='text' placeholder='Enter Id' className='form-control' />
                                </div>
                                <Button aria-controls='example-collapse-text' aria-expanded={open} className='btn-dark-ouline' > Search </Button>
                                <Button aria-controls='example-collapse-text' aria-expanded={open} className='btn-dark-ouline' > Export </Button>
                            </div>
                        </Col>
                    </Row> */}
                    <div className='mt-3'> {loadingText ? <p style={{ textAlign: "center" }}>{loadingText}</p> :
                        <CustomTable page={page} totalPage={totalPage} setPage={setPage} keyValue={keyValue} tableData={tableData} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CostsList;