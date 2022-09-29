import axios from 'axios';
import { Dispatch } from 'redux';

import {url} from '../../../components/ApiUrl/ApiUrl';
import {login} from '../../../redux/reducer/Login';
import ShowToaster from '../../../components/_common/Toaster/Toaster'

import {
  errorMessage,
  errorr,
  loginSuccess,
  success,
} from '../../../components/_common/Toaster/ToasterMessage';

const postLogin = (data: loginType) => async (dispatch: Dispatch) => {
  await axios
    .post(`${url}api/admin/sign-in`, data)
    .then((response) => {
      //dispatch(loader(false));
      ShowToaster(success, loginSuccess);
      dispatch(login(response?.data?.token));
    })
    .catch(() => {
      ShowToaster(errorr, errorMessage);
      //dispatch(loader(false));
      console.warn('Something Went Wrong');
    });
};
export default postLogin;
