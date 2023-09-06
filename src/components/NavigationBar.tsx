"use client";
import { Articles } from "@/constants/Dropdowns/Articles";
import { ForIRSSE } from "@/constants/Dropdowns/ForIRSSE";
import { Resources } from "@/constants/Dropdowns/Resources";
import {
  Button,
  Link as LinkUI,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { DropDown, DropdownProps } from "./DropDown";
import SwitchMode from "./SwitchMode";
import { Url } from "url";

const menuItems: Array<DropdownProps> = [
  { name: "About", dropdownItems: [], linkToPath: ["/about"] },
  ForIRSSE,
  Resources,
  Articles,
  { name: "Gallery", dropdownItems: [], linkToPath: ["/gallery"] },
  { name: "Contact Us", dropdownItems: [], linkToPath: ["/contact-us"] },
  { name: "Login", dropdownItems: [], linkToPath: ["/login"] },
];
export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Navbar
        shouldHideOnScroll
        className="mt-4"
        onMenuOpenChange={setIsMenuOpen}
        isBlurred
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
          <NavbarBrand>
            <Link color="foreground" href="/">
              <Image
                src="/logo.jpeg"
                width={60}
                height={60}
                className="border rounded-full mx-2 w-13 h-13 max-sm:w-10 max-sm:h-10"
                alt="Picture of the author"
              />
            </Link>
            <p className="font-bold text-inherit">IRSSE</p>
            <div className="lg:hidden mx-4">
              <SwitchMode />
            </div>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden lg:flex gap-4" justify="center">
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
            <Button as={Link} color="primary" href="/sign-up" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <LinkUI
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                // size="lg"
              >
                {item.dropdownItems.length === 0 ? (
                  <Link href={item.linkToPath[0] as unknown as Url}>{item.name}</Link>
                ) : (
                  <DropDown {...item} />
                )}
              </LinkUI>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
