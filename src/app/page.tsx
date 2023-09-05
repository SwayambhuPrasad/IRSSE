"use client";

import { Store } from "@/store/Store";
import { useContext } from "react";

export default function App() {
  const store = useContext(Store);
  return <div className={`w-screen h-screen`}></div>;
}
