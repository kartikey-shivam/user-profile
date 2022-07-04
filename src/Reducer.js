import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  status: false,
  active: false,
  Bio: "",
  avatar: "",
  createdAt: Date,
  id: Number,
  jobTitle: "",
  profile: {
    email: "",
    firstName: "",
    lastName: "",
    username: "",
  },
};

export const customReducer = createReducer(initialState, {
  updateData: (state, action) => {
    state.status = true;
    state.Bio = action.bio;
    state.avatar = action.avt;
    state.createdAt = action.createdAt;
    state.id = action.id;
    state.jobTitle = action.jobTitle;
    state.profile.email = action.email;
    state.profile.firstName = action.firstName;
    state.profile.lastName = action.lastName;
    state.profile.username = action.usr;
    state.active = true;
  },
});
