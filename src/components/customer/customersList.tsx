import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import Router from "next/router";

import Container from 'components/_common/Container'
import PageHead from 'components/_common/PageHead'
import CustomTable from 'components/_common/CustomTable'

function CustomersList() {
  const [loadingText, setLoadingText] = useState('');
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(5);
  const [tableData, setTableData] = useState([])
  const [keyValue, setKeyValue] = useState({
    id: "Id",
    title: "TITLE",
    firstName: "FIRST NAME",
    lastName: "LAST NAME",
    dateOfBirth: "DATE OF BIRTH",
    email: "EMAIL",
    allOrders: "ALL ORDER",
    activeOrder: "ACTIVE ORDER",
    subscriptionHtml: "SUBSCRIPTION",
    statusHtml: "STATUS"
  })

  const token=localStorage.getItem("accessToken");

  const setStatusView = (status: String) => {
    if (status === "active") {
      return (<span style={{ color: "green" }}>• Active</span>)
    } else {
      return (<span style={{ color: "red" }}>• In-Active</span>)
    }
  }
  const setSubscriptionView = (status: String) => {
    if (status === "active") {
      return (<span style={{ color: "green" }}>• Active</span>)
    } else {
      return (<span style={{ color: "red" }}>• Disabled</span>)
    }
  }

  const clickAction = (data: any) => {
    Router.push("/customer-details?id=" + data.id);
  }

  useEffect(() => {
    setLoadingText('Loading...');
    getCustomerData(10, page)
  }, [page]);

  const getCustomerData = (limit: number, page: number) => {
    fetch(`http://localhost:3000/customers?_limit=${limit}&_page=${page}`,{headers:{Authorization:`Bearer ${token}`}})
      .then((res) =>
        res.json())
      .then((response) => {
        if (response && response.length) {
          response.forEach((e: { status: String; subscription: String; }, i: number) => {
            response[i].statusHtml = setStatusView(e.status);
            response[i].subscriptionHtml = setSubscriptionView(e.subscription);
            response[i].clickAction = clickAction;
          })
          setTableData(response);
          const totalRecord = 29;
          setTotalPage(Math.ceil(totalRecord/limit));
          setLoadingText('')
        } else {
          setLoadingText('No Result Fount')
        }
      })
  }

  return (
    <>
      <Container activeBar={"customers"} />
      <div className='main-content'>
        <div className='m-4'>
          <PageHead title="Customers" smallCountValue={10} setOpen={setOpen} open={open} FilterButton={true} />
          <div>
            <Collapse in={open}>
              <div id='example-collapse-text'>
                <div className='col-sm-12 row align-items-center'>
                  <div className='col-sm-9 d-flex gap-2 align-items-center mb-2'> Search <input type='text' className='form-control' />
                  </div>
                  <div className='col-sm-3 d-flex gap-2 align-items-center mb-2'> Status
                    <Form.Select aria-label='Default select example'>
                      <option>Select</option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </Form.Select>
                  </div>
                </div>
                <hr className='hr-collapse' />
                <div className='text-end me-2'>
                  <button className='btn-dark-ouline width-auto btn me-4'> Clear filter </button>
                  <button className='btn-dark-filter btn width-auto'> Filter </button>
                </div>
              </div>
            </Collapse>
          </div>
          <div className='mt-3'> {loadingText ? <p style={{ textAlign: "center" }}>{loadingText}</p> :
            <CustomTable page={page} totalPage={totalPage} setPage={setPage} keyValue={keyValue} tableData={tableData} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomersList;