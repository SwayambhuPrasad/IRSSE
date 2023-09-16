"use client";
import image from "public/1.jpg"
import {HeroImages} from '@/components/ImageCarousel'

import { useSession } from "next-auth/react";
import Image from "next/image";
import { Button, Card, CardBody, CardFooter, CardHeader, Pagination } from "@nextui-org/react";
import { useState } from "react";
import PaginationComp from "@/components/PaginarionComp";

export default function App() {
  const [page,setPage]=useState(1)
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <>
    <div className="w-full h-screen ">
      
      <Card className=" container m-auto h-full py-4 sm:flex sm:flex-row border-none bg-transparent shadow-none "
      
      >
      <CardHeader className="pb-0  pt-2 h-1/2  px-4 sm:p-6 flex-col  items-center justify-center mb-2 sm:w-2/5 sm:h-full">
        
        <h4 className="font-bold text-5xl sm:text-7xl mb-3">Indian Railway Service of Signal Engineers</h4>
        <p className="text-tiny uppercase font-bold sm:text-xl sm:mt-5">{HeroImages[page].title}</p>
        <small className="text-default-500 sm:text-lg ">{HeroImages[page].desc}</small>
      </CardHeader>
      <CardBody className="h-1/2 overflow-hidden  py-2 sm:w-3/5 sm:h-full  ">
      <Card 
      
      isFooterBlurred
      radius="lg"
      className="h-full w-full border-none flex flex-row items-center gap-5 px-4 bg-gray-500 "
      style={{
        backgroundImage:`url("${HeroImages[page].url}")`,
        backgroundPosition:"center",
        backgroundSize:"cover",
    
      }}
      
    >      
      <Card 
      isFooterBlurred
      radius="lg"
      className=" hidden sm:block h-3/4 w-5/6 border-none "     
      
    > 
    
    <Image
      src={HeroImages[page].url}
      fill={true}
      alt="Picture of the author"   />
    
      
    </Card>
    <Card 
      
      isFooterBlurred
      radius="lg"
      className=" hidden sm:block h-1/5 w-1/6 border-none "
      
      
      
    > 
    <img className="w-full h-full object-cover" src={HeroImages[page-1].url} alt="" />
    
      
    </Card>
    
    
      
    </Card>
    <Pagination
      total={8}
      page={page}
      onChange={(page)=>{
        
          if (page!==null){
            setPage(page)
            console.log(page)
          }
        
      }}
      classNames={{
        wrapper: "gap-0 overflow-visible h-8 rounded border border-divider m-auto mt-4",
        item: "w-8 h-8 text-small rounded-none bg-transparent",
        cursor:
          "bg-gradient-to-b shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
      }}
    />
    
      </CardBody>
    </Card>
    
      </div>

      
      <div className="w-screen h-[50vh] container m-auto sm:mt-8 bg-transparent">

      <Card className="w-full  h-full py-4 border-none sm:flex sm:flex-row-reverse gap-5 bg-transparent shadow-none" >
      <CardHeader className=" sm:w-1/2 pb-0 pt-2 px-4 sm:px-6 flex-col items-start justify-center">
      <h4 className="font-bold text-3xl sm:text-5xl">IRSSE</h4>
      <small className="text-default-500 text-sm text-justify my-4 sm:text-base">The IRSSE, or the Indian
       Railway Service of Signal Engineers, is an organised Group ‘A’ Cadre
        within the Government of India. The dedicated officers of IRSSE are
         entrusted with critical responsibilities that encompass Planning,
          Designing, Commissioning, and Maintenance of the Signaling and
           Telecommunication Infrastructure. Their expertise ensures the safe, 
           efficient, and punctual operation of trains while also augmenting the
            line capacity of the Indian Railways.</small>
        <Button className="bg-blue-100 text-blue-600" >Learn More</Button>
        
        
      </CardHeader>
      <CardBody className=" w-1/2 h-full hidden sm:block overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/about.jpg"
          fill={true}
        />
      </CardBody>
    </Card>
      </div>

      </>
  );
}
