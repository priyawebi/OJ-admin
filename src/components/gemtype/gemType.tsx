import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Container from "components/_common/Container";
import { url } from "components/ApiUrl/ApiUrl";
import axios from "axios";
import showToaster from 'components/_common/Toaster/Toaster';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

function GemType() {
  const [gemName, setGemName] = useState("");
  const [checked, setChecked] = useState([]);
  const [ugemNames, stUGemNames] = useState("");
  const [checkList, setCheckList] = useState([]);
  const [defaultChecked, setDefaultChecked] = useState(false);
  const router = useRouter();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";

  const handleGemName = (event) => {
    const gemName = event.target.value;
    stUGemNames(gemName);
  };

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
  const myArray = checkedItems.split(", ");

  // Update By ID
  useEffect(() => {
    axios
      .get(`${url}api/admin/jewellerytype/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const onlyValues = res?.data?.map((d) => d.name);
        console.log("onlyValues------------", onlyValues);
        setCheckList(onlyValues);
      });
  }, []);

  // get All data
  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`${url}api/admin/gem/type/${router.query.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setGemName(res.data.name);
          const CheckedeValues = res?.data?.jewelleryType?.map((d) => d);
          console.log("CheckedeValues------------", CheckedeValues);
          setDefaultChecked(CheckedeValues);
        });
    }
  }, [router.query.id]);

  const submitGemsType = async (e) => {
    e.preventDefault();
    let resultObj = {
      name: ugemNames,
      jewelleryType: myArray,
    };

    if (router.query.id === undefined) {
      axios
        .post(`${url}api/admin/gem/type`, resultObj, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          showToaster("success", "GemType Added Successfully");
        })
        .catch((err) => {
          showToaster("error", "GemType Not Added");
        });
      Router.push("/all-gem-type");
    } else {
      axios
        .put(`${url}api/admin/gem/type/${router.query.id}`, resultObj, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          showToaster("success", "GemType Update Successfully");
        })
        .catch((err) => {
          showToaster("error", "GemType Not Update ");
        });
    }
    Router.push("/all-gem-type");
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
              <Link color="inherit" href="/all-gem">
                <h3 className="dynamic-breadcumbs">GEM Shape</h3>
              </Link>
            </Typography>
            <Typography color="textPrimary">
              <h3 className="dynamic-breadcumbs">{gemName}</h3>
            </Typography>
          </Breadcrumbs>
        </div>

        <form onSubmit={submitGemsType}>
          <div className="m-4">
            <div className="cards">
              <div className="row align-items-center ">
                <div className="col-sm-3">
                  <h6 className="label-text bold">GEM Type</h6>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 utext">Name</div>
                <div className="col-sm-9">
                  <div className="col-sm-4 align-items-center">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Gem name"
                      name="gemName"
                      onChange={(e) => handleGemName(e)}
                      defaultValue={gemName}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <h6 className="label-text bold">Jewellery type</h6>
                <div className="col-sm-9">
                  <div className="col-sm-4 align-items-center">
                    <div className="col-sm-12 mt-4">
                      {checkList.map((item, index) => (
                        <div key={index} className="mt-4 utext">
                          <input
                            value={item}
                            // checked={defaultChecked[0]}
                            type="checkbox"
                            onChange={handleCheck}
                          />
                          &nbsp;
                          <span className={isChecked(item)}>{item}</span>
                        </div>
                      ))}
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
          </div>
        </form>
      </div>
    </>
  );
}

export default GemType;
