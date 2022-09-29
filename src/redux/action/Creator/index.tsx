import axios from "axios";
import { Dispatch } from "redux";
import { url } from "../../../components/ApiUrl/ApiUrl";
import {getCreatorTypeData} from "redux/reducer/Creator"
import {
  errorMessage,
  errorr,
} from "../../../components/_common/Toaster/ToasterMessage";
import showToaster from "../../../components/_common/Toaster/Toaster";

const token =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : "";

export const getCreatorTypes = (token) => (dispatch: Dispatch) => {
  let creatorData = axios.get(`${url}api/admin/creator/all`,{
    headers: { Authorization: `Bearer ${token}` },
  })
  .then((res) => {
    dispatch(getCreatorTypeData(res.data))
  })
  .catch(() => {
    showToaster(errorr, errorMessage);
  });
};