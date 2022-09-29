import axios from "axios";
import { Dispatch } from "redux";
import { url } from "../../../components/ApiUrl/ApiUrl";
import { getJwelleryTypeData } from "redux/reducer/JwelleryType";
import {
  errorMessage,
  errorr,
} from "../../../components/_common/Toaster/ToasterMessage";
import showToaster from "../../../components/_common/Toaster/Toaster";

const token =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";

export const getJwelleryTypes = (token) => (dispatch: Dispatch) => {
  let jweldata = axios.get(`${url}api/admin/jewellerytype/all`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then((res) => {
    dispatch(getJwelleryTypeData(res.data))
  })
  .catch(() => {
    showToaster(errorr, errorMessage);
  });
};
