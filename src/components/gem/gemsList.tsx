import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Router from "next/router";
import axios from "axios";
import Container from "components/_common/Container";
import PageHead from "components/_common/PageHead";
import CustomTable from "components/_common/CustomTable";
import { url } from "components/ApiUrl/ApiUrl";


function GemsList() {
  const [loadingText, setLoadingText] = useState("");
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(5);
  const [tableData, setTableData] = useState([]);
  const [keyValue, setKeyValue] = useState({
    imageHtml: "IMAGE",
    title: "TITLE",
    id: "ID",
    gemType: "GEM TYPE",
    color: "COLOUR",
    shape: "SHAPE",
    variety: "VARIETY",
    certificateNumber: "CERTIFICATE NR.",
    // supplier: "SUPPLIER",
    countryOfOrigin: "COUNTRY",
    laboratory: "LAB",
    // isStarHtml: <Images icon={star} alt={"..."} width={20} height={20} />,
    // price: <Images icon={price} alt={"..."} width={20} height={20} />,
    // percentage: <Images icon={percentage} alt={"..."} width={20} height={20} />,
    status: "STATUS",
  });

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";

  const clickAction = (data: any) => {
    Router.push("/gem-details?id=" + data.id);
  };

  const setImageHtml = (imageUrl: any) => {
    return <img src={imageUrl} alt={"..."} width={30} height={30} />;
  };

  const setStatusView = (status: String) => {
    if (status === "active") {
      return <span style={{ color: "green" }}>• Active</span>;
    } else {
      return <span style={{ color: "red" }}>• In-Active</span>;
    }
  };

  useEffect(() => {
    //setLoadingText('Loading...');
    getCustomerData();
  }, [page]);

  let tableDataObj = {};

  const getCustomerData = () => {
    axios
      .get(`${url}api/admin/gems/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setTableData(res.data);
      });
  };

  return (
    <>
      <Container activeBar={"gems"} />
      <div className="main-content">
        <div className="m-4">
          <PageHead
            title="Gems"
            smallCountValue={10}
            setOpen={setOpen}
            open={open}
            FilterButton={true}
            exportButton={true}
            addButton={"/add-gem"}
          />
          <div>
            <Collapse in={open}>
              <div id="example-collapse-text">
                <div className="col-sm-12 row align-items-center">
                  <div className="col-sm-12 d-flex gap-2 align-items-center">
                    {" "}
                    Search <input type="text" className="form-control" />{" "}
                  </div>
                </div>

                <div className="col-sm-12 row align-items-center mt-3">
                  <div className="col-sm-4">
                    <div className="col-sm-12 d-flex gap-2 align-items-center">
                      <b>PRICE</b>
                    </div>
                    <div className="col-sm-12 row align-items-center mt-2">
                      <div className="col-sm-6 d-flex gap-2 align-items-center mb-2">
                        {" "}
                        From
                        <input type="text" className="form-control" />
                      </div>

                      <div className="col-sm-6 d-flex gap-2 align-items-center mb-2">
                        {" "}
                        To
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="col-sm-12 d-flex gap-2 align-items-center">
                      <b>SIZE</b>
                    </div>
                    <div className="col-sm-12 row align-items-center mt-2">
                      <div className="col-sm-6 d-flex gap-2 align-items-center mb-2">
                        {" "}
                        From
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-sm-6 d-flex gap-2 align-items-center mb-2">
                        {" "}
                        To
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2 d-flex gap-2 align-items-center mt-4">
                    {" "}
                    Status
                    <Form.Select aria-label="Default select example">
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </div>

                <div className="col-sm-12 row align-items-center mt-3">
                  <div className="col-sm-4 d-flex gap-2 align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />{" "}
                    &nbsp; Show only with discount
                  </div>
                </div>

                <div className="col-sm-12 row align-items-center mt-2">
                  <div className="col-sm-3 d-flex gap-2 align-items-center mb-2">
                    {" "}
                    Gem type
                    <Form.Select aria-label="Default select example">
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div className="col-sm-3 d-flex gap-2 align-items-center mb-2">
                    {" "}
                    Colour
                    <Form.Select aria-label="Default select example">
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div className="col-sm-3 d-flex gap-2 align-items-center mb-2">
                    {" "}
                    Shape
                    <Form.Select aria-label="Default select example">
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div className="col-sm-3 d-flex gap-2 align-items-center mb-2">
                    {" "}
                    Variety
                    <Form.Select aria-label="Default select example">
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </div>

                <div className="col-sm-12 row align-items-center mt-2">
                  <div className="col-sm-3 d-flex gap-2 align-items-center mb-2">
                    {" "}
                    Country
                    <Form.Select aria-label="Default select example">
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div className="col-sm-3 d-flex gap-2 align-items-center mb-2">
                    {" "}
                    Lab
                    <Form.Select aria-label="Default select example">
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div className="col-sm-4 d-flex gap-2 align-items-center mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />{" "}
                    &nbsp; Marked as banners
                  </div>
                </div>

                <hr className="hr-collapse" />
                <div className="text-end me-4">
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
          <div className="mt-3">
            {loadingText ? (
              <p style={{ textAlign: "center" }}>{loadingText}</p>
            ) : (
              <CustomTable
                page={page}
                totalPage={totalPage}
                setPage={setPage}
                keyValue={keyValue}
                tableData={tableData}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default GemsList;
