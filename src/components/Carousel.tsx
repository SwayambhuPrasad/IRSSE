'use client'
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";


const Slides=[
    {
        index:1,
        url:'/1.jpg',
        title:'This is an awesome website created by ITER bros'
    },
    {
        index:2,
        url:'/2.jpg',
        title:'Swayambhu is the heart and soule of the project'
    },
    {
        index:1,
        url:'/3.jpg',
        title:'Rupesh is .... u gussed right..'
    }
]


export  const Carousel=()=>{
    const [currentSlide, setCurrentSlide]=useState(0)
    const prevSlide=()=>{
        const isFirstSlide= currentSlide===0;
        const newIndex=isFirstSlide?Slides.length-1 : currentSlide-1;
        setCurrentSlide(newIndex)
    }

    const nextSlide=()=>{
        const isLastSlide= currentSlide===Slides.length-1;
        const newIndex=isLastSlide?0:currentSlide+1;
        setCurrentSlide(newIndex)
    }
    return(
        
        <div className="max-w-[1400px] h-[400px] sm:h-[650px] w-full m-auto px-4 py-5 flex group">
            <div style={{
                backgroundImage:`url(${Slides[currentSlide].url})`
            }} className="w-full h-full rouded-2xl bg-center bg-cover duration-500 relative">
                <div className="md:flex-1">
                    <h4>IPS</h4>
                    <h1>
                        Offering Reliable Power Supply for Signalling Systems
                    </h1>
                    <p>
                        Wheather you're just getting started or
                        are an established brand, our powerful platform helps
                        your business grow.
                    </p>

                    <Button>Gallery</Button>

                </div>
                <div className="w-[200px] md:flex-1">
                    <img  src={Slides[1].url} alt="" />
                </div>
                
            </div>
        <div className=" hidden group-hover:block absolute w-14 top-[50%] left-5 -translate-x-0 -translate-y-[50%]
         rounded-full w-8 sm:w-12 p-2 bg-black/20 cursor-pointer"
        onClick={prevSlide}>
            <img src="/left.png" alt="" />
        </div>
        <div className=" hidden group-hover:block absolute w-14 top-[50%] right-5 -translate-x-0 -translate-y-[50%]
        w-8 sm:w-12  p-2 rounded-full bg-black/20 cursor-pointer"
        onClick={nextSlide}>
            <img src="/right.png" alt="" />
        </div>
            
        </div>
        
    )
}

export default Carousel;