import { type } from "@testing-library/user-event/dist/type";
import { types } from "../types/types";

// const state  ={
//   name: "xd",
//   logged: true
// }

export const authReducer = (state = [], action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };
    case type.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
