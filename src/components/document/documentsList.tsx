import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


import Container from 'components/_common/Container'

import CustomTable from 'components/_common/CustomTable'
import "react-datepicker/dist/react-datepicker.css";

function DocumentsList() {
    const [loadingText, setLoadingText] = useState('');
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(5);
    const [tableData, setTableData] = useState([])
    const [keyValue, setKeyValue] = useState({
        id: "Id",
        itemId: "ITEM ID",
        document: "DOCUMENT",
    })
    const [fromDate, setFromDate] = useState<any | null | Date>(null)
    const [toDate, setToDate] = useState<any | null | Date>(null)

    useEffect(() => {
        setLoadingText('Loading...');
        getCustomerData(10, page)
    }, [page]);

    const getCustomerData = (limit: number, page: number) => {
        fetch(`http://localhost:3000/documents?_limit=${limit}&_page=${page}`)
            .then((res) =>
                res.json())
            .then((response) => {
                if (response && response.length) {
                    response.forEach((e: { document: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, i: string | number) => {
                        response[i].document = <a href='#'>{e.document}</a>
                    })
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
            <Container activeBar={"document"} />
            <div className='main-content'>
                <div className='m-4'>
                    <Row className='mb-3'>
                        <Col sm={8}>
                            <div className='col-sm-12 d-flex gap-2 align-items-center'>
                                <h3 className='table-head-text me-5'> Documents </h3>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className='col-sm-12 d-flex gap-2 align-items-center'>

                                <input type='text' placeholder='Enter Id' className='form-control' />
                                <Button aria-controls='example-collapse-text' aria-expanded={open} className='btn-dark-ouline' > Search </Button>
                                <Button aria-controls='example-collapse-text' aria-expanded={open} className='btn-dark-ouline' > Export </Button>
                            </div>
                        </Col>
                    </Row>
                    <div className='mt-3'> {loadingText ? <p style={{ textAlign: "center" }}>{loadingText}</p> :
                        <CustomTable page={page} totalPage={totalPage} setPage={setPage} keyValue={keyValue} tableData={tableData} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DocumentsList;