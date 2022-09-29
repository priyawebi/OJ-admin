import axios from "axios";
import { Dispatch } from "redux";
import { url } from "../../../components/ApiUrl/ApiUrl";
import { getColorTypeData } from "redux/reducer/Color";
import {
  errorMessage,
  errorr,
} from "../../../components/_common/Toaster/ToasterMessage";
import showToaster from "../../../components/_common/Toaster/Toaster";

const token =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";

export const getColorTypes = (token) => (dispatch: Dispatch) => {
  let colorData = axios.get(`${url}api/admin/gem/color/all`,{
    headers: { Authorization: `Bearer ${token}` },
  })
  .then((res) => {
    dispatch(getColorTypeData(res.data))
  })
  .catch(() => {
    showToaster(errorr, errorMessage);
  });
};