import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Router from "next/router";

import Container from 'components/_common/Container'
import PageHead from 'components/_common/PageHead'
import CustomTable from 'components/_common/CustomTable'
import Images from 'components/_common/Images'
import star from "../../assets/star.png";

function GemsList() {
    const [loadingText, setLoadingText] = useState('');
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(5);
    const [tableData, setTableData] = useState([])
    const [keyValue, setKeyValue] = useState({
        imageHtml: "IMAGE",
        id: "ID",
        name: "NAME",
        type: "TYPE",
        qtyOfItems: "QTY of items",
        country: "COUNTRY",
        statusHtml: "STATUS"
    })


    const clickAction = (data: any) => {
        Router.push("/creator-details?id=" + data.id);
    }

    const setImageHtml = (imageUrl: any) => {
        return (
            <img src={imageUrl} alt={"..."} width={50} height={50} />
        )
    }

    const setStatusView = (status: String) => {
        if (status === "active") {
            return (<span style={{ color: "green" }}>• Active</span>)
        } else {
            return (<span style={{ color: "red" }}>• In-Active</span>)
        }
    }

    useEffect(() => {
        setLoadingText('Loading...');
        getCustomerData(10, page)
    }, [page]);


    const getCustomerData = (limit: number, page: number) => {
            fetch(`http://localhost:3001/admin/creator/all-creator?page=${page}&limit=${limit}`)
                .then((result) =>
                result.json())
                .then((result) => {
                    console.log("result",result);
                    if (result && result.length) {
                    console.log("result",result)
                    result.forEach((e: { image: any; isStar: any; status: String; }, i: number) => {
                        result[i].imageHtml = setImageHtml(e.image);
                        result[i].isStarHtml = e.isStar ? <Images icon={star} alt={"..."} width={20} height={20} /> : " ";
                        result[i].statusHtml = setStatusView(e.status)
                        result[i].clickAction = clickAction;
                    })
                    setTableData(result);
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
            <Container activeBar={"creator"} />
            <div className='main-content'>
                <div className='m-4'>
                    <PageHead title="Customers" smallCountValue={10} setOpen={setOpen} open={open} FilterButton={true} addButton={"/add-creator"} />
                    <div>
                        <Collapse in={open}>
                            <div id='example-collapse-text'>
                                <div className='col-12 row align-items-center'>
                                    <div className='col-sm-1'>
                                        <b>SEARCH</b>
                                    </div>
                                    <div className='col-sm-11'>
                                        <input type='text' placeholder='Enter Customer ID, Name, Surname or e-mail' id='inputPassword6' className='form-control' aria-describedby='passwordHelpInline' />
                                    </div>
                                </div>

                                <div className='col-sm-12 row align-items-center mt-4'>
                                    <div className='col-sm-3 d-flex gap-2 align-items-center'> type
                                        <Form.Select aria-label='Default select example'>
                                            <option>Select</option>
                                            <option value='1'>One</option>
                                            <option value='2'>Two</option>
                                            <option value='3'>Three</option>
                                        </Form.Select>
                                    </div>
                                    <div className='col-sm-3 d-flex gap-2 align-items-center mt-2'> Country
                                        <Form.Select aria-label='Default select example'>
                                            <option>Select</option>
                                            <option value='1'>One</option>
                                            <option value='2'>Two</option>
                                            <option value='3'>Three</option>
                                        </Form.Select>
                                    </div>
                                    <div className='col-sm-3 d-flex gap-2 align-items-center mt-2'> Status
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

export default GemsList;