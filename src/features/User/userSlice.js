import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUserRequest: (state, action) => {
      state.loading = true;
    },
    loginUserSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.isAuthenticated = true;
    },
    loginUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    registerUserRequest: (state, action) => {
      state.loading = true;
    },
    registerUserSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.isAuthenticated = true;
    },
    registerUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    loadUserRequest: (state, action) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.error = null;
    },
    logoutUserRequest: (state, action) => {
      state.loading = true;
    },
    logoutUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    },
    logoutUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updatePasswordRequest: (state, action) => {
      state.loading = true;
    },
    updatePasswordSuccess: (state, action) => {
      state.loading = false;
    },
    updatePasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserAvatarRequest: (state, action) => {
      state.loading = true;
    },
    updateUserAvatarSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    updateUserAvatarFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserProfileRequest: (state, action) => {
      state.loading = true;
    },
    updateUserProfileSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    updateUserProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserRequest: (state, action) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.user.isActive = action.payload;
    },
    deleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    enableUserRequest: (state, action) => {
      state.loading = true;
    },
    enableUserSuccess: (state, action) => {
      state.loading = false;
      state.user.isActive = action.payload;
    },
    enableUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    otpMailRequest: (state, action) => {
      state.loading = true;
    },
    otpMailSuccess: (state, action) => {
      state.loading = false;
    },
    otpMailFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    forgotPasswordFail:(state,action)=>{
      state.error=action.payload;
    },
    resetPasswordFail:(state,action)=>{
      state.error=action.payload;
    },
    clearErrors: (state, action) => {
      state.error = null;
    },
  },
});
export const {
  loginUserRequest,
  loginUserSuccess,
  loginUserFail,
  registerUserRequest,
  registerUserSuccess,
  registerUserFail,
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserFail,
  updatePasswordRequest,
  updatePasswordSuccess,
  updatePasswordFail,
  updateUserAvatarRequest,
  updateUserAvatarSuccess,
  updateUserAvatarFail,
  updateUserProfileRequest,
  updateUserProfileSuccess,
  updateUserProfileFail,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFail,
  enableUserRequest,
  enableUserSuccess,
  enableUserFail,
  otpMailRequest,
  otpMailSuccess,
  otpMailFail,
  forgotPasswordFail,
  resetPasswordFail,
  clearErrors,
} = userSlice.actions;

export default userSlice.reducer;
