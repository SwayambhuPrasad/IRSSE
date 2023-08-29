"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import { DropDown } from "./DropDown";
import { ForIRSSE } from "@/constants/Dropdowns/ForIRSSE";
import { Resources } from "@/constants/Dropdowns/Resources";
import { Articles } from "@/constants/Dropdowns/Articles";

export default function NavigationBar() {
  return (
    <>
      <Navbar shouldHideOnScroll className="mt-4">
        <NavbarBrand>
          <Image
            src="/logo.jpeg"
            width={60}
            height={60}
            className="border rounded-full mx-2"
            alt="Picture of the author"
          />
          <p className="font-bold text-inherit">IRSSE</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
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
