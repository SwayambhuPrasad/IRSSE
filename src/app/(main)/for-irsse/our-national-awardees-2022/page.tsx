import React from "react";
import ProfileCard from "@/components/ProfileCard/ProfileCard";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto grid gap-5 grid-cols-1 lg:grid-cols-3 ">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
};

export default page;
