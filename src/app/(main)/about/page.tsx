// 1. import `NextUIProvider` component
"use client";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function about() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <>
      <div className="container w-full h-full m-auto lg:px-14  flex flex-col items-center justify-center px-5">
        <div
          className="h-[200px] w-full md:h-[400px] bg-cover"
          style={{
            backgroundImage: `url('/aboutPage.jpg')`,
          }}
        >
          <div className="h-full w-full bg-black/40"></div>
        </div>
        <div className="container m-auto text-center text-2xl font-semibold py-2 md:text-3xl md:font-semibold md:my-4 ">
          ABOUT
        </div>
        <div className="container m-auto text-center text-sm md:text-base lg:text-lg">
          IRSSE About IRSSE Home About IRSSE Indian Railway Service of Signal
          Engineers (IRSSE) अहर्निशं मार्गं दर्शयामः about image IRSSE, or the
          Indian Railway Service of Signal Engineers, is an organized Group ‘A’
          Cadre within the Government of India. The officers in this esteemed
          service play a pivotal role in the Planning, Design, Commissioning,
          and Maintenance of Signalling and Telecommunication Infrastructure.
          Their responsibilities include ensuring the safe, efficient, and
          punctual operation of trains, as well as enhancing the line capacity
          of the Indian Railways system.
        </div>
        <div className="hidden conatainer w-full h-full mx-auto flex items-center justify-center">
          <div className="w-[40%] h-[150px] p-5 border-r-large bg-ten">1</div>
        </div>
        {/*History of about page*/}
        <div className="container mt-4">
          <h1 className=" font-semibold text-xl md:text-2xl md:font-semibold lg:text-3xl lg:font-bold my-3">
            Brief History of Signalling in Indian Railway
          </h1>
          <div className="mb-3 text-sm md:text-base lg:text-lg">
            In the earlier days of Indian Railways, trains operated without any
            communication system, and safety was solely managed by the
            Engineering department. Telegraph and telephony gradually came into
            existence in India as per the requirements of the Railways. The
            first train service began in 1853 between Wadi Bunder and Thane in
            Mumbai, though semaphore signals were provided at most stations,
            interlocking was not introduced on Indian Railways.
          </div>

          <div className="mb-3 text-sm md:text-base lg:text-lg">
            The first Signal Engineer appointed by the former East Indian
            Railway was Mr. S.T. Dutton in 1889. The Indian System of
            Interlocking by Mr. G.H. List was commissioned at six single line
            crossing stations of North Western Railway in 1892. Cabin
            Interlocking, which was invented by John Saxby and already existed
            in British Railways, was adopted in Indian Railways in 1893. The
            first installation was done by Messrs Saxby & Farmer (India). In
            1894, two British Signal Engineers, List and Morse, introduced
            interlocking in 23 stations between Ghaziabad and Peshawar on the
            N.W. Railway. This Indian system of Interlocking was based on
            detector locking apparatus for protecting the facing points of
            trains moving at high speeds.
          </div>

          <div className="mb-3 text-sm md:text-base lg:text-lg">
            In 1920, Mr. E.W. Baker, Signal Engineer of the then Assam Bengal
            Railway (now North Frontier Railway), developed the Double Wire
            Signalling, a new form of mechanical signalling, to operate points
            and signals using steel wires instead of roddings. This system was
            first used on Southern & North Eastern Railways and gained
            popularity, becoming essential for providing a signalling system
            known as ‘Multiple Aspect Upper Quadrant’ (MAUQ) Signals.
          </div>

          <div className="mb-3 text-sm md:text-base lg:text-lg">
            Large scale Cabin Interlocking was adopted on the Bombay-Delhi route
            and completed by the Great Indian Peninsula Railway in 1912. Track
            Circuiting, a development from the early 19th Century, and Power
            Signalling, developed in the same era to operate points and signals
            electrically or electro-pneumatically, were used at busy stations
            like Bombay, Calcutta, and Madras. The Block Instrument, known as
            the Neale Block Token, was developed by Mr. Neale, an Engineer of
            the Great Indian Peninsula Railway, for single-line operations, and
            it is still in use in Indian Railways today.
          </div>
        </div>
        {/* Recruitment section  */}
        <div className="container mt-2">
          <h1 className=" font-semibold text-xl md:text-2xl md:font-semibold lg:text-3xl lg:font-bold my-3">
            Recruitment to IRSSE Group ‘A’
          </h1>
          <div className="mb-3 text-sm md:text-base lg:text-lg">
            Recruitment to the Indian Railway Service of Signal Engineers
            (IRSSE) Group ‘A’ cadre is done through two modes:
          </div>
          <div className="container mx-auto w-[90%]">
            <ol className="list-decimal text-sm md:text-base lg:text-lg text-gray-500 space-y-1">
              <li>
                Direct recruitment by UPSC: 50% of the cadre strength is
                recruited through direct recruitment conducted by the Union
                Public Service Commission (UPSC).
              </li>
              <li>
                Promotion from Group B officers of Signal and Telecommunication
                departments of the Zonal Railways: The remaining 50% of the
                cadre strength is filled through promotions from eligible Group
                B officers serving in the Signal and Telecommunication
                departments of the Zonal Railways.
              </li>
            </ol>
          </div>
          <div className="mb-3 text-sm md:text-base lg:text-lg">
            Currently, there are approximately 1200 IRSSE officers serving in 68
            divisions across 17 Zonal Railways, RDSO (Research Designs &
            Standards Organization), Railway Board, CTIs (Centralized Training
            Institutes), and other establishments.
          </div>
        </div>
        {/* Training section  */}
        <div className="container mt-2">
          <h1 className=" font-semibold text-xl md:text-2xl md:font-semibold lg:text-3xl lg:font-bold my-3">
            Training
          </h1>
          <div className="mb-3 text-sm md:text-base lg:text-lg">
            Upon completing their initial training at the Indian Railways
            Institute of Signal Engineering and Telecommunication (IRISET) in
            Secunderabad, IRSSE probationers embark on a comprehensive 78-week
            training program that includes visits to various academies and
            institutions across the country. These visits are designed to
            provide Officer Trainees with a diverse range of exposure and skills
            that will be invaluable to their careers as railway officers. Some
            of the institutions visited during this period include
          </div>
          <div className="container mx-auto w-[90%]">
            <ul className="list-decimal text-sm md:text-base lg:text-lg text-gray-500 space-y-1">
              <li>
                Railway Foundation and Induction Course at National Academy of
                Indian Railway (NAIR), Vadodara.
              </li>
              <li>
                Marketing Management and Transport Economics at Indian Institute
                of Management (IIM)
              </li>
              <li>
                Metro Rail Training at Delhi Metro Rail Corporation (DMRC), New
                Delhi
              </li>
              <li>
                P-Way, Works and Contract Management Training at Indian Railways
                Institute of Civil Engineering (IRICEN), Pune
              </li>
              <li>
                Locomotive, Rolling Stock and Workshop Management Training at
                Indian Railways Institute of Mechanical and Electrical
                Engineering (IRIMEE), Jamalpur
              </li>
              <li>
                Electric Traction and Railway Electrification Management
                Training at Indian Railways Institute of Electrical Engineering
                (IRIEEN), Nashik
              </li>
              <li>
                Parliamentary Procedures Training at Bureau of Parliamentary
                Studies and Training (BPST), New Delhi
              </li>
              <li>
                Railway Divisional attachments at 68 railway divisions spread
                across the length and breadth of the country.
              </li>
              <li>
                Appreciation Visits to various Railway establishments situated
                in difficult terrains – Konkan Railways, K-K Line, Shimla-Kalka
                Toy Train, Nilgiri Railway, Udhampur-Srinagar, Pamban Bridge
                etc.
              </li>
              <li>
                Ethics in public governance training at IC centre for Governance
                at Panchgani.
              </li>
              <li>
                Train Traffic Control and Management training at Indian Railways
                Institute of Transport Management, Lucknow.
              </li>
            </ul>
          </div>
        </div>

        {/*Role & Function    */}
        <div className="container mt-2">
          <h1 className=" font-semibold text-xl md:text-2xl md:font-semibold lg:text-3xl lg:font-bold my-3">
            Role and Functions
          </h1>
          <div className="mb-3 text-sm md:text-base lg:text-lg">
            The IRSSE officer in the Signal & Telecommunication Department plays
            a crucial role in planning, designing, commissioning, and
            maintaining the Signalling and Telecommunication Infrastructure of
            Indian Railways. This essential responsibility ensures the safe,
            efficient, and punctual operation of trains while also maximising
            the line capacity. This techno-managerial role requires coordination
            with other departments within the railways to ensure seamless
            functioning. The operation of trains in a safe and efficient manner
            heavily relies on the reliable functioning of the signalling and
            telecommunication equipment, which is installed and maintained by
            the S&T department. These equipment and circuits are meticulously
            designed in a fail-safe manner to ensure smooth operations.
          </div>
        </div>

        {/*Structure */}
        <div className="container mt-2">
          <h1 className=" font-semibold text-xl md:text-2xl md:font-semibold lg:text-3xl lg:font-bold my-3">
            Organisational Structure
          </h1>
          <div className="mb-3 text-sm md:text-base lg:text-lg">
            Organisational structure of the IRSSE Officers are as follows:
          </div>

          {/*Table*/}
          <div className="container mx-auto px-2 my-2">
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Position in the Government of India</TableColumn>
                <TableColumn>Division</TableColumn>
                <TableColumn>Zone</TableColumn>
                <TableColumn>Railway Board</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Junior Time Scale</TableCell>
                  <TableCell>
                    Assistant Divisional Signal& Telecommunication
                    Engineer.(ADSTE)
                  </TableCell>
                  <TableCell>
                    Assistant Executive Signal & Telecommunication
                    Engineer.(AXSTE)
                  </TableCell>
                  <TableCell>Assistant Director</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Senior Time Scale</TableCell>
                  <TableCell>
                    Divisional Signal& Telecommunication Engineer.(DSTE)
                  </TableCell>
                  <TableCell>
                    Executive Signal & Telecommunication Engineer.(XSTE)
                  </TableCell>
                  <TableCell>Deputy Director</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>
                    Junior Administrative Grade/Selection Grade
                  </TableCell>
                  <TableCell>
                    Sr. Divisional Signal& Telecommunication Engineer. (Sr.DSTE)
                  </TableCell>
                  <TableCell>
                    Dy.Chief Signal & Telecommunication Engineer(.Dy.CSTE)
                  </TableCell>
                  <TableCell>Joint Director/Director</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>Senior Administrative Grade</TableCell>
                  <TableCell>Divisional Railway Manager(DRM)</TableCell>
                  <TableCell>
                    Chief Signal & Telecommunication Engineer.(CSTE)
                  </TableCell>
                  <TableCell>Executive Director</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>Higher Administrative Grade +</TableCell>
                  <TableCell></TableCell>
                  <TableCell>General Manager</TableCell>
                  <TableCell>Additional Member.</TableCell>
                </TableRow>
                <TableRow key="6">
                  <TableCell>Apex Scale</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>Member Infrastructure.</TableCell>
                </TableRow>
                <TableRow key="7">
                  <TableCell>Apex Scale</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>Chairman & CEO.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/*Table*/}
          <div className="mb-3 text-sm md:text-base lg:text-lg">
            IRSSE officers, who are directly recruited, are initially appointed
            in the Divisional Office for Operation and Maintenance. They may
            also be posted in the Indian Railways Project Organisation or
            Construction Organisation, where they are responsible for Planning,
            Design, Installation, and Commissioning of new Signal &
            Telecommunication installations. In the current scenario, IRSSE
            officers enjoy favourable promotional opportunities compared to
            other Central Services. Additionally, due to the non-functionality
            of Selection Grade in Railways, Railway Officers tend to remain in
            field-level roles for longer durations, which enhances their
            effectiveness in policy-making.
          </div>
        </div>

        {/* Challenges and Oppurtunity*/}
        <div className="container mt-2">
          <h1 className=" font-semibold text-xl md:text-2xl md:font-semibold lg:text-3xl lg:font-bold my-3">
            Challenges and Opportunities
          </h1>
          <div className="mb-3 text-sm md:text-base lg:text-lg">
            Indian Railways is currently at a critical juncture, as the
            Government of India is taking numerous steps to enhance safety,
            efficiency, speed, and line capacity in train operations. The Signal
            & Telecommunication department plays a pivotal role in realizing
            these objectives, and without it, achieving these goals would remain
            a distant possibility. In recent years, the Signal &
            Telecommunication department has been at the forefront of adopting
            cutting-edge technologies from around the world, such as TCAS,
            Electronic Interlocking, Digital Axle Counter, Train Protection
            Warning System, Centralised Traffic Control, Train Management
            System, IP-MPLS, Long Term Evolution, among others. The department
            has consistently kept up with the rapid pace of technological
            advancements, ensuring that it remains at the forefront of
            innovation.
          </div>
        </div>
      </div>
    </>
  );
}
