import { createSlice } from "@reduxjs/toolkit";
import { registerActivity } from "../../../Action/Activity/activityAction";

export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    activities: [],
    loading: false,
    error: null,
    activity: null,
  },
  reducers: {
    loadActivitiesRequest: (state, action) => {
      state.loading = true;
    },
    loadActivitiesSuccess: (state, action) => {
      state.loading = false;
      state.activities = action.payload;
    },
    loadActivitiesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    registerActivityRequest: (state, action) => {
      state.loading = true;
    },
    registerActivitySuccess: (state, action) => {
      state.loading = false;
      state.activities.push(action.payload);
    },
    registerActivityFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default activitySlice.reducer;
export const {
  loadActivitiesRequest,
  loadActivitiesSuccess,
  loadActivitiesFail,
  registerActivityRequest,
  registerActivitySuccess,
  registerActivityFail,
} = activitySlice.actions;
