import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Router from "next/router";
import Image from 'next/image';

import Container from 'components/_common/Container'
import PageHead from 'components/_common/PageHead'
import CustomTable from 'components/_common/CustomTable'
import Images from 'components/_common/Images'
import star from "../../assets/star.png";

function DyjList() {
    const [loadingText, setLoadingText] = useState('');
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(5);
    const [tableData, setTableData] = useState([])
    const [keyValue, setKeyValue] = useState({
        imageHtml: "IMAGE",
        gem: "GEM",
        setting: "SETTING",
        price: "PRICE",
        statusHtml: "STATUS"
    })
    const [imagePath, setImagePath] = useState(
        [
            [
                "https://via.placeholder.com/200x150/fde6f0/808080?text=Image",
                "https://via.placeholder.com/200x150/fde6f0/808080?text=Image",
                "https://via.placeholder.com/200x150/fde6f0/808080?text=Image",
            ],
            [
                "https://via.placeholder.com/200x150/fde6f0/808080?text=Image",
                "https://via.placeholder.com/200x150/fde6f0/808080?text=Image",
                "https://via.placeholder.com/200x150/fde6f0/808080?text=Image",
            ],
            [
                "https://via.placeholder.com/200x150/fde6f0/808080?text=Image",
                "https://via.placeholder.com/200x150/fde6f0/808080?text=Image",
                "https://via.placeholder.com/200x150/fde6f0/808080?text=Image",
            ]
        ]
    )

    const setImageHtml = (imageUrl: any) => {
        return (
            <img src={imageUrl} alt={"..."} width={50} height={50} />
        )
    }

    const setStatusView = (status: String) => {
        if (status === "active") {
            return (<span style={{ color: "green" }}>• Active</span>)
        } else {
            return (<span style={{ color: "green" }}>• Sold</span>)
        }
    }

    useEffect(() => {
        setLoadingText('Loading...');
        getCustomerData(10, page)
    }, [page]);

    const getImagePath = (f: { target: { files: Blob[]; }; }, i: number, j: number) => {
        const data = imagePath;
        setImagePath([])
        var reader = new FileReader();
        reader.onload = function (e: any) {
            data[i][j] = e?.target?.result;
            setImagePath(data);
        };
        reader.readAsDataURL(f.target.files[0]);
    }

    const getCustomerData = (limit: number, page: number) => {
        fetch(`http://localhost:3000/dyjs?_limit=${limit}&_page=${page}`)
            .then((res) =>
                res.json())
            .then((response) => {
                if (response && response.length) {
                    response.forEach((e: { image: any; isStar: any; status: String; }, i: number) => {
                        response[i].imageHtml = setImageHtml(e.image);
                        response[i].isStarHtml = e.isStar ? <Images icon={star} alt={"..."} width={20} height={20} /> : " ";
                        response[i].statusHtml = setStatusView(e.status)
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
            <Container activeBar={"dyj"} />
            <div className='main-content'>
                <div className='m-4'>
                    <PageHead title="DYJ" smallCountValue={10} setOpen={setOpen} open={open} FilterButton={true} exportButton={true} importButton={true} />
                    <div>
                        <Collapse in={open}>
                            <div id='example-collapse-text'>
                                <div className='col-sm-12 row align-items-center'>
                                    <div className='col-sm-12 d-flex gap-2 align-items-center'> Search <input type='text' className='form-control' /> </div>
                                </div>

                                <div className='col-sm-12 row align-items-center mt-3'>
                                    <div className='col-sm-4 d-flex gap-2 align-items-center'>
                                        <b>PRICE</b>
                                    </div>
                                </div>

                                <div className='col-sm-12 row align-items-center mt-2'>
                                    <div className='col-sm-3 d-flex gap-2 align-items-center'> From
                                        <input type='text' className='form-control' />
                                    </div>

                                    <div className='col-sm-3 d-flex gap-2 align-items-center'> To
                                        <input type='text' className='form-control' />
                                    </div>

                                    <div className='col-sm-3 d-flex gap-2 align-items-center'> Status
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

            <div className='main-content'>
                <div className='m-4'>
                    <Row>
                        <Col sm={12}>
                            <div className='cards'>


                                <div className='row align-items-center '>
                                    <div className='col-sm-3'>
                                        <p className='label-text bold'>Slides</p>
                                    </div>
                                </div>
                                {imagePath.map((e, i) => {
                                    return (
                                        <div>
                                            <div className='row align-items-center mt-4'>
                                                <div className='col-sm-12'>
                                                    <input type='text' className='form-control' placeholder='Description' />
                                                </div>
                                            </div>
                                            <div className='row align-items-center mt-4'>
                                                <div className='col-sm-4'>
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" /> &nbsp; Slide {i + 1}
                                                </div>
                                            </div>

                                            <div className='row align-items-center mt-1'>
                                                <div className='col-sm-4'>
                                                    <input type='text' className='form-control' placeholder='Link to' />
                                                </div>
                                            </div>

                                            <div className='row align-items-center mt-4'>

                                                {e.map((ee, j) => {
                                                    return (
                                                        <div className='col-sm-4 align-items-center'>
                                                            <p>Size {j + 1} (YYYYxYYYY)</p>
                                                            <img
                                                                src={ee}
                                                                alt='loginImage'
                                                                width={"100%"}
                                                                height={"205px"}
                                                            />
                                                            <label className='btn-upload mt-2' htmlFor='file-upload'>
                                                                Choose File
                                                            </label>
                                                            <input
                                                            onChange={(e: any) => { getImagePath(e, i, j) }}
                                                                type='file'
                                                                id='file-upload'
                                                                className='d-none'
                                                            />
                                                            {/* <input onChange={(e: any) => { getImagePath(e, i, j) }} className='mt-2' type='file' name='' id='file-type' accept='Image/*' /> */}
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                        </div>
                                    )
                                })}


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

export default DyjList;