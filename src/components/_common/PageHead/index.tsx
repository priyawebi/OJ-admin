import React from 'react';
import Router from "next/router";
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faAdd, faFileExport,faFileImport } from '@fortawesome/free-solid-svg-icons';

function PageHead(props: any) {
    //addButton exportButton, FilterButton
    return (
        <Row className='mb-3'>
            {/* <Col xs={6}>
                <div>
                    <h3 className='table-head-text'> {props?.title ? props?.title : ""} {props?.smallCountValue ? <small className='countvalue'>({props?.smallCountValue})</small> : null}
                    </h3>
                </div>
            </Col> */}
            <Col xs={12} className='text-end'>
                {
                    props.exportButton && (
                        <>
                            <Button aria-controls='example-collapse-text' className='btn-dark-ouline filter-button m-2' > Export </Button>
                            <FontAwesomeIcon onClick={() => props.setOpen(!props.open)} className='icon-class filter-image m-2' icon={faFileExport} title='View' />
                        </>
                    )
                }
                {
                    props.importButton && (
                        <>
                            <Button aria-controls='example-collapse-text' className='btn-dark-ouline filter-button m-2' > Import </Button>
                            <FontAwesomeIcon onClick={() => props.setOpen(!props.open)} className='icon-class filter-image m-2' icon={faFileImport} title='View' />
                        </>
                    )
                }
                {
                    props.FilterButton && (
                        <>
                            <Button onClick={(e: any) => props.setOpen(!props.open)} aria-controls='example-collapse-text m-2' aria-expanded={props.open} className='btn-dark-ouline filter-button' > {props.open ? "Hide Filter" : "Show Filter"}  </Button>
                            <FontAwesomeIcon onClick={() => props.setOpen(!props.open)} className='icon-class filter-image m-2' icon={faFilter} title='View' />
                        </>
                    )
                }

                {
                    props.addButton && (
                        <>
                                <Button onClick={() => { Router.push(props.addButton); }} aria-controls='example-collapse-text' className='btn-dark-ouline filter-button m-2' > + Add New </Button>
                                <FontAwesomeIcon onClick={() => { Router.push(props.addButton); }} className='icon-class filter-image m-2' icon={faAdd} title='View' />
                      </>
                    )
                }
            </Col>
        </Row>
    )
}
export default PageHead;