'use client'
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button,
  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,
  Popover, PopoverTrigger, PopoverContent

} from "@nextui-org/react";
import Image from "next/image";

export default function NavigationBar() {
  return (
    <>

      <Navbar shouldHideOnScroll className="mt-4">
        <NavbarBrand>
          <Image src="/logo.jpeg"
            width={60}
            height={60}
            className="border rounded-full mx-2"
            alt="Picture of the author" />
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
            <Dropdown >
              <DropdownTrigger>
                <Link color="foreground" href="#">
                  For IRSSE
                </Link>

              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem>
                  <Button
                  href="https://nextui.org/docs/components/link"
                  as={Link}
                  variant="light"
                  >
                     Profile of IRSSE Officers
                  </Button>
                 </DropdownItem>
                <DropdownItem
                  href="https://nextui.org/docs/components/link"
                  as={Link}>
                  Our National Awardees</DropdownItem>
                <DropdownItem
                  href="https://nextui.org/docs/components/link"
                  as={Link}>
                  Seniority List of IRSSE</DropdownItem>
                <DropdownItem
                  href="https://nextui.org/docs/components/link"
                  as={Link}>
                  Transfer & Postings</DropdownItem>
                <DropdownItem
                  href="https://nextui.org/docs/components/link"
                  as={Link}>
                  Deputation Opportunities</DropdownItem>
                <DropdownItem
                  href="https://nextui.org/docs/components/link"
                  as={Link}>
                  Contact Details</DropdownItem>


              </DropdownMenu>
            </Dropdown>


          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Resources
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Popover placement="bottom">
              <PopoverTrigger>
                <Link color="foreground" href="#">
                  Articles
                </Link>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div
                    href="https://nextui.org/docs/components/link"
                    as={Link}
                    className="text-small font-bold">Technical Articles</div>

                </div>
              </PopoverContent>

              <PopoverContent>
                <div
                  href="https://nextui.org/docs/components/link"
                  as={Link}
                  className="text-tiny">General Articles</div>

              </PopoverContent>
            </Popover>

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

  )
}