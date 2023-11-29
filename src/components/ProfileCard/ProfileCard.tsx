import React from "react";
import {
  BookOpenIcon,
  ArrowLongRightIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const ProfileCard = (props: Props) => {
  return (
    <div>
      <div className="w-full flex flex-col bg-primary-200/25 hover:bg-ten/5 relative rounded-sm">
        <div className="absolute top-0 bottom-0 right-3 my-auto w-[9rem] h-[3.5rem] rounded-sm bg-ten flex justify-center items-center gap-2">
          <AcademicCapIcon className="w-6 h-6" /> <div>Rail Award</div>
        </div>
        <div className="felx-1">
          <img src="/dgNair/1.jpg" alt="" />
        </div>
        <div className="felx-1 px-4 py-6 bg-black">
          <h1 className="text-xl font-bold tracking-wide">
            Shri Vikram Singh Yadav IRSSE
          </h1>
          <h4 className="text-sm font-semibold my-2 tracking-wide ">
            Dy.CSTE/RE/UMB, NR
          </h4>
          <p className="text-sm tracking-wide">
            He has been a driving force and instrumental in conceptualizing,
            preparing tenders, fixing agencies and executing the Railway
            Electrification work of the following projects in record time{" "}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center cursor-pointer">
              <p>Read More</p>
              <ArrowLongRightIcon className="h-6 w-6" />
            </div>
            <div>
              <BookOpenIcon className="h-10 w-10 opacity-40 text-ten" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
