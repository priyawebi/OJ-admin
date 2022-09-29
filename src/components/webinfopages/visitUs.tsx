import React, { useState } from 'react';
import Router from "next/router";

import Container from 'components/_common/Container'
import ImageSelecter from './_common/imageSelecter';
import CustomTable from 'components/_common/CustomTable'

function VisitUs() {
    const [loadingTextOffices, setLoadingTextOffices] = useState('');
    const [tableDataOffices, setTableDataOffices] = useState([
        {
            image: <img src="https://picsum.photos/200" height={50} width={50} />,
            name: "demo",
            address: "Indore",
            isActive: "active",
        },
        {
            image: <img src="https://picsum.photos/202" height={50} width={50} />,
            name: "demo demo",
            address: "Indore",
            isActive: "inActive",
        }
    ])
    const [keyValueOffices] = useState({
        image: "IMAGE",
        name: "NAME",
        address: "ADDRESS",
        isActive: "IS ATIVE",
    })

    const [loadingTextTravel, setLoadingTextTravel] = useState('');
    const [tableDataTravel, setTableDataTravel] = useState([
        {
            image: <img src="https://picsum.photos/200" height={50} width={50} />,
            name: "demo",
            subTitle: "demo demo demo",
            isActive: "active",
        },
        {
            image: <img src="https://picsum.photos/202" height={50} width={50} />,
            name: "demo demo",
            subTitle: "demo demo demo",
            isActive: "inActive",
        }
    ])
    const [keyValueTravel] = useState({
        image: "IMAGE",
        name: "NAME",
        subTitle: "SUBTITLE",
        isActive: "IS ATIVE",
    })


    return (
        <>
            <Container activeBar={"info"} />
            <div className='main-content'>
                <div className='m-4'>
                    <div className='cards'>
                        <h3 className='cards-header mb-3 mt-3'>Slides</h3>
                        <div className='row align-items-center mt-4'>
                            <ImageSelecter key={(Math.random() + 1).toString(36).substring(7)} view={["slide", "input", "image"]} checkboxText={"Slide 1"} />
                            <ImageSelecter key={(Math.random() + 1).toString(36).substring(7)} view={["slide", "input", "image"]} checkboxText={"Slide 2"} />
                            <ImageSelecter key={(Math.random() + 1).toString(36).substring(7)} view={["slide", "input", "image"]} checkboxText={"Slide 3"} />
                        </div>

                        <h3 className='cards-header mb-3 mt-3'>Offices</h3>
                        <div className='' style={{ border: "1px solid #f2f2f2" }}> {loadingTextOffices ? <p style={{ textAlign: "center" }}>{loadingTextOffices}</p> :
                            <CustomTable page={0} totalPage={0} setPage={() => { }} keyValue={keyValueOffices} tableData={tableDataOffices} colSpan={
                                <div className='text-center' >
                                    <a href="javascript:void(0)" onClick={() => { Router.push("/add-another-office"); }} style={{ color: "#ff5da0" }}>+ Add another office</a>
                                </div>

                            } />}
                        </div>

                        <h3 className='cards-header mb-3 mt-3'>Travel Guides</h3>
                        <div className=''> {loadingTextTravel ? <p style={{ textAlign: "center" }}>{loadingTextTravel}</p> :
                            <CustomTable page={0} totalPage={0} setPage={() => { }} keyValue={keyValueTravel} tableData={tableDataTravel} colSpan={
                                <div className='text-center' >
                                    <a href="javascript:void(0)" onClick={() => { Router.push("/add-another-guide"); }} style={{ color: "#ff5da0" }}>+ Add another guide</a>
                                </div>
                            } />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisitUs;