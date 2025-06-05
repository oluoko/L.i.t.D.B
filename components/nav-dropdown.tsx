import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import FontManager from "@/components/font-manager";
import { DarkModeToggle } from "@/components/dark-mode-toggle";

export default function NavBarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MenuIcon className="size-6 cursor-pointer hover:bg-accent/20 rounded" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-auto">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <FontManager />
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-border/0" />
        <DropdownMenuItem asChild>
          <DarkModeToggle />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
