import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Router from "next/router";

import Container from 'components/_common/Container'
import PageHead from 'components/_common/PageHead'
import CustomTable from 'components/_common/CustomTable'

function LaboratoriesList() {
    const [loadingText, setLoadingText] = useState('');
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(5);
    const [tableData, setTableData] = useState([])
    const [keyValue, setKeyValue] = useState({
        logoHtml: "LOGO",
        name: "NAME",
        items: "ITEMS",
        pageEmail: "PAGE/EMAIL",
        statusHtml: "STATUS"
    })


    const clickAction = (data: any) => {
        Router.push("/Laboratory-details?id=" + data.id);
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
        fetch(`http://localhost:3000/Laboratories?_limit=${limit}&_page=${page}`)
            .then((res) =>
                res.json())
            .then((response) => {
                if (response && response.length) {
                    response.forEach((e: { logo: any; status: String; }, i: number) => {
                        response[i].logoHtml = setImageHtml(e.logo);
                        response[i].statusHtml = setStatusView(e.status)
                        response[i].clickAction = clickAction;
                    })
                    setTableData(response);
                    const totalRecord = 100;
                    setTotalPage(Math.ceil(totalRecord / limit));
                    setLoadingText('')
                } else {
                    setLoadingText('No Result Fount')
                }
            })
    }

    return (
        <>
            <Container activeBar={"laboratory"} />
            <div className='main-content'>
                <div className='m-4'>
                    <PageHead title="Laboratories" smallCountValue={10} setOpen={setOpen} open={open} FilterButton={true} addButton={"/Laboratory-details"} />
                    <div>
                        <Collapse in={open}>
                            <div id='example-collapse-text'>
                                FILTER
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

export default LaboratoriesList;