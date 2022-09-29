import React, { useEffect, useState } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import Router from "next/router";
import axios from "axios";
import Container from "components/_common/Container";
import PageHead from "components/_common/PageHead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegHandRock } from "react-icons/fa";
import { url } from "components/ApiUrl/ApiUrl";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

function AllPtPeriod() {
  const [loadingText, setLoadingText] = useState("");
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const clickAction = (data: any) => {
    Router.push("/customer-details?id=" + data.id);
  };
  
  const token =typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";

  useEffect(() => {
    setLoadingText("Loading...");
    getGemData(10, page);
  }, [page]);

  const getGemData = (limit: number, page: number) => {
    axios.get(`${url}api/admin/ptperiod/all`,{headers:{Authorization:`Bearer ${token}`}}).then((res) => setData(res.data));
  };
  return (
    <>
      <Container activeBar={"PtPeriod"} />
      <div className="main-content">
        <div className="m-4">
        <div className="flex-style">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit"  href="/editable-values-list" >
        <h3 className='breadcumbs-pointer '> Editable Values</h3>
        </Link>
        <Typography color="textPrimary" ><h3 className='breadcumbs'>PT Period</h3></Typography>
      </Breadcrumbs>
      
          <PageHead
            setOpen={setOpen}
            open={open}
            FilterButton={true}
            addButton={'/pt-period'}
          />
         </div> <div>
            <Collapse in={open}>
              <div id="example-collapse-text">
                <div className="col-sm-12 row align-items-center">
                  <div className="col-sm-9 d-flex gap-2 align-items-center mb-2">
                    {" "}
                    Search <input type="text" className="form-control" />
                  </div>
                  <div className="col-sm-3 d-flex gap-2 align-items-center mb-2">
                    {" "}
                    Status
                    <Form.Select aria-label="Default select example">
                      <option>Select Gem Name</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </div>
                <hr className="hr-collapse" />
                <div className="text-end me-2">
                  <button className="btn-dark-ouline width-auto btn me-4">
                    {" "}
                    Clear filter{" "}
                  </button>
                  <button className="btn-dark-filter btn width-auto">
                    {" "}
                    Filter{" "}
                  </button>
                </div>
              </div>
            </Collapse>
          </div>
          <Table className="gem-family">
            <thead>
              <tr>
                <th className="col-sm-3 align-item-right">NAME</th>
                <th className="col-sm-6 align-item-right"> </th>
              </tr>
            </thead>
            {data?.map((dt) => {
                  return (
                    <Link
                    href={`/pt-period?id=${dt._id}`}
                    className="btn btn-sm btn-primary mr-1"
                  >
            <tbody>
              <>
              
                    <tr>
                      <td>{dt.name}</td>
                      <td className="text-end fontsize">
                        <FaRegHandRock />
                      </td>
                    </tr>
                 
              </>
            </tbody>
            </Link>
              );
            })}
          </Table>
        </div>
      </div>
    </>
  );
}

export default AllPtPeriod;
