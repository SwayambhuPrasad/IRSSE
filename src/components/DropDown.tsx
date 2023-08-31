import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import Link from "next/link";
import React from "react";
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
    <Dropdown
      closeOnSelect={false}
      shouldCloseOnBlur={false}
      placement="bottom-end"
    >
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
                <ChildDropDown {...item} />
              )}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};

const ChevronDownIcon = () => (
  <svg
    fill="none"
    height="14"
    viewBox="0 0 24 24"
    width="14"
    transform="rotate(50 50)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
      fill="currentColor"
    />
  </svg>
);
