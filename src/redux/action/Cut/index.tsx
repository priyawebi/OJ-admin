import axios from "axios";
import { Dispatch } from "redux";
import { url } from "../../../components/ApiUrl/ApiUrl";
import {getcutTypeData} from "redux/reducer/Cut"

import {
  errorMessage,
  errorr,
} from "../../../components/_common/Toaster/ToasterMessage";
import showToaster from "../../../components/_common/Toaster/Toaster";

const token =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";

export const getCutTypes = (token) => (dispatch: Dispatch) => {
  let cutdata = axios.get(`${url}api/admin/gem/cut/all`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then((res) => {
    dispatch(getcutTypeData(res.data))
  })
  .catch(() => {
    showToaster(errorr, errorMessage);
  });
};
