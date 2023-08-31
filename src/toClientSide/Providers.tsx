"use client";

import { Dispatches, Store, initialState, state } from "@/store/Store";
import { actions, rootReducer } from "@/store/reducers";
import { NextUIProvider } from "@nextui-org/react";
import { Reducer, useReducer } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [store, dispatch] = useReducer<Reducer<state, actions>>(
    rootReducer,
    initialState
  );

  return (
    <>
      <html lang="en" className={store.theme}>
        <body>
          <Store.Provider value={store}>
            <Dispatches.Provider value={dispatch}>
              <NextUIProvider>{children}</NextUIProvider>
            </Dispatches.Provider>
          </Store.Provider>
        </body>
      </html>
    </>
  );
}
