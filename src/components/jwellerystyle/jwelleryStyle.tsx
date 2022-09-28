import React, { ChangeEvent, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Router, { useRouter } from "next/router";
import axios from "axios";
import Container from "components/_common/Container";
import showToaster from 'components/_common/Toaster/Toaster';
import { url } from "components/ApiUrl/ApiUrl";
import { Field, Formik } from "formik";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";

function JwelleryStyle() {
  const [name, setName] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logo, setLogo] = useState("");
  const router = useRouter();
  const [subName, setSubName] = useState("");
  
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";

  //Update By ID
  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`${url}api/admin/jewellerystyle/${router.query.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setName(res?.data?.name),
            setSubName(res?.data?.subName),
            setLogo(`${url}` + res.data.image);
        });
    }
  }, [router.query.id]);

  const imageOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      setLogoFile(e.target.files[0]);
      file2Base64(e.target.files[0]).then((img: string) => {
        setLogo(img);
      });
    }
  };
  const file2Base64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || "");
      reader.onerror = (error) => reject(error);
    });
  };

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
              <Link color="inherit" href="/all-jewelery-style">
                <h3 className="dynamic-breadcumbs">Jewellery Style</h3>
              </Link>
            </Typography>
            <Typography color="textPrimary">
              <h3 className="dynamic-breadcumbs">{name}</h3>
            </Typography>
          </Breadcrumbs>
        </div>
        <Formik
          initialValues={{
            name: name.length ? name : "",
            subName: subName.length ? subName : "",
            image: logo,
          }}
          onSubmit={(values) => {
            const formData = new FormData();
            formData.append("image", logoFile || values.image);
            formData.append("name", name);
            formData.append("subName", subName);
            // router.id
            if (router.query.id === undefined) {
              axios
                .post(`${url}api/admin/jewellerystyle`, formData, {
                  headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                  },
                })
                .then((result) => {
                  showToaster("success", "jewellerystyle Added Successfully");
                })
                .catch((err) => {
                  showToaster("error", "jewellerystyle Not Inserted ");
                });
              Router.push("/all-jewelery-style");
            } else {
              axios
                .put(
                  `${url}api/admin/jewellerystyle/${router.query.id}`,
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                      Authorization: `Bearer ${token}`,
                    },
                  }
                )
                .then((result) => {
                  showToaster("success", "jewellerystyle Update Successfully");
                })
                .catch((err) => {
                  showToaster("error", "jewellerystyle Not Update");
                });
            }
            Router.push("/all-jewelery-style");
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <div className="m-4">
                <div className="cards">
                  <div className="row align-items-center ">
                    <div className="col-sm-3">
                      <h6 className="label-text bold">Jewellery Style</h6>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-sm-3 utext">Image</div>
                    <div className="col-sm-9">
                      <div className="col-sm-4 align-items-center d-flex">
                        <div className="imgClass">
                          <img
                            src={
                              logo
                                ? logo
                                : "http://192.168.0.110:3001/uploads/gemshape/transparent.png"
                            }
                            //alt="logo"
                            //className="images-box"
                            width="90"
                            height="80"
                          />
                        </div>
                        <label
                          className="btn-upload mt-2"
                          htmlFor="file-upload"
                        >
                          Choose File
                        </label>

                        <Field
                          type="file"
                          name="image"
                          onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            imageOnChange(event);
                          }}
                          className="d-none"
                          id="file-upload"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-sm-3 utext">Name</div>
                    <div className="col-sm-9">
                      <div className="col-sm-4 align-items-center">
                        <Field
                          type="text"
                          placeholder="name"
                          className="form-control"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-sm-3 utext">Subname</div>
                    <div className="col-sm-9">
                      <div className="col-sm-4 align-items-center">
                        <Field
                          type="text"
                          placeholder="subName"
                          className="form-control"
                          name="subName"
                          value={subName}
                          onChange={(e) => setSubName(e.target.value)}
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
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default JwelleryStyle;
