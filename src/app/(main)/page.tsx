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
    <div className="w-screen h-screen">
      
      <Card className=" container m-auto h-full py-4 sm:flex sm:flex-row">
      <CardHeader className="pb-0  pt-2 h-1/2  px-4 sm:p-6 flex-col  items-center justify-center mb-2 sm:w-2/5 sm:h-full">
        
        <h4 className="font-bold text-5xl sm:text-7xl mb-3">Indian Railway Service of Signal Engineers</h4>
        <p className="text-tiny uppercase font-bold sm:text-2xl sm:mt-5">{HeroImages[page].title}</p>
        <small className="text-default-500 sm:text-lg ">{HeroImages[page].desc}</small>
      </CardHeader>
      <CardBody className="h-1/2 overflow-hidden  py-2 sm:w-3/5 sm:h-full">
      <Card 
      isFooterBlurred
      radius="lg"
      className="h-full border-none "
      style={{
        backgroundImage:`url("${HeroImages[page].url}")`,
        backgroundPosition:"center",
        backgroundSize:"cover"
      }}
      
    >
      <img
      className="hidden   h-1/2 w-1/2 object-cover"
      alt="NextUI hero Image with delay"
      src={HeroImages[page].url}
    />
    
      
    </Card>
    <Pagination
      total={5}
      page={page}
      onChange={(page)=>{
        
          if (page!==null){
            setPage(page)
            console.log(page)
          }
        
      }}
      classNames={{
        wrapper: "gap-0 overflow-visible h-8 rounded border border-divider m-auto mt-2",
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
