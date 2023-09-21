"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Input,
  Textarea,
  Button,
} from "@nextui-org/react";

const page = () => {
  return (
    <div>
      <div className="container w-full h-full m-auto lg:px-14 p-5   flex flex-col items-center justify-center px-5 ">
        <div className=" text-center uppercase text-purple-500/60 font-light text-sm lg:text-sm">
          Got a Question?
        </div>
        <div className=" text-center text-base capitalize">contact us</div>
        <div className=" text-center text-sm md:text-base w-full lg:w-[40%] md:w-[50%] my-4 ">
          We're here to help and answer any question you might have. We look
          forward to hearing from you.
        </div>

        {/*Contact Form*/}
        <div>
          <Card className="py-4 rounded-md">
            <CardBody className="overflow-visible py-2 space-y-5">
              <div className="flex  w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                  type="text"
                  label="First Name"
                  placeholder="First"
                  labelPlacement="outside"
                />
                <Input
                  type="text"
                  label="Last Name"
                  placeholder="Last"
                  labelPlacement="outside"
                />
              </div>
              <Input
                type="text"
                label="Email"
                placeholder="Email"
                labelPlacement="outside"
              />
              <Textarea
                type="text"
                label="Message"
                placeholder="Write Something..."
                labelPlacement="outside"
              ></Textarea>
              <Button className="bg-blue-100 dark:bg-blue-400/20 text-blue-500 rounded-sm lg:text-base font-normal dark:text-blue-500">
                Submit
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
