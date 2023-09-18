// 1. import `NextUIProvider` component

import Image from "next/image";

export default function about() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <>
    <div className="container w-full h-full m-auto bg-white  flex flex-col items-center justify-center ">
        <div className="h-[200px] w-[90%] md:h-[400px] bg-cover" 
        style={{
          backgroundImage:`url('/aboutPage.jpg')`
        }}
        >      
        <div className="h-full w-full bg-black/40">       
          </div>   
        </div>
        
    </div>
    </>
  );
}
