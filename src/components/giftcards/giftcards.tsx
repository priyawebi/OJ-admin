import React, { Fragment, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Router from "next/router";
import Container from "components/_common/Container";
import Images from "components/_common/Images";
import { url } from "components/ApiUrl/ApiUrl";
import axios from "axios";
import showToaster from 'components/_common/Toaster/Toaster';
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";

function GiftCards() {
  //states
  const [image, setGiftCardImage] = useState("");
  const [giftCardVariety, setGiftCardVariety] = useState([]);
  const [file, setFile] = useState();
  const [inputFields, setInputFields] = useState([{ content: "" }]);

  //Token for validation
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";

  //get giftCard Image from Input
  const handleGiftCardImage = (event) => {
    const image = event.target.files[0];
    setFile(URL.createObjectURL(event.target.files[0]));
    setGiftCardImage(image);
  };

  //get GiftCard Variety from Input
  const handleGiftCardVariety = async (event, index) => {
    const { name, value } = event.target;
    giftCardVariety[name] = value;
    setGiftCardVariety({ ...giftCardVariety });
  };

  //for add  dynamic variety fields
  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ content: "" });
    setInputFields(values);
  };

  //for Remove dynamic variety fields
  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  //submit GiftCards
  const submitGiftCards = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("varieties", JSON.stringify(giftCardVariety));
    axios
      .post(`${url}api/admin/giftcard`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        showToaster("success", "Giftcard Added Successfully");
      })
      .catch((err) => {
        showToaster("error", "Giftcard Not Added ");
      });
    Router.push("/editable-values-list");
  };

  return (
    <>
      <Container activeBar={"dyj"} />
      <div className="main-content">
        <form onSubmit={submitGiftCards}>
          <div className="m-4">
            <div className="mt-4 m-4">
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Typography color="textPrimary">
                  <Link color="inherit" href="/editable-values-list">
                    <h3 className="dynamic-breadcumbs">Editable Values</h3>
                  </Link>
                </Typography>
                <Typography color="textPrimary">
                  <h3 className="dynamic-breadcumbs">Gift Cards</h3>
                </Typography>
              </Breadcrumbs>
            </div>
            <div className="cards">
              <div className="row align-items-center ">
                <div className="col-sm-3">
                  <h6 className="label-text bold">GiftCard</h6>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 utext">Image</div>
                <div className="col-sm-9">
                  <div className="col-sm-4 align-items-center d-flex">
                    <div className="imgClass">
                      <Images
                        icon={file}
                        //src={file}
                        //alt="loginImage"
                        className="images-box"
                        width="67px"
                        height="70px"
                      />
                    </div>
                    <label className="btn-upload mt-2" htmlFor="file-upload">
                      Choose File
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      className="d-none"
                      name="image"
                      onChange={(e) => handleGiftCardImage(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="row align-items-center mt-4">
                <div className="col-sm-3">
                  <h6 className="label-text bold">Varieties</h6>
                </div>
                <div className="mt-4">
                  <Table className="gem-family">
                    <thead>
                      <tr>
                        <th className="col-sm-6">VARIETY NAME</th>
                        <th className="col-sm-6"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {inputFields.map((inputField, index) => (
                        <Fragment key={`${inputField}~${index}`}>
                          <tr>
                            <td>
                              <div className="col-sm-6">
                                <input
                                  type="text"
                                  className="form-control rounded"
                                  id="content"
                                  name={`giftCardVariety[${index}]`}
                                  onChange={(e) =>
                                    handleGiftCardVariety(e, index)
                                  }
                                />
                              </div>
                            </td>
                            <td className="text-end">
                              <button
                                className="text-end"
                                type="button"
                                onClick={() => handleRemoveFields(index)}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        </Fragment>
                      ))}
                    </tbody>
                  </Table>
                  <div>
                    <div className="edit-value-btn">
                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() => handleAddFields()}
                      >
                        + Add another variety
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footersave">
            <div className="footer-1">
              <div className="row mt-3 justify-content-end">
                <div className="col-sm-3">
                  <button className="btn-save">Save Changes </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default GiftCards;
