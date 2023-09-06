"use client";

import { Dispatches, Store, initialState, state } from "@/store/Store";
import { actions, rootReducer } from "@/store/reducers";
import { NextUIProvider } from "@nextui-org/react";
import { Reducer, useReducer } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [store, dispatch] = useReducer<Reducer<state, actions>>(
    rootReducer,
    initialState
  );

  return (
    <>
      <Store.Provider value={store}>
        <Dispatches.Provider value={dispatch}>
          <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light">
              {children}
            </NextThemesProvider>
          </NextUIProvider>
        </Dispatches.Provider>
      </Store.Provider>
    </>
  );
}
