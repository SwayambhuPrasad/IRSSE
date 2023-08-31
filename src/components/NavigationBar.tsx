"use client";
import { Articles } from "@/constants/Dropdowns/Articles";
import { ForIRSSE } from "@/constants/Dropdowns/ForIRSSE";
import { Resources } from "@/constants/Dropdowns/Resources";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import { DropDown } from "./DropDown";
import SwitchMode from "./SwitchMode";
import React from "react";

export default function NavigationBar() {
  return (
    <>
      <Navbar shouldHideOnScroll className="mt-4">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <Image
              src="/logo.jpeg"
              width={60}
              height={60}
              className="border rounded-full mx-2"
              alt="Picture of the author"
            />
          </Link>
          <p className="font-bold text-inherit">IRSSE</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/about" aria-current="page">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <DropDown {...ForIRSSE} />
          </NavbarItem>
          <NavbarItem>
            <DropDown {...Resources} />
          </NavbarItem>
          <NavbarItem>
            <DropDown {...Articles} />
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/gallery">
              Gallery
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/contact-us">
              Contact Us
            </Link>
          </NavbarItem>
          <SwitchMode />
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/signup" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
