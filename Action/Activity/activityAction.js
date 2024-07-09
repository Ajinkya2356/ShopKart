import axios from "axios";
import {
  loadActivitiesFail,
  loadActivitiesRequest,
  loadActivitiesSuccess,
  registerActivityFail,
  registerActivityRequest,
  registerActivitySuccess,
} from "../../src/features/Activity/activitySlice";
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
export const getAllActivity = () => async (dispatch) => {
  try {
    dispatch(loadActivitiesRequest());
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/activity/all`,
      defaultHeader
    );
    dispatch(loadActivitiesSuccess(data.activity));
  } catch (error) {
    dispatch(loadActivitiesFail(getErrorMessage(error)));
  }
};
export const registerActivity = (activity) => async (dispatch) => {
  try {
    dispatch(registerActivityRequest());
    const { data } = await axios.post(
      `http://localhost:4000/api/v1/activity/register`,
      activity,
      defaultHeader
    );
    dispatch(registerActivitySuccess(data.activity));
  } catch (error) {
    dispatch(registerActivityFail(getErrorMessage(error)));
  }
};
