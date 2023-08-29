import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import Link from "next/link";
import React from "react";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { Button, ButtonGroup } from "@nextui-org/react";

export interface DropdownProps {
  name: string;
  dropdownItems: Array<string | DropdownProps>;
  linkToPath: Array<string | undefined>;
}

export const DropDown: React.FC<DropdownProps> = ({
  name,
  dropdownItems,
  linkToPath,
}) => {
  return (
    <Dropdown closeOnSelect={false} placement="bottom-end">
      <DropdownTrigger>
        <Link color="foreground" href="#" className="flex items-center gap-2">
          {name}
        </Link>
      </DropdownTrigger>
      <DropdownMenu aria-label="Custom item styles">
        {dropdownItems.map((item, index) => (
          <DropdownItem key={index}>
            {typeof item === "string" ? (
              <Button
                href={linkToPath[index]}
                as={Link}
                variant="light"
                className="w-full flex justify-start hover:translate-y-1"
              >
                {item}
              </Button>
            ) : (
              <ChildDropDown {...item} />
            )}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export const ChildDropDown: React.FC<DropdownProps> = ({
  name,
  dropdownItems,
  linkToPath,
}) => {
  return (
    <ButtonGroup variant="flat">
      <Button>{name}</Button>
      <Dropdown placement="right-start" closeOnSelect={false}>
        <DropdownTrigger>
          <Button isIconOnly>
            <ChevronDownIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label="Merge options"
          className="max-w-[auto]"
        >
          {dropdownItems.map((item, index) => (
            <DropdownItem key={index}>
              {typeof item === "string" ? (
                <Button
                  href={linkToPath[index]}
                  as={Link}
                  variant="light"
                  className="w-full flex justify-start hover:translate-y-1"
                >
                  {item}
                </Button>
              ) : (
                <Button variant="light">
                  <ChildDropDown {...item} />
                </Button>
              )}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};
