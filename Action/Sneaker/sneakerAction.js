import axios from "axios";
import {
  loadSneakerFail,
  loadSneakerRequest,
  loadSneakerSuccess,
  loadSneakersFail,
  loadSneakersSuccess,
} from "../../src/features/Sneakers/sneakerSlice";
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
export const getSneakers = () => async (dispatch) => {
  try {
    dispatch(loadSneakerRequest());
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/products`,
      defaultHeader
    );
    dispatch(loadSneakersSuccess(data.products));
  } catch (error) {
    dispatch(loadSneakersFail(getErrorMessage(error)));
  }
};
export const getSneaker = (id) => async (dispatch) => {
  try {
    dispatch(loadSneakerRequest());
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/product/${id}`,
      defaultHeader
    );
    dispatch(loadSneakerSuccess(data.product));
  } catch (error) {
    dispatch(loadSneakerFail(getErrorMessage(error)));
  }
};
