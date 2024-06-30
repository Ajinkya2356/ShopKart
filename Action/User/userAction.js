import {
  loadUserFail,
  loadUserRequest,
  loadUserSuccess,
  loginUserFail,
  loginUserRequest,
  loginUserSuccess,
  logoutUserRequest,
  logoutUserSuccess,
  registerUserFail,
  registerUserRequest,
  registerUserSuccess,
  updatePasswordFail,
  updatePasswordRequest,
  updatePasswordSuccess,
  updateUserAvatarFail,
  updateUserAvatarRequest,
  updateUserAvatarSuccess,
  updateUserProfileFail,
  updateUserProfileRequest,
  updateUserProfileSuccess,
} from "../../src/features/User/userSlice";
import axios from "axios";
const defaultHeader = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};
const getErrorMessage = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};
export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch(loginUserRequest());
    const { data } = await axios.post(
      `http://localhost:4000/api/v1/login`,
      { ...userData },
      defaultHeader
    );
    dispatch(loginUserSuccess(data.user));
    localStorage.setItem("token", data.token);
  } catch (error) {
    dispatch(loginUserFail(getErrorMessage(error)));
  }
};
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch(registerUserRequest());
    const { data } = await axios.post(
      `http://localhost:4000/api/v1/register`,
      { ...userData },
      defaultHeader
    );
    dispatch(registerUserSuccess(data.user));
    localStorage.setItem("token", data.token);
  } catch (error) {
    dispatch(registerUserFail(getErrorMessage(error)));
  }
};
export const loadUser = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest());
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/me`,
      defaultHeader
    );
    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    dispatch(loadUserFail(getErrorMessage(error)));
  }
};
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(logoutUserRequest());
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/logout`,
      defaultHeader
    );
    dispatch(logoutUserSuccess());
  } catch (error) {
    dispatch(logoutUser(getErrorMessage(error)));
  }
};
export const changePassword = (passwordData) => async (dispatch) => {
  try {
    dispatch(updatePasswordRequest());
    const { data } = await axios.put(
      `http://localhost:4000/api/v1/password/update`,
      {
        oldPassword: passwordData["old password"],
        newPassword: passwordData["new password"],
        confirmPassword: passwordData["confirm password"],
      },
      defaultHeader
    );
    dispatch(updatePasswordSuccess());
  } catch (error) {
    dispatch(updatePasswordFail(getErrorMessage(error)));
  }
};
export const updateUserAvatar = (avatar) => async (dispatch) => {
  try {
    dispatch(updateUserAvatarRequest());
    const { data } = await axios.put(
      `http://localhost:4000/api/v1/me/update/avatar`,
      {
        avatar,
      },
      defaultHeader
    );
    dispatch(updateUserAvatarSuccess(data.user));
  } catch (error) {
    dispatch(updateUserAvatarFail(getErrorMessage(error)));
  }
};
export const updateUserProfile = (userData) => async (dispatch) => {
  try {
    dispatch(updateUserProfileRequest());
    const { data } = await axios.put(
      `http://localhost:4000/api/v1/me/update`,
      {
        name: userData.name,
        email: userData.email,
        address: userData.address,
        mobileNo: userData.mobileNo,
      },
      defaultHeader
    );
    dispatch(updateUserProfileSuccess(data.user));
  } catch (error) {
    dispatch(updateUserProfileFail(getErrorMessage(error)));
  }
};
