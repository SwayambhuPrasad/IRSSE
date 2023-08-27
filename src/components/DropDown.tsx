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
  dropdownItems: Array<string | DropdownProps>;
  linkToPath: Array<string | undefined>;
}

export const DropDown: React.FC<DropdownProps> = ({
  name,
  dropdownItems,
  linkToPath,
}) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Link color="foreground" href="#" className="flex items-center gap-2">
          {name}
        </Link>
      </DropdownTrigger>
      <DropdownMenu aria-label="Custom item styles">
        {dropdownItems.map((item, index) => (
          <DropdownItem key={index}>
            {typeof item === "string" ? (
              <Button href={linkToPath[index]} as={Link} variant="light">
                {item}
              </Button>
            ) : (
              <Button variant="light">
                <DropDown {...item} />
              </Button>
            )}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
