import { Dispatch, createContext } from "react";
import { actions } from "./reducers";

export interface state {
  theme: "dark" | "light";
}
export const initialState: state = {
  theme: "light",
};

export const Store = createContext<state>(initialState);
export const Dispatches = createContext<Dispatch<actions>>(undefined as any);
