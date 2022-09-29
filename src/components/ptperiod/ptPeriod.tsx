import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Container from "components/_common/Container";
import showToaster from 'components/_common/Toaster/Toaster';
import axios from "axios";
import { url } from "components/ApiUrl/ApiUrl";
import { Field, Formik } from "formik";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";

function PtPeriod() {
  const [data,setData]= useState("");
  const router = useRouter();

  const token =typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";

//Update By ID
useEffect(() => {
  if (router.query.id) {
    axios
      .get(`${url}api/admin/ptperiod/${router.query.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setData(res?.data?.name);
      });
  }
}, [router.query.id]);

  return (
    <>
      <Container activeBar={"dyj"} />
      <div className="main-content">
      <div className="mt-4 m-4">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Typography color="textPrimary" >
        <Link color="inherit"  href="/editable-values-list" >
        <h3 className="dynamic-breadcumbs">Editable Values</h3>
        </Link></Typography>
        <Typography color="textPrimary">
        <Link color="inherit"  href="/all-pt-period" >
          <h3 className='dynamic-breadcumbs'>PT Period</h3>
          </Link>
          </Typography>
        <Typography color="textPrimary" ><h3 className='dynamic-breadcumbs'>{data}</h3></Typography>
      </Breadcrumbs>
       </div>
      <Formik
          initialValues={{
            name: data.length ? data : "",
          }}
          onSubmit={(values) => {
            const gemdata = {
              name: data,
            };

            if (router.query.id === undefined) {
              axios
                .post(`${url}api/admin/ptperiod`,gemdata, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                .then((result) => {
                  showToaster("success", "PtPeriod Added Successfully");
                })
                .catch((err) => {
                  showToaster("error", "PtPeriod Not Inserted ");
                });
              Router.push("/all-pt-period");
            } 
            else 
            {              
              axios
                .put(`${url}api/admin/ptperiod/${router.query.id}`,gemdata, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                .then((result) => {
                  showToaster("success", "PtPeriod Update Successfully");
                })
                .catch((err) => {
                  showToaster("error", "PtPeriod Not Update");
                });
            }
            Router.push("/all-pt-period");
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <>
          <div className="m-4">
            <div className="cards">
              <div className="row align-items-center ">
                <div className="col-sm-3">
                  <h6 className="label-text bold">PT Period</h6>
                </div>
              </div><br></br>
              <div className="row mt-4">
                <div className="col-sm-3 utext">Name</div>
                <div className="col-sm-9">
                  <div className="col-sm-4 align-items-center">
                         <Field
                            type="text"
                            placeholder="PTType name"
                            className="form-control"
                            name="name"
                            value={data}
                            onChange={(e)=>setData(e.target.value)}
                          />
                  </div>
                </div>
              </div>
            </div>
            <div className="footersave">
              <div className="footer-1">
                <div className="row mt-3 justify-content-end">
                  <div className="col-sm-3">
                    <button className="btn-save">Save Changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
        </Form>
         )}
         </Formik>
      </div>
    </>
  );
}

export default PtPeriod;
