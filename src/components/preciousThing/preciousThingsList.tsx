import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import Router from "next/router";

import Container from 'components/_common/Container'
import PageHead from 'components/_common/PageHead'
import CustomTable from 'components/_common/CustomTable'
import Images from 'components/_common/Images'
import star from "../../assets/star.png";
import price from "../../assets/price.png";
import percentage from "../../assets/percentage.svg";

function PreciousThingsList() {
    const [loadingText, setLoadingText] = useState('');
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(5);
    const [tableData, setTableData] = useState([])
    const [keyValue, setKeyValue] = useState({
        imageHtml: "IMAGE",
        id: "ID",
        title: "TITLE",
        quantity: "QUANTITY",
        ptType: "PT TYPE",
        supplier: "SUPPLIER",
        period: "PERIOD",
        country: "COUNTRY",
        creator: "CREATOR",
        isStarHtml: <Images icon={star} alt={"..."} width={20} height={20} />,
        price: <Images icon={price} alt={"..."} width={20} height={20} />,
        percentage: <Images icon={percentage} alt={"..."} width={20} height={20} />,
        statusHtml: "STATUS"
    })


    const clickAction = (data: any) => {
        Router.push("/precious-thing-details?id=" + data.id);
    }

    const setImageHtml = (imageUrl: any) => {
        return (
            <img src={imageUrl} alt={"..."} width={30} height={30} />
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
        fetch(`http://localhost:3000/preciousThings?_limit=${limit}&_page=${page}`)
            .then((res) =>
                res.json())
            .then((response) => {
                if (response && response.length) {
                    response.forEach((e: { image: any; isStar: any; status: String; }, i: number) => {
                        response[i].imageHtml = setImageHtml(e.image);
                        response[i].isStarHtml = e.isStar ? <Images icon={star} alt={"..."} width={20} height={20} /> : " ";
                        response[i].statusHtml = setStatusView(e.status)
                        response[i].clickAction = clickAction;
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
            <Container activeBar={"preciousThing"} />
            <div className='main-content'>
                <div className='m-4'>
                    <PageHead title="Precious Things" smallCountValue={10} setOpen={setOpen} open={open} FilterButton={true} addButton={"/add-precious-thing"} />
                    <div>
                        <Collapse in={open}>
                            <div id='example-collapse-text'>
                                <div className='col-sm-12 row align-items-center'>
                                    <div className='col-sm-1'>
                                        <b>SEARCH</b>
                                    </div>
                                    <div className='col-sm-11'>
                                        <input type='text' placeholder='Enter Customer ID, Name, Surname or e-mail' id='inputPassword6' className='form-control' aria-describedby='passwordHelpInline' />
                                    </div>
                                </div>
                                
                                <div className='col-sm-12 row align-items-center mt-3 mb-3'>
                                    <div className='col-sm-1'>
                                        <b>PRICE</b>
                                    </div>
                                </div>

                                <div className='col-sm-12 row align-items-center'>
                                    <div className='col-sm-2 d-flex gap-2 align-items-center mb-2'> From <input type='text' className='form-control' />
                                    </div>
                                    <div className='col-sm-2 d-flex gap-2 align-items-center mb-2'> To <input type='text' className='form-control' />
                                    </div>
                                    <div className='col-sm-3 d-flex gap-2 align-items-center mb-2'> PT type
                                        <Form.Select aria-label='Default select example'>
                                            <option>Select</option>
                                            <option value='1'>One</option>
                                            <option value='2'>Two</option>
                                            <option value='3'>Three</option>
                                        </Form.Select>
                                    </div>
                                    <div className='col-sm-3 d-flex gap-2 align-items-center mb-2'> Period
                                        <Form.Select aria-label='Default select example'>
                                            <option>Select</option>
                                            <option value='1'>One</option>
                                            <option value='2'>Two</option>
                                            <option value='3'>Three</option>
                                        </Form.Select>
                                    </div>
                                    <div className='col-sm-2 d-flex gap-2 align-items-center mb-2'> Status
                                        <Form.Select aria-label='Default select example'>
                                            <option>Select</option>
                                            <option value='1'>One</option>
                                            <option value='2'>Two</option>
                                            <option value='3'>Three</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className='col-sm-12 row align-items-center mt-2 mb-2'>
                                    <div className='col-sm-6 d-flex align-items-center ms-5'>
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" /> &nbsp; Show only with discount
                                    </div>
                                </div>
                                <div className='col-sm-12 row align-items-center mt-1'>
                                    <div className='col-sm-4 d-flex gap-2 align-items-center'>
                                        <div className='col-sm-12 d-flex align-items-center ms-5'>
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" /> &nbsp; Marked as banners
                                        </div>
                                    </div>
                                    <div className='col-sm-3 d-flex gap-2 align-items-center'> Art san (creator)
                                        <Form.Select aria-label='Default select example'>
                                            <option>Select</option>
                                            <option value='1'>One</option>
                                            <option value='2'>Two</option>
                                            <option value='3'>Three</option>
                                        </Form.Select>
                                    </div>
                                    <div className='col-sm-3 d-flex gap-2 align-items-center'> Country
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

export default PreciousThingsList;