"use client";

import { Dispatches, Store, initialState, state } from "@/store/Store";
import { actions, rootReducer } from "@/store/reducers";
import { NextUIProvider } from "@nextui-org/react";
import { Reducer, useReducer } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

export default function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: any;
}) {
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
              <SessionProvider session={session}>{children}</SessionProvider>
            </NextThemesProvider>
          </NextUIProvider>
        </Dispatches.Provider>
      </Store.Provider>
    </>
  );
}
