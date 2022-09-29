import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Router from "next/router";
import Image from 'next/image';

import Container from 'components/_common/Container'
import PageHead from 'components/_common/PageHead'
import CustomDraggableTable from 'components/_common/CustomDraggableTable'
import arrow1 from "../../assets/arrow1.svg";

function GemShapeList() {
    const [loadingText, setLoadingText] = useState('');
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [tableData, setTableData] = useState([])
    const [keyValue] = useState({
        image: "IMAGE",
        name: "NAME"
    })

    const clickAction = (data: any) => {
        Router.push("/shape-details?id=" + data.id);
    }

    useEffect(() => {
        setLoadingText('Loading...');
        getCustomerData(10, page)
    }, [page]);

    const getCustomerData = (limit: number, page: number) => {
        fetch(`http://localhost:3000/gemShapes`)
            .then((res) =>
                res.json())
            .then((response) => {
                if (response && response.length) {
                    response.forEach((e: { image: string | undefined; }, i: number) => {
                        response[i].clickAction = clickAction;
                        response[i].image = <img src={e.image} alt={"..."} width={50} height={50} />
                    })
                    setTableData(response);
                    setLoadingText('')
                } else {
                    setLoadingText('No Result Fount')
                }
            })
    }

    return (
        <>
            <Container activeBar={"editableValue"} />

            <div className='main-content'>
                <div className='m-4'>
                    <PageHead title={
                        <>
                            Editable Values <Image
                                src={arrow1}
                                alt='loginImage'
                                width='18px'
                                height='18px'
                                className={"imageCss"}
                            /> GEM Shape
                        </>
                    } smallCountValue={10} setOpen={setOpen} open={open} FilterButton={true} addButton={"/add-shape"} />
                    
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
                                <CustomDraggableTable keyValue={keyValue} tableData={tableData} />

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default GemShapeList;