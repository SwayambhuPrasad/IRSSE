import { state } from "../Store";

export type actions = {
  type: "switchTheme";
  payload: any;
};

export const rootReducer = (state: state, actions: actions) => {
  switch (actions.type) {
    case "switchTheme":
      return { ...state, theme: actions.payload };
    default:
      return state;
  }
};
