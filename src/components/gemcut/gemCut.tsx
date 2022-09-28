// import React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
// import ReactDOM from "react-dom";
import ReactSelect from "react-select";

import React, { Fragment, useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Formik, Field, Form, FieldArray } from "formik";
import Router, { useRouter } from "next/router";
import axios from "axios";
import Container from "components/_common/Container";
import showToaster from 'components/_common/Toaster/Toaster';
import { url } from "components/ApiUrl/ApiUrl";
import router from "next/router";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Prev } from "react-bootstrap/lib/Pagination";
import Link from "next/link";

function GemFamilyVariety() {
  const router = useRouter();
  const [familynamedata, setFamilyNameData] = useState("");
  const [value, setValue] = useState({
    CatName: "Bill",
    InCatAbbreviation: "Luo",
  });
  const [familyvarietydata, setFamilyVarietyData] = useState({
    familyVariety: [],
    inCatAbbreviation: [],
  });
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      test: [{ CatName: "Bill", InCatAbbreviation: "Luo" }],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "test",
    }
  );
  // const [incatabbreviationdata, setInCatAbbreviationData] = useState({
  //   inCatAbbreviation: []
  // });

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";

  const initialValues = {
    familyName: "",
    familyVariety: [],
    inCatAbbreviation: [],
  };
  console.log(familyvarietydata, "--------------------familyvarietydata");
  // Update By ID
  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`${url}api/admin/gem/cut/${router.query.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setFamilyNameData(res?.data?.cutName),
            setFamilyVarietyData((prev) => ({
              ...prev,
              familyVariety: res?.data?.inCatName,
            }));
          setFamilyVarietyData((prev) => ({
            ...prev,
            inCatAbbreviation: res?.data?.inCatAbbreviation,
          }));
          console.log("incatabbreviationdata", res?.data?.inCatName);
        });
    }
  }, [router.query.id]);

  const submitGemsFamilyVariety = async (values) => {
    console.log(values,"-----------------values")
    let data = {
      familyName: familynamedata,
      familyVariety: values.familyVariety.map((d) => d.name),
    };
    // router.id
    if (router.query.id === undefined) {
      axios
        .post(`${url}api/admin/gem/cut`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          showToaster("success", "GemCut Added Successfully");
        })
        .catch((err) => {
          showToaster("error", "GemCut Not Inserted ");
        });

      Router.push("/all-gem-cut");
    } else {
      axios
        .put(`${url}api/admin/gem/cut/${router.query.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          showToaster("success", "GemCut Update Successfully");
        })
        .catch((err) => {
          showToaster("error", "GemCut Not Update ");
        });
    }
    Router.push("/all-gem-cut");
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
              <Link color="inherit" href="/all-gem-cut">
                <h3 className="dynamic-breadcumbs">GemCut</h3>
              </Link>
            </Typography>
            <Typography color="textPrimary">
              <h3 className="dynamic-breadcumbs">{familynamedata}</h3>
            </Typography>
          </Breadcrumbs>
        </div>
        <Formik
          enableReinitialize
          initialValues={familyvarietydata}
          onSubmit={submitGemsFamilyVariety}
          render={({ values, errors, touched, handleReset,handleChange}) => {
            return (
              <Form>
                <div className="m-4">
                  <div className="cards">
                    <div className="row align-items-center ">
                      <div className="col-sm-3">
                        <h6 className="label-text bold">Cut Name</h6>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-sm-3 utext">Cut Name</div>
                      <div className="col-sm-9">
                        <div className="col-sm-4 align-items-center">
                          <Field
                            name="familyName"
                            placeholder="Family Name"
                            type="text"
                            className="form-control rounded"
                            value={familynamedata}
                            // onChange={(e) => setFamilyNameData(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center mt-4">
                      <div className="col-sm-3">
                        <h6 className="label-text bold">Inner categories</h6>
                        <br></br>
                      </div>
                      <div className="mt-12">
                        <Table className="gem-family">
                          <thead>
                            <tr>
                              <th className="col-sm-4">Name</th>
                              <th className="col-sm-4">Abbreviation</th>
                              <th className="col-sm-4"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <FieldArray
                              name="familyVariety"
                              render={({ insert, remove, push }) => (
                                <>
                                  <div className="tbfield">
                                    {values.familyVariety.length > 0 &&
                                      values.inCatAbbreviation.length > 0 &&
                                      values.familyVariety.map(
                                        (
                                          familyVariety,
                                          inCatAbbreviation,
                                          index
                                        ) => (
                                          <tr>
                                            <>
                                              <td className="col-sm-4 tbfield">
                                                <Field
                                                  name={`familyVariety.${index}.name`}
                                                  placeholder="FamilyVariety"
                                                  type="text"
                                                  className="form-control rounded"
                                                  defaultValue={familyVariety}
                                                  onChange={handleChange}

                                                  // onChange={e=>setFieldValue(`familyVariety.${index}.name`,e.target.value)}
                                                />
                                                {/* {errors.familyVariety &&
                                                  errors.familyVariety[index] &&
                                                  errors.familyVariety[index]
                                                    .name &&
                                                  touched.familyVariety &&
                                                  touched.familyVariety[index]
                                                    .name && (
                                                    <div className="field-error">
                                                      {
                                                        errors.familyVariety[
                                                          index
                                                        ].name
                                                      }
                                                    </div>
                                                  )} */}
                                              </td>

                                              <td className="col-sm-4 tbfield">
                                                <Field
                                                  name={`inCatAbbreviation.${index}.name`}
                                                  placeholder="inCatAbbreviation"
                                                  type="text"
                                                  className="form-control rounded"
                                                  defaultValue={
                                                    familyvarietydata
                                                      .inCatAbbreviation[
                                                      inCatAbbreviation
                                                    ]
                                                  }
                                                  
                                                  // onChange={e=>setFieldValue(`inCatAbbreviation.${index}.name`,e.target.value)}
                                                />
                                                {/* {errors.inCatAbbreviation &&
                                                  errors.inCatAbbreviation[
                                                    index
                                                  ] &&
                                                  errors.inCatAbbreviation[
                                                    index
                                                  ].name &&
                                                  touched.inCatAbbreviation &&
                                                  touched.inCatAbbreviation[
                                                    index
                                                  ].name && (
                                                    <div className="field-error">
                                                      {
                                                        errors
                                                          .inCatAbbreviation[
                                                          index
                                                        ].name
                                                      }
                                                    </div>
                                                  )} */}
                                              </td>

                                              <td className="col-sm-4 text-end">
                                                <button
                                                  className="text-end"
                                                  type="button"
                                                  onClick={() => remove(index)}
                                                >
                                                  Remove
                                                </button>
                                              </td>
                                            </>
                                          </tr>
                                        )
                                      )}
                                    {/* values bracket close */}
                                  </div>

                                  <div className="edit-value-btn">
                                    <button
                                      className="btn btn-link"
                                      type="button"
                                      onClick={() => push("")}
                                      // onChange={(e) =>
                                      //   setValue({
                                      //     CatName: e.target.value,
                                      //     InCatAbbreviation: e.target.value,
                                      //   })
                                      // }
                                    >
                                      + Add another variety
                                    </button>
                                  </div>
                                </>
                              )}
                              //  render bracket close
                            />
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footersave">
                  <div className="footer-1">
                    <div className="row mt-3 justify-content-end">
                      <div className="col-sm-3">
                        <button className="btn-save" type="submit">
                          Save{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        />
      </div>
    </>
  );
}

export default GemFamilyVariety;
