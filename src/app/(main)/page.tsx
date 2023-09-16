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
    <div className="w-full h-screen bg-white ">
      
      <Card className=" container m-auto h-full py-4 sm:flex sm:flex-row border-none ">
      <CardHeader className="pb-0  pt-2 h-1/2  px-4 sm:p-6 flex-col  items-center justify-center mb-2 sm:w-2/5 sm:h-full">
        
        <h4 className="font-bold text-5xl sm:text-7xl mb-3">Indian Railway Service of Signal Engineers</h4>
        <p className="text-tiny uppercase font-bold sm:text-xl sm:mt-5">{HeroImages[page].title}</p>
        <small className="text-default-500 sm:text-lg ">{HeroImages[page].desc}</small>
      </CardHeader>
      <CardBody className="h-1/2 overflow-hidden  py-2 sm:w-3/5 sm:h-full ">
      <Card 
      isBlurred={true}
      isFooterBlurred
      radius="lg"
      className="h-full w-full border-none flex flex-row items-center gap-5 px-4 backdrop-blur-lg "
      style={{
        backgroundImage:`url("${HeroImages[page].url}")`,
        backgroundPosition:"center",
        backgroundSize:"cover",
    
      }}
      
    >
      
      <Card 
      isBlurred={true}
      isFooterBlurred
      radius="lg"
      className="h-3/4 w-5/6 border-none "
      
      
    > 
    <img className="w-full h-full object-cover" src={HeroImages[page].url} alt="" />
    
      
    </Card>
    <Card 
      
      isFooterBlurred
      radius="lg"
      className="h-1/5 w-1/6 border-none "
      
      
      
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
  );
}
