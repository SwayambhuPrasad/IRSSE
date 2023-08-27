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
            <Link color="foreground" href="#">
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
            <Link color="foreground" href="#">
              Resources
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Articles
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Gallery
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
