import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "./button";
import { Info } from "lucide-react";

interface TextPopoverProps {
  description: string;
}

export function TextPopover({ description }: TextPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="text-sm font-medium hover:bg-gray-200 p-2 h-auto"
        >
          <Info className="w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 text-sm">
        <p>{description}</p>
      </PopoverContent>
    </Popover>
  );
}
