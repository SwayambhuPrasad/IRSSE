import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export interface DropdownProps {
  name: string;
  dropdownItems: string[];
  linkToPath?: string[];
}

export const DropDown: React.FC<DropdownProps> = ({
  name,
  dropdownItems,
  linkToPath,
}) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Link color="foreground" href="#">
          {name}
        </Link>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {dropdownItems.map((item, index) => (
          <DropdownItem key={index}>
            <Button
              href={linkToPath ? linkToPath[index] : undefined}
              as={linkToPath ? Link : DropdownItem}
              variant="light"
            >
              {item}
            </Button>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
