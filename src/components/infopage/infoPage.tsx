import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Router from "next/router";

import Sidebar from 'components/_common/Sidebar'
import Header from 'components/_common/Header'
import { useRouter } from 'next/router'


function InfoPage() {
    const router = useRouter();
    const [infos, setInfos] = useState<string[]>([]);

    useEffect(() => {
        setInfos((router.pathname == "/info-pages") ?
            [
                "Home Page",
                "Only Jewels",
                "The Team",
                "News",
                "Exlusive Selections",
                "Showrooms and Editions",
                "Special Requests",
                "Registered Company Details",
                "Privacy and Data Security",
                "Terms of Use",
                "Visit Us"
            ] :
            [
                "Shipping terms",
                "Destinations & Currencies",
                "Return Policies",
                "Gemstone care",
                "Privacy Policy",
            ])
    }, [router.pathname])

    const redirectPage = (page: any) => {
        Router.push(`/${(router.pathname == "/info-pages") ? "web-info-pages" : "web-lightboxes"}?page=${(page.toLowerCase().split(' ').join('-')).split('&').join('and')}`);
    }

    return (
        <>
            <div className="App">
                <div>
                    <Header />
                </div>
                <div>
                    <Sidebar activeBar={(router.pathname == "/info-pages") ? "info" : "lightboxes"} />
                </div>
            </div>

            <div className='main-content'>
                <div className='m-4'>
                    <Row className='mb-3'>
                        <Col xs={6}>
                            <div>
                                <h3 className='table-head-text'>
                                    {(router.pathname == "/info-pages") ? "Info Pages" : "Lightboxes"}
                                </h3>
                            </div>
                        </Col>
                    </Row>
                    <div className='cards'>
                        <div className='customer-side-box-head'>
                            <div className='row align-items-center'>
                                <div className='col-12  '>
                                    <p className='m-2'>NAME</p>
                                </div>
                            </div>
                        </div>
                        {infos.map((e: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => {
                            return (
                                <div className='customer-side-box pointer'>
                                    <div className='row align-items-center' onClick={() => { redirectPage(e) }}>
                                        <div className='col-12  '>
                                            <p className='m-2'>{e}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoPage;