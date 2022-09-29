import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Formik, Field, Form, FieldArray } from "formik";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Table from "react-bootstrap/Table";
import { MultiSelect } from "react-multi-select-component";
import { faFile, faVideo, faXmark } from "@fortawesome/free-solid-svg-icons";
import Container from "components/_common/Container";
import showToaster from 'components/_common/Toaster/Toaster';
import { url } from "components/ApiUrl/ApiUrl";
import { getJwelleryTypes } from "redux/action/JwelleryType";
import { getColorTypes } from "redux/action/Color";
import { getCutTypes } from "redux/action/Cut";
import { getCreatorTypes } from "redux/action/Creator";
import axios from "axios";
import Router from "next/router";
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';


const imageMimeType = /image\/(png|jpg|jpeg)/i;


  //access Token for validation
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";


const options3 = [
  { label: "Australia", value: "Australia" },
  { label: "India", value: "India" },
  { label: "USA", value: "USA" },
  { label: "UK", value: "UK" },
];
function GemDetails() {
  const token =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";
  const router = useRouter();
  const [selectedcolor, setSelectedColor] = useState([]);
  const [selectedjewellerytype, setSelectedJewelleryType] = useState([]);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const dispatch = useDispatch();
  const [firstColor, setFirstColor] = useState("");
  const [secondColor, setSecondColor] = useState("");
  const [mount, setMount] = useState(false);
  const [data, setData] = useState([]);
  const [shape, setShape] = useState([]);
  const [jewellerytype, setJewellerytype] = useState([]);
  const [color, setColor] = useState([]);
  const [creator, setCreator] = useState([]);
  const [family, setFamily] = useState([]);
  const [images, setImages] = useState([]);
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [proportions, setProportions] = useState("");
  const [symmetric, setSymmetric] = useState("");
  const [polish, setPolish] = useState("");

  const [size, setSize] = useState();

  const [image_cinemagraph, SetImage_Cinemagraph] = useState("");
  const [image_tsixty, SetImage_Tsixty] = useState("");
  // const [countries, setCountries] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState({});

  //for cinemagraphImage
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const [files, setFiles] = useState(null);
  const [fileDataURLs, setFileDataURLs] = useState(null);

  const [filed, setFiled] = useState([]);

  const [fileDataURLd, setFileDataURLd] = useState(null);

  const [filecf, setFileCF] = useState(null);

  const [fileDataURLCF, setFileDataURLdCF] = useState(null);

  const JwellleryTypeData = useSelector(
    (state: RootState) => state?.jwelleryType?.jwelleryTypeData
  );

  const ColorTypeData = useSelector(
    (state: RootState) => state?.color?.colorTypeData
  );

  const CreatorTypeData = useSelector(
    (state: RootState) => state?.creator?.creatorTypeData
  );

  const CutTypeData = useSelector(
    (state: RootState) => state?.cut?.cutTypeData
  );

useEffect(()=>{
if(CutTypeData!=undefined){
  const cutArray = CutTypeData.filter((res)=>res.cutName==="Proportions")
}},[CutTypeData])


  useEffect(() => {
    //dispatch(loader(true));
    dispatch(getJwelleryTypes(token) as unknown as AnyAction);
  }, [token,dispatch]);

  useEffect(() => {
    //dispatch(loader(true));
    dispatch(getColorTypes(token) as unknown as AnyAction);
  }, [token,dispatch]);

  useEffect(() => {
    //dispatch(loader(true));
    dispatch(getCutTypes(token) as unknown as AnyAction);
  }, [token,dispatch]);

  useEffect(() => {
    //dispatch(loader(true));
    dispatch(getCreatorTypes(token) as unknown as AnyAction);
  }, [token,dispatch]);

  const options1 = JwellleryTypeData?.map(
    (dt: { name: string; }) => ({
      value: dt?.name,
      label: (
        <div>
          {dt?.name}{" "}
        </div>
      ),
    })
  );

  const options2 = ColorTypeData?.map(
    (dt: { name: string; }) => ({
      value: dt?.name,
      label: (
        <div>
          {dt?.name}{" "}
        </div>
      ),
    })
  );

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const changeHandlers = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFiles(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (files) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURLs(result);
        }
      };
      fileReader.readAsDataURL(files);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [files]);

  const changeHandlerds = (evnt) => {
    const file = evnt.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    const selectedFIles = [];
    const targetFiles = evnt.target.files;
    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      return selectedFIles.push(file);
    });
    setFiled(selectedFIles);
  };
  // useEffect(() => {
  //   let fileReader,
  //     isCancel = false;
  //   //change if condition variable
  //   if (filed) {
  //     fileReader = new FileReader();
  //     fileReader.onload = (e) => {
  //       const { result } = e.target;
  //       if (result && !isCancel) {
  //         setFileDataURLd(result);
  //       }
  //     };
  //     fileReader.readAsDataURL(filed); //change this variable
  //   }
  //   return () => {
  //     isCancel = true;
  //     if (fileReader && fileReader.readyState === 1) {
  //       fileReader.abort();
  //     }
  //   };
  // }, [filed]); //change this variable

  const changeHandlerdCF = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFileCF(file);
  };
  useEffect(() => {
    let fileReader,
      isCancel = false;
    //change if condition variable
    if (filecf) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURLdCF(result);
        }
      };
      fileReader.readAsDataURL(filecf); //change this variable
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [filecf]); //change this variable

  useEffect(() => {
    getGemData();
  }, []);

  const getGemData = () => {
    axios
      .get(`${url}api/admin/gem/type/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getFamilyVariety();
  }, []);

  const getFamilyVariety = () => {
    axios
      .get(`${url}api/admin/gem/family-variety/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setFamily(res.data));
  };

  useEffect(() => {
    getGemCreator();
  }, []);

  const getGemCreator = () => {
    axios
      .get(`${url}api/admin/creator/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setCreator(res.data));
  };

  useEffect(() => {
    getGemShape();
  }, []);

  const getGemShape = () => {
    axios
      .get(`${url}api/admin/gem/shape/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setShape(res.data));
  };


  // useEffect(() => {
  //   getGemColor();
  // }, []);

  // const getGemColor = () => {
  //   axios
  //     .get(`${url}api/admin/gem/color/all`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((res) => {setColor(res.data);
  //       const color = res?.data?.map(d => d);
  //     }
  //     );
  // };
 
  const initialValues = {
    status: "",
    gemType: "",
    images: "", //images upto 10
    cinemaGraph: "", //images upto 10
    threeSixtyImage: "", //three sixty image
    video: "",
    background: {},
    title: "",
    size: "",
    littleStory: "",
    gemfamily: "",
    variety: "",
    countryOfOrigin: "",
    color: "",
    lightEffect: "",
    jewelleryType: "",
    shape: "",
    dimensions: {},
    clarity: "",
    cut: "",
    price: "",
    discount: "",
    finalPrice: "",
    caratWeight: "",
    investorChoice: "",
    collectorItem: "",
    bluffStone: "",
    creators: "",
    certificate: "",
    laboratory: "",
    certificateNumber: "",
    certificateImage: "",
    dyj: "",
    details: "",
    notes: "",
  };


  const handleMultipleImages = (evnt) => {
    const selectedFIles = [];
    const targetFiles = evnt.target.files;
    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      return selectedFIles.push(file);
    });
    setImages(selectedFIles);
  };

  const handleRemoveImage = (index) => {
    var spliced = images.splice(index - 1, index);
    // setImages(spliced);
  };

  const submitAddGem = async (values) => {
    let selectedcolorValue = selectedcolor.map((dt) => {
      return dt.value;
    });

    let selectedjewellerytypeValue = selectedjewellerytype.map((dt) => {
      return dt.value;
    });
  

    let bgColors = {
      color_1: firstColor,
      color_2: secondColor,
    };

    let gemdimensions = {
      Lenght_mm: length,
      Width_mm: width,
      Depth_mm: depth,
    };

    let gcut = {
      proportions: proportions,
      symmetry: symmetric,
      polish: polish,
    };

    let gsize = {
      size: values.size,
      unit: values.unit,
    };
    let gcreator = [
      {
        name: values.creators[0].name,
        type: values.type,
      },
    ];

    // api test
    let gdyj = [
      {
        gem: "gem name",
        id: 1000,
        image: "uploads/dyj/9ws61-1663917105808.jpg",
      },
    ];

    let gdetails = [
      {
        photoDescription: values.littleStory,
        photoCredit: values.details_photocredit,
      },
    ];

    let data = {
      status: values.status,
      gemType: values.gemType,
      images: images,
      cinemaGraph: file,
      // cinemaGraph: images[0],
      threeSixtyImage: files,
      // threeSixtyImage: images[0],

      video: "video",
      background: bgColors,
      title: values.title,
      size: values.size,
      littleStory: values.littleStory,
      gemfamily: values.gemfamily,
      variety: values.familyvarieties,
      countryOfOrigin: values.countryOfOrigin,
      color: selectedcolorValue,
      lightEffect: values.lightEffect,
      jewelleryType: selectedjewellerytypeValue,
      shape: values.shape,
      dimensions: gemdimensions,
      clarity: values.clarity,
      // proportions: values.proportions,
      cut: gcut,
      price: values.price,
      discount: values.discount,
      finalPrice: values.finalPrice,
      caratWeight: values.caratWeight,
      investorChoice: values.investorChoice,
      collectorItem: values.collectorItem,
      bluffStone: values.bluffStone,
      creators: values.creators,
      certificate: values.certificate,
      laboratory: values.laboratory,
      certificateNumber: values.certificateNumber,
      certificateImage: filecf,
      // certificateImage: images[0],
      dyj: values.dyj,
      // details: filed,
      details: images[0],
      notes: values.details_notes,
    };
    const formData = new FormData();
    formData.append("status", "Active");
    formData.append("gemType", data.gemType);
    formData.append("images", images);
    formData.append("cinemaGraph", file);
    formData.append("threeSixtyImage", files);
    formData.append("video", data.video);
    formData.append("background", JSON.stringify(data.background));
    formData.append("title", data.title);
    formData.append("size", JSON.stringify(gsize));
    formData.append("littleStory", data.littleStory);
    formData.append("family", data.gemfamily);
    formData.append("variety", data.variety);
    formData.append("countryOfOrigin", data.countryOfOrigin);
    formData.append("color", JSON.stringify(data.color));
    formData.append("lightEffect", data.lightEffect);
    formData.append("jewelleryType", JSON.stringify(data.jewelleryType));
    formData.append("shape", data.shape);
    formData.append("dimensions", JSON.stringify(data.dimensions));
    formData.append("clarity", data.clarity);
    formData.append("cut", JSON.stringify(data.cut));
    formData.append("price", data.price);
    formData.append("discount", data.discount);
    formData.append("finalPrice", data.finalPrice);
    formData.append("caratWeight", data.caratWeight);
    formData.append("investorChoice", data.investorChoice);
    formData.append("collectorItem", data.collectorItem);
    formData.append("bluffStone", data.bluffStone);
    formData.append("creators", JSON.stringify(gcreator));
    formData.append("certificate", data.certificate);
    formData.append("laboratory", data.laboratory);
    formData.append("certificateNumber", data.certificateNumber);
    formData.append("certificateImage", filecf);
    formData.append("dyj", JSON.stringify(gdyj));
    formData.append(
      "detailsImages",
      "/home/webiwork553/Pictures/Screenshot from 2022-09-16 10-13-26.png"
    );
    formData.append("details", JSON.stringify(gdetails));
    formData.append("notes", data.notes);

    axios
      .post(`${url}api/admin/gems`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        showToaster("success", "GemsAdd Added Successfully");
      })
      .catch((err) => {
        showToaster("error", "GemsAdd Not Added");
      });
    Router.push("/gems-list");
  };

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
      <Container activeBar={"gems"} />
      {mount && (
        <div className="main-content">
          <Formik
            initialValues={initialValues}
            onSubmit={submitAddGem}
            render={({ values, errors, touched, handleReset }) => {
              return (
                <div className="m4">
                  <Form>
                    <Row>
                      <Col sm={router.query?.id ? 8 : 12}>
                        <div className="gemcards">
                        <h3 className="cards-header mb-3 mt-5 ">
                              Identification
                            </h3>
                          <div className="row align-items-center ">
                          </div>
                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Status</p>
                            </div>
                            <div className="col-sm-9">
                              <Field
                                as="select"
                                name="status"
                                className="form-control utext"
                              >
                                <option value="" >Select </option>
                                <option value="Active">Active</option>
                                <option value="Pending">Pending</option>
                                <option value="Sold Out">Sold Out</option>
                                <option value="Returned">
                                  Returned(to supplier)
                                </option>
                              </Field>
                            </div>
                          </div>

                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Gem type</p>
                            </div>
                            <div className="col-sm-9">
                              <Field
                                as="select"
                                name="gemType"
                                className="form-control"
                              >
                                <option value="">Select</option>
                                {data?.map((dt) => {
                                  return (
                                    <option value={dt.name}>{dt.name}</option>
                                  );
                                })}
                              </Field>
                            </div>
                          </div>

                          <div className="row mb-3">
                            <h3 className="cards-header mb-3 mt-5 ">
                              Presentation
                            </h3>
                            <div className="col-sm-3">
                              <p className="label-text utext">Images (up to 10)</p>
                            </div>
                            <div className="col-sm-9">
                              <div>
                                <label
                                  className="btn-upload utext"
                                  htmlFor="file-upload"
                                >
                                  Choose File
                                </label>
                                <input
                                  type="file"
                                  id="file-upload"
                                  name="images"
                                  className="d-none img-fluid"
                                  accept="image/*"
                                  onChange={handleMultipleImages}
                                  multiple
                                />
                              </div>
                              <div className="row mt-3">
                                {images.map((url, index) => {
                                  return (
                                    <div className="col-sm-4 image-sec">
                                      <div className="bg-pink">
                                        <img src={`${url}`+ url?.images}  className="img-fluid" />
                                    </div>
                                      <div className="border-cross-1">
                                        <FontAwesomeIcon
                                          className="icon-class pinkicon"
                                          icon={faXmark}
                                          onClick={() =>
                                            handleRemoveImage(index)
                                          }
                                          title="View"
                                        />
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Cinemagraph</p>
                            </div>
                            <div className="col-sm-8">
                              <Field
                                type="file"
                                id="image"
                                accept=".png, .jpg, .jpeg"
                                name="cinemaGraph"
                                onChange={changeHandler}
                              />

                              <div className="row mt-3">
                                <div className="col-sm-4 image-sec">
                                  <div className="bg-pink">
                                    {fileDataURL ? (
                                      <Image
                                        src={fileDataURL}
                                        alt="loginImage"
                                        width="52px"
                                        height="57px"
                                        className="img-fluid "
                                      />
                                    ) : null}
                                  </div>
                                  <div className="border-cross-1">
                                    <FontAwesomeIcon
                                      className="icon-class pinkicon"
                                      icon={faXmark}
                                      title="View"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">360 image</p>
                            </div>
                            <div className="col-sm-8">
                              <Field
                                type="file"
                                id="image"
                                accept=".png, .jpg, .jpeg"
                                name="threeSixtyImage"
                                onChange={changeHandlers}
                              />
                              <div className="row mt-3">
                                <div className="col-sm-4 image-sec">
                                  <div className="bg-pink">
                                    {fileDataURLs ? (
                                      <Image
                                        src={fileDataURLs}
                                        alt="loginImage"
                                        width="52px"
                                        height="57px"
                                        className="img-fluid "
                                      />
                                    ) : null}
                                    
                                  </div>
                                  <div className="border-cross-1">
                                    <FontAwesomeIcon
                                      className="icon-class pinkicon"
                                      icon={faXmark}
                                      title="View"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Video</p>
                            </div>
                            <div className="col-sm-6">
                              <div className="row align-items-center mt-3">
                                <div className="col-10 px-0">
                                  <div className="box-file">
                                    <FontAwesomeIcon
                                      icon={faVideo}
                                      className="icon-class"
                                      title="View"
                                    />
                                    <input
                                      type="file"
                                      id="file-upload"
                                      className="d-none"
                                      name="gemvideo"
                                      accept="video/*"
                                    />
                                    <span>Document.type</span>
                                  </div>
                                </div>
                                <div className="col-2">
                                  <div className="border-cross">
                                    <FontAwesomeIcon
                                      className="icon-class pinkicon"
                                      icon={faXmark}
                                      title="View"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-start my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Background</p>
                            </div>
                            <div className="col-sm-8">
                              <div>
                                <p className="label-text utext">Color 1</p>
                                  <Field
                                      type="text"
                                      //placeholder="color code"
                                      className="gcolorinputs"
                                      name="background"
                                      value={firstColor}
                                      disabled
                                    />  
                                    <Field
                                      type="color"
                                      //placeholder="color code"
                                      className="gcolorcodes"
                                      name="background"                          
                                      value={firstColor}
                                      onChange={(e) =>
                                      setFirstColor(e.target.value)
                                      }
                                    />
                              </div>
                              <div className="mt-3 ">
                                <p className="label-text utext">Color 2</p>

                                <div className="position-relative">
                                
                                     <Field
                                      type="text"
                                      //placeholder="color code"
                                      className="gcolorinputs"
                                      name="background"
                                      value={secondColor}
                                      disabled
                                    />  
                                    <Field
                                      type="color"
                                      //placeholder="color code"
                                      className="gcolorcodes"
                                      name="background"                          
                                      value={secondColor}
                                    onChange={(e) =>
                                      setSecondColor(e.target.value)
                                    }
                                    />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Title</p>
                            </div>
                            <div className="col-sm-8">
                              <Field
                                type="text"
                                name="title"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="row align-items-center mt-3 px-0">
                            <div className="col-sm-3">
                              <p className="label-text utext">Size (subtitle)</p>
                            </div>
                            <div className="col-sm-9 row gap-2">
                              <div className="col-sm-5 p-0">
                                <Field
                                  type="number"
                                  name="size"
                                  className="form-control"
                                  // onChange =
                                />
                              </div>
                              <div className="col-sm-5 p-0">
                                <Field
                                  as="select"
                                  name="unit"
                                  className="form-control utext"
                                >
                                  <option value="">Select</option>
                                  <option value="carat">carat</option>
                                  <option value="mm">mm</option>
                                  <option value="grams">grams</option>
                                </Field>
                              </div>
                            </div>
                          </div>

                          <div className="row  mt-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Little story</p>
                            </div>
                            <div className="col-sm-9">
                              <Field
                                name="littleStory"
                                as="textarea"
                                id="editor"
                                className="form-textarea"
                                rows={7}
                              />
                            </div>
                          </div>

                          <div className="row align-items-center my-3">
                            <h3 className="cards-header mb-3 mt-5">
                              Filter info
                            </h3>

                            <div className="col-sm-3">
                              <p className="label-text utext"> Family</p>
                            </div>
                            <div className="col-sm-8">
                              <Field
                                as="select"
                                name="gemfamily"
                                className="form-control utext"
                              >
                                <option value="">Select</option>
                                {family?.map((family) => {
                                  return (
                                    <option value={family.id}>
                                      {family.familyName}
                                    </option>
                                  );
                                })}
                              </Field>
                            </div>
                          </div>
                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext"> Variety</p>
                            </div>
                            <div className="col-sm-8">
                              <Field
                                as="select"
                                name="familyvarieties"
                                className="form-control"
                              >
                                <option value="">Select</option>
                                {family?.map((family) => {
                                  return (
                                    <option value={family.id}>
                                      {family.familyVariety}
                                    </option>
                                  );
                                })}
                              </Field>
                            </div>
                          </div>
                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Country of origin</p>
                            </div>
                            <div className="col-sm-8">
                              <Field
                                as="select"
                                name="countryOfOrigin"
                                className="form-control"
                              >
                                <option value="">Select</option>
                                <option value="Australia">Australia</option>
                                <option value="USA">USA</option>
                                <option value="Uk">Uk</option>
                                <option value="India">India</option>
                                <option value="Srilanka">Srilanka</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Nepal">Nepal</option>
                              </Field>
                            </div>
                          </div>
                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext"> Colour</p>
                            </div>
                            <div className="col-sm-8">
                              <div>
                                <MultiSelect
                                  options={options2}
                                  value={selectedcolor}
                                  onChange={setSelectedColor}
                                  labelledBy="Select color"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">LightEffect</p>
                            </div>
                            <div className="col-sm-8">
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-input"
                                  type="radio"
                                  name="lightEffect"
                                  id="inlineRadio1"
                                  value="true"
                                />
                                <label
                                  className="form-check-label utext"
                                  htmlFor="inlineRadio1"
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-input"
                                  type="radio"
                                  name="lightEffect"
                                  id="inlineRadio2"
                                  value="false"
                                />
                                <label
                                  className="form-check-label utext"
                                  htmlFor="inlineRadio2"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext"> Jewellery Type</p>
                            </div>
                            <div className="col-sm-8">
                              <div>
                                <MultiSelect
                                  options={options1}
                                  value={selectedjewellerytype}
                                  onChange={setSelectedJewelleryType}
                                  labelledBy="Select JwelleryType"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Shape</p>
                            </div>
                            <div className="col-sm-8">
                              <Field
                                as="select"
                                name="shape"
                                className="form-control"
                              >
                                <option value="">Select</option>
                                {shape?.map((dt) => {
                                  return (
                                    <option value={dt.name}>{dt.name}</option>
                                  );
                                })}
                              </Field>
                            </div>
                          </div>

                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Dimensions</p>
                            </div>
                            <div className="col-sm-8 px-0">
                              <div className="row ">
                                <div className="col">
                                  <p className="utext">Length(mm)</p>
                                  <Field
                                    type="text"
                                    name="length"
                                    className="form-control"
                                    onChange={(e) => setLength(e.target.value)}
                                  />
                                </div>
                                <div className="col">
                                  <p className="utext">Width(mm)</p>
                                  <Field
                                    type="text"
                                    name="gwidth"
                                    className="form-control"
                                    onChange={(e) => setWidth(e.target.value)}
                                  />
                                </div>
                                <div className="col">
                                  <p className="utext">Depth(mm)</p>
                                  <Field
                                    type="text"
                                    name="gdepth"
                                    className="form-control"
                                    onChange={(e) => setDepth(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Clarity</p>
                            </div>
                            <div className="col-sm-8">
                              <Field
                                type="text"
                                name="clarity"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="row align-items-start my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Cut</p>
                            </div>
                            <div className="col-sm-8 px-0">
                              <div>
                                <div className="row align-items-center mb-2">
                                  <div className="col-sm-3">
                                    <p className="label-text utext"> Proportions</p>
                                  </div>
                                  <div className="col-sm-9">
                                    <Field
                                      as="select"
                                      name="proportions"
                                      className="form-control"
                                      onChange={(e) =>
                                        setProportions(e.target.value)
                                      }
                                    >
                             <option value="">Select</option>
 {CutTypeData.filter(fd=>fd.cutName==="Proportions")[0].inCatName.map((md,idx)=>(<option value={md}>{md}</option>))}
                                    </Field>
                                  </div>
                                </div>
                                <div className="row align-items-center mb-2">
                                  <div className="col-sm-3">
                                    <p className="label-text utext"> Symmetry</p>
                                  </div>
                                  <div className="col-sm-9">
                                    <Field
                                      as="select"
                                      name="symmetric"
                                      className="form-control"
                                      onChange={(e) =>
                                        setSymmetric(e.target.value)
                                      }
                                    >
                              <option value="">Select</option>
{CutTypeData.filter(fd=>fd.cutName==="Symmetry")[0].inCatName.map((md,idx)=>(<option value={md}>{md}</option>))}

                                    </Field>
                                  </div>
                                </div>
                                <div className="row align-items-center mb-2">
                                  <div className="col-sm-3">
                                    <p className="label-text utext">Polish</p>
                                  </div>
                                  <div className="col-sm-9">
                                    <Field
                                      as="select"
                                      name="polish"
                                      className="form-control"
                                      onChange={(e) =>
                                        setPolish(e.target.value)
                                      }
                                    >
                              <option value="">Select</option>
  {CutTypeData.filter(fd=>fd.cutName==="Polish")[0].inCatName.map((md,idx)=>(<option value={md}>{md}</option>))}

                                    </Field>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Price</p>
                            </div>
                            <div className="col-sm-8">
                              <Field
                                type="text"
                                name="price"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Discount, %</p>
                            </div>
                            <div className="col-sm-8">
                              <Field
                                type="text"
                                name="discount"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Final price</p>
                            </div>
                            <div className="col-sm-8">
                              <Field
                                type="text"
                                name="finalPrice"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Carat weight</p>
                            </div>
                            <div className="col-sm-8">
                              <Field
                                type="text"
                                name="caratWeight"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Investor choice</p>
                            </div>
                            <div className="col-sm-8">
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-input"
                                  type="radio"
                                  name="investorChoice"
                                  id="inlineRadio1"
                                  value="true"
                                />
                                <label
                                  className="form-check-label utext"
                                  htmlFor="inlineRadio1"
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-input"
                                  type="radio"
                                  name="investorChoice"
                                  id="inlineRadio2"
                                  value="false"
                                />
                                <label
                                  className="form-check-label utext"
                                  htmlFor="inlineRadio2"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">Collector item</p>
                            </div>
                            <div className="col-sm-8">
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-input"
                                  type="radio"
                                  name="collectorItem"
                                  id="inlineRadio3"
                                  value="true"
                                />
                                <label
                                  className="form-check-label utext"
                                  htmlFor="inlineRadio3"
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-input utext"
                                  type="radio"
                                  name="collectorItem"
                                  id="inlineRadio4"
                                  value="false"
                                />
                                <label
                                  className="form-check-label utext"
                                  htmlFor="inlineRadio4"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="row align-items-center my-3">
                            <div className="col-sm-3">
                              <p className="label-text utext">
                                Bluff stone / Good buy
                              </p>
                            </div>
                            <div className="col-sm-8">
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-input"
                                  type="radio"
                                  name="bluffStone"
                                  id="inlineRadio5"
                                  value="true"
                                />
                                <label
                                  className="form-check-label utext"
                                  htmlFor="inlineRadio5"
                                >
                                  Yes
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <Field
                                  className="form-check-input"
                                  type="radio"
                                  name="bluffStone"
                                  id="inlineRadio6"
                                  value="false"
                                />
                                <label
                                  className="form-check-label utext"
                                  htmlFor="inlineRadio6"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                          </div>

                          <h3 className="cards-header mb-3 mt-5 mx-2">
                            Creators
                          </h3>
                          <div className="mx-2 border-box">
                            <Table>
                              <thead>
                                <tr>
                                  <th className="col-sm-6 utext">NAME</th>
                                  <th className="col-sm-4 utext">TYPE</th>
                                  <th className="col-sm-2 utext"></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <FieldArray
                                    name="creators"
                                    render={({ insert, remove, push }) => (
                                      <>
                                        <div className="tbfield">
                                          {values.creators.length > 0 &&
                                            values.creators.map(
                                              (friend, index) => (
                                                <tr>
                                                  <td>
                                                    <div className="col-sm-6 tbfieldc">
                                                      <Field
                                                        as="select"
                                                        name={`creators.${index}.name`}
                                                        className="form-control rounded"
                                                      >
                                                        <option value="">
                                                          Creator
                                                        </option>
                                                        <option value="Creator1">
                                                          Creator1
                                                        </option>
                                                        <option value="Creator2">
                                                          Creator2
                                                        </option>
                                                        <option value="Creator3">
                                                          Creator3
                                                        </option>
                                                        <option value="Creator4">
                                                          Creator4
                                                        </option>
                                                      </Field>
                                                      {errors.creators &&
                                                        errors.creators[
                                                          index
                                                        ] &&
                                                        errors.creators[index]
                                                          .name &&
                                                        touched.creators &&
                                                        touched.creators[index]
                                                          .name && (
                                                          <div className="field-error">
                                                            {
                                                              errors.creators[
                                                                index
                                                              ].name
                                                            }
                                                          </div>
                                                        )}
                                                    </div>
                                                  </td>
                                                  &nbsp;
                                                  <td>
                                                    <div className="col-sm-6 tbfieldc">
                                                      <Field
                                                       type="input"
                                                        name="type"
                                                        className="form-control rounded"
                                                        readOnly
                                                      >
                                                        {/* <option value="">
                                                          Type
                                                        </option>
                                                        <option value="Designer">
                                                          Designer
                                                        </option>
                                                        <option value="Lab">
                                                          Lab
                                                        </option>
                                                        <option value="Cutter">
                                                          Cutter
                                                        </option>
                                                        <option value="Artisian">
                                                          Artisian
                                                        </option> */}
                                                      </Field>
                                                      {errors.creators &&
                                                        errors.creators[
                                                          index
                                                        ] &&
                                                        errors.creators[index]
                                                          .name &&
                                                        touched.creators &&
                                                        touched.creators[index]
                                                          .name && (
                                                          <div className="field-error">
                                                            {
                                                              errors.creators[
                                                                index
                                                              ].name
                                                            }
                                                          </div>
                                                        )}
                                                    </div>
                                                  </td>
                                                  <td className="text-end tbfieldc">
                                                    <button
                                                      className="text-end"
                                                      type="button"
                                                      onClick={() =>
                                                        remove(index)
                                                      }
                                                    >
                                                      &nbsp;&nbsp;Remove
                                                    </button>
                                                  </td>
                                                </tr>
                                              )
                                            )}
                                        </div>
                                        <div>
                                          <div className="edit-value-btn">
                                            <button
                                              className="btn btn-link"
                                              type="button"
                                              onClick={() => push({ name: "" })}
                                            >
                                              + Add Creator
                                            </button>
                                          </div>
                                        </div>
                                      </>
                                    )}
                                  />
                                </tr>
                              </tbody>
                            </Table>
                            <div className="border-top p-3 text-center"></div>
                          </div>

                          <div>
                            <div className="row align-items-center my-3">
                              <h3 className="cards-header mb-3 mt-5 ">
                                Certificate
                              </h3>
                              <div className="col-sm-3">
                                <p className="label-text utext">Certificate</p>
                              </div>
                              <div className="col-sm-8">
                                <div className="form-check form-check-inline">
                                  <Field
                                    className="form-check-input"
                                    type="radio"
                                    name="certificate"
                                    id="inlineRadio5"
                                    value="true"
                                  />
                                  <label
                                    className="form-check-label utext"
                                    htmlFor="inlineRadio5"
                                  >
                                    Yes
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <Field
                                    className="form-check-input"
                                    type="radio"
                                    name="certificate"
                                    id="inlineRadio6"
                                    value="false"
                                  />
                                  <label
                                    className="form-check-label utext"
                                    htmlFor="inlineRadio6"
                                  >
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="row align-items-center my-3">
                              <div className="col-sm-3">
                                <p className="label-text utext"> Laboratory</p>
                              </div>
                              <div className="col-sm-8">
                                <Field
                                  as="select"
                                  name="laboratory"
                                  className="form-control"
                                >
                                  <option value="certificate1">
                                    certificate1
                                  </option>
                                  <option value="certificate2">
                                    certificate2
                                  </option>
                                  <option value="certificate3">
                                    certificate3
                                  </option>
                                  <option value="certificate4">
                                    certificate4
                                  </option>
                                </Field>
                              </div>
                            </div>

                            <div className="row align-items-center my-3">
                              <div className="col-sm-3">
                                <p className="label-text utext">Certificate number</p>
                              </div>
                              <div className="col-sm-8">
                                <Field
                                  type="number"
                                  name="certificateNumber"
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="row align-items-center my-3">
                              <div className="col-sm-3">
                                <p className="label-text utext">Image</p>
                              </div>
                              <div className="col-sm-3">
                                <div className="bg-pink">
                                  {fileDataURLCF ? (
                                    <Image
                                      src={fileDataURLCF}
                                      alt="loginImage"
                                      width="52px"
                                      height="57px"
                                      className="img-fluid "
                                    />
                                  ) : null}
                                </div>
                              </div>
                              <div className="col-sm-3">
                                <Field
                                  type="file"
                                  id="image"
                                  accept=".png, .jpg, .jpeg"
                                  name="certificate_image"
                                  onChange={changeHandlerdCF}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="mt-5 mx-2">
                            <h3 className="cards-header mb-3 mt-5 utext">DYJ</h3>
                            <Field
                              type="text"
                              name="dyj"
                              className="form-control"
                            />
                            {/* {new Array(1).fill(undefined).map((e, i) => {
                              return (
                                <>
                                  <div className="col-sm-12 d-flex mt-2 gap-2 mt-1">
                                    <div className="col-11 px-0 mt-2">
                                      <div className="box-file">
                                        <Image
                                          src={ring}
                                          alt="loginImage"
                                          width="40px"
                                          height="40px"
                                        />
                                        <p>
                                          DYJ Name <br></br> DYJ-8397
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-1 px-0 justify-content-end align-self-center">
                                      <div
                                        className="border-cross justify-content-center align-self-center mt-2"
                                        style={{ height: "25px" }}
                                      >
                                        <FontAwesomeIcon
                                          className="icon-class pinkicon"
                                          icon={faXmark}
                                          title="View"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })} */}
                          </div>

                          <div className="mt-5 mx-2">
                            <h3 className="cards-header mb-3 mt-5 utext">Details</h3>
                            <div className="customer-side-box-head">
                              <div className="row align-items-center">
                                <div className="col-sm-10">
                                  <p className="m-0 utext">Upload Documents</p>
                                </div>
                                <div className="col-sm-2">
                                  <label
                                    className="btn-upload utext"
                                    htmlFor="file-upload"
                                  >
                                    Choose File
                                  </label>
                                  <input
                                    type="file"
                                    id="file-upload"
                                    name="details_image"
                                    className="d-none img-fluid"
                                    accept="image/*"
                                    onChange={changeHandlerds}
                                    multiple
                                  />
                                  {/* <Field
                                    type="file"
                                    id="file-upload"
                                    accept=".png, .jpg, .jpeg"
                                    name="details_image"
                                    onChange={changeHandlerds}
                                    multiple
                                  /> */}
                                  <Field
                                    type="file"
                                    id="file-upload"
                                    className="d-none"
                                    name="details_image"
                                    onChange={changeHandlerds}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-12 d-flex mt-2 gap-2 mt-4">
                              {fileDataURLd ? (
                                <Image
                                  src={fileDataURLd}
                                  alt="loginImage"
                                  width="52px"
                                  height="57px"
                                  className="img-fluid "
                                />
                              ) : null}
                              {/* <textarea cols={100}></textarea> */}
                              {/* <Field
                                name="littleStory"
                                as="textarea"
                                className="form-textarea"
                                cols={100}
                                rows={7}
                              /> */}
                              <div
                                className="border-cross justify-content-center align-self-center"
                                style={{ height: "25px" }}
                              ></div>
                            </div>
                            <div className="col-sm-12 d-flex mt-2 gap-2">
                              <div className="col-sm-2 px-0">
                                <p className="label-text utext">Photo credit</p>
                              </div>
                              <div className="col-sm-10">
                                <Field
                                  type="number  "
                                  className="form-control"
                                  name="details_photocredit"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row  mt-5">
                            <div className="col-sm-3">
                              <p className="label-text utext">Notes</p>
                            </div>
                            <div className="col-sm-9">
                              <Field
                                as="textarea"
                                className="custom-textareas"
                                name="details_notes"
                                rows={7}
                              />
                              {/* <Field  name="details_notes" as="textarea" 
                                    className="form-textarea" cols={100} rows={7}/> */}
                            </div>
                          </div>

                          <div className="footersave">
                            <div className="footer-1">
                              <div className="row mt-3 justify-content-end">
                                <div className="col-sm-3">
                                  <button className="btn-delete">
                                    Delete account
                                  </button>
                                </div>
                                <div className="col-sm-3">
                                  <button className="btn-save">
                                    Save Changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Form>

                  <div id="container">
                    <div id="midivfixed"></div>
                  </div>
                </div>
              );
              //return is closed
            }}
            //render is closed
          />
          {/* formik is closed */}
        </div>
      )}
    </>
  );
}

export default GemDetails;
