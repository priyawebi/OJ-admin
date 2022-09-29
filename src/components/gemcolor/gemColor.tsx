import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "components/_common/Container";
import showToaster from 'components/_common/Toaster/Toaster';
import { url } from "components/ApiUrl/ApiUrl";
import Router from "next/router";
import { useRouter } from "next/router";
import { Field, Form, Formik } from "formik";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";

function GemColor() {
  const [uname, setUName] = useState("");
  const [ucolorCode, setUColorCode] = useState("");
  const router = useRouter();
  const token =typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";

  //Update by ID

  useEffect(() => {
    if(router.query.id){
      axios
        .get(`${url}api/admin/gem/color/${router.query.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
        console.log("res",res);
        setUName(res?.data?.name),
        setUColorCode(res?.data?.colorCode)});
        console.log("uname",uname);
        console.log("colorcode",ucolorCode);
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
          <h3 className='dynamic-breadcumbs'>Editable Values</h3>
        </Link>
          </Typography>
        <Typography color="textPrimary" >
        <Link color="inherit"  href="/all-gem-color" >
          <h3 className='dynamic-breadcumbs'>GEM Colour</h3>
          </Link>
          </Typography>
        <Typography color="textPrimary" ><h3 className='dynamic-breadcumbs'>{uname}</h3></Typography>
      </Breadcrumbs>
       </div>
      <Formik
          initialValues={{
            name: uname.length?uname:"",
            colorCode: ucolorCode.length?ucolorCode:"",
          }}
          onSubmit={(values) => {
            console.log("--values---",values)
              const gemdata = {
                colorCode:ucolorCode,
                name: uname,
              };
            // router.id
            if (router.query.id === undefined) {
              axios
              .post(`${url}api/admin/gem/color`,gemdata,{headers:{Authorization:`Bearer ${token}`}})
              .then((result) => {
                showToaster("success", "GemColor Added Successfully");
              })
              .catch((err) => {
                showToaster("error", "GemColor Not Inserted ");
              });
              Router.push("/all-gem-color");        
            } else {
              axios
                .put(`${url}api/admin/gem/color/${router.query.id}`,gemdata,{headers:{Authorization:`Bearer ${token}`}})
                .then((result) => {
                  showToaster("success", "GemColor Update Successfully");
                })
                .catch((err) => {
                  showToaster("error", "GemColor Not Update ");
                });
            }            
            Router.push("/all-gem-color")
          }}
        >
          {(props) => (
        <Form onSubmit={props.handleSubmit}>
          <div className="m-4">
            <div className="cards">
              <div className="row align-items-center ">
                <div className="col-sm-3">
                  <h6 className="label-text bold">GEM Colour</h6>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-sm-3 utext">Name</div>
                <div className="col-sm-9">
                  <div className="col-sm-4 align-items-center">
                     <Field
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="color name"
                          value={uname}
                          onChange={(e)=>setUName(e.target.value)}
                        />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 utext">Colour code</div>
                <div className="col-sm-9">
                  <div className="col-sm-4 align-items-center">
                       <Field
                          type="text"
                          placeholder="color code"
                          className="colorinput"
                          name="colorCode"
                          value={ucolorCode}
                          onChange={(e)=>setUColorCode(e.target.value)}
                        />  
                         <Field
                          type="color"
                          placeholder="color code"
                          className=" colorcode"
                          name="colorCode"
                          value={ucolorCode}
                          onChange={(e)=>setUColorCode(e.target.value)}
                        />

                  </div>
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
        </Form>
        )}
        </Formik>
      </div>
    </>
  );
}

export default GemColor;
