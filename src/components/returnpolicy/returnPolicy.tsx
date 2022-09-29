import React, { useEffect, useState } from "react";
import Container from "components/_common/Container";
import axios from "axios";
import { url } from "components/ApiUrl/ApiUrl";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";
import TextEditor from "components/texteditor/texteditor";
import { useRouter } from "next/router";

function ReturPolicy() {
  const [data, setData] = useState("");
  const router = useRouter();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";

  //Update By ID
  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`${url}api/admin/returnpolicy/${router.query.id}`, {
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
            <Typography color="textPrimary">
              <Link color="inherit" href="/editable-values-list">
                <h3 className="dynamic-breadcumbs">Editable Values</h3>
              </Link>
            </Typography>
            <Typography color="textPrimary">
              <Link color="inherit" href="/editable-values-list">
                <h3 className="dynamic-breadcumbs">Return Policy</h3>
              </Link>
            </Typography>
            <Typography color="textPrimary">
              <h3 className="dynamic-breadcumbs">{data}</h3>
            </Typography>
          </Breadcrumbs>
        </div>
        <>
          <div className="m-4">
            <div className="cards">
              <div className="row align-items-center ">
                <div className="col-sm-3">
                  <h6 className="label-text bold">Return Policy</h6>
                </div>
              </div>
              <div className="row mt-4">
                <TextEditor />
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default ReturPolicy;
