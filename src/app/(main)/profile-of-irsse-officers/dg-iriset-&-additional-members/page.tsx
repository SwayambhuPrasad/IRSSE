import React from "react";

type Props = {};

const page = (props: Props) => {
  const paragraphStyle = `tracking-wide text-[1.1rem] leading-[170%]`;
  return (
    <>
      <div className="bg-primary/40 mt-3">
        <div className="container mx-auto flex gap-10 py-10">
          <div className="w-[30%] flex items-start justify-end">
            <img
              className="w-[4rem] h-[4rem] object-cover rounded-full border-[2px] "
              src="/dgNair/1.jpg"
              alt=""
            />
          </div>
          <div className="w-[70%]">
            <h1 className="text-3xl capitalize font-bold tracking-wider">
              smt.aruna singh IRSSE
            </h1>
            <h3 className="capitalize text-xs tracking-widest mt-1 mb-5 ">
              addition member (Telelcom), railway board
            </h3>
            <p className="text-sm tracking-wide">
              Smt. Aruna Singh worked as Additional General Manager, North
              Western Railway, before taking over charge as Additional Member,
              Telecom Railway Board in March, 2021
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex gap-10 mt-5">
        <div className="w-[30%]"></div>
        <div className="w-[70%] space-y-8 ">
          <p className={`${paragraphStyle}`}>
            Smt Aruna Singh is an officer of Indian Railway Service of Signal
            Engineers of 1985 batch She did her Bachelors in Engineering from
            Delhi College of Engineering and Diploma in Public Policy from IIPA,
            New Delhi. Madam started her career as ASTE, in Delhi Division,
            Northern Railway and held various important posts thereafter like
            Chief Communication Engineer, Chief Signal & Telecom Engineer /
            Projects, Chief Safety Officer and Additional General Manager North
            Western Railway, and Divisional Railway Manager, Hyderabad Division,
            South Central Railway. She has undergone various training programs
            in India and Abroad like Strategic Management at Shanghai & Paris,
            Enterprise Computing at CRIS, Management Strategies at CTARA and IT
            Solutions at CRIS. She led the team of Hyderabad Division in winning
            efficiency shields in several areas of open line working during her
            tenure as DRM.
          </p>
          <p className={`${paragraphStyle}`}>
            As Additional Member Telecom, Railway Board her important
            contribution is allotment of 5 MHz bandwidth in the 700 MHz band
            responsible for upgradation of Telecom Services in the Organisation.
          </p>
          <p className={`${paragraphStyle}`}>
            Smt. Aruna Singh worked as Additional General Manager, North Western
            Railway, before taking over charge as Additional Member, Telecom
            Railway Board in March, 2021
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
