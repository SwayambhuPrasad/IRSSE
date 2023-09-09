"use client";

import { useSession } from "next-auth/react";

export default function App() {
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <div className={`w-screen h-screen`}>{!!data ? data.expires : "hii"}</div>
  );
}
