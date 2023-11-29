import ProfileCard from "@/components/ProfileCard/ProfileCard";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 gap-8 my-10">
        <div className="grid grid-cols-2 gap-3">
          <div className="grid place-items-center">
            <img
              className="h-[350px] object-cover rounded-[2rem]"
              src="/dgNair/1.jpg"
              alt=""
            />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <img className="rounded-[1.5rem]" src="/dgNair/1.jpg" alt="" />
            <img className="rounded-[1.5rem]" src="/dgNair/1.jpg" alt="" />
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="capitalize font-bold">about our alumni</h4>
          <h1 className="capitalize text-5xl font-semibold">
            our esteem seniors
          </h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            neque, in placeat illum officiis minima sint natus dolore sapiente,
            eius ducimus vero, aperiam dolorum eveniet aliquam consequatur
            voluptate odio qui?
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
            tenetur repellendus quia aspernatur neque ipsa, reprehenderit beatae
            labore doloremque sed ab, dolore quod amet eius perferendis. Aut a
            perspiciatis eaque!
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid grid-cols-3 ">
              <div className="flex justify-center items-center">
                <p className="bg-ten inline-block rounded-full p-4 text-lg ">
                  01
                </p>
              </div>
              <div className="col-span-2 space-y-2">
                <h1 className="capitalize text-3xl font-bold">hello</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  mollitia adipisci quaerat quas! Quas, eius enim dolore, iusto
                  od
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 ">
              <div className="flex justify-center items-center">
                <p className="bg-ten inline-block rounded-full p-4 text-lg ">
                  01
                </p>
              </div>
              <div className="col-span-2 space-y-2">
                <h1 className="capitalize text-3xl font-bold">hello</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  mollitia adipisci quaerat quas! Quas, eius enim dolore, iusto
                  od
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 bg-primary/40 px-20 py-10 mb-10">
        <div className="col-span-2 space-y-3">
          <h1 className="capitalize text-4xl font-bold">
            few historical milestone
          </h1>
          <p className="w-[80%] tracking-wide">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quas dignissimos fuga cum quos blanditiis ab molestias. Dolor quo
            facere, eos nulla doloribus quisquam a quidem soluta est voluptatum.
            Debitis.
          </p>
        </div>
        <div className="grid place-items-end">
          <button className="bg-ten px-10 py-3 font-semibold tracking-wide rounded">
            Find More
          </button>
        </div>
      </div>
      <div className="container mx-auto grid gap-5 grid-cols-1 lg:grid-cols-3 ">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </>
  );
};

export default page;
