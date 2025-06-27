import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dispatch, SetStateAction } from "react";
import { identifiers } from "@/utils/utilsFunctions";

export default function DeleteCard<T extends identifiers>({
  onDelete,
  setIsOpen,
  value,
}: {
  onDelete: (value: T) => Promise<void>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  value: T;
}) {
  return (
    <Card className="w-full max-w-md border-destructive/20">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4 pb-2">
          <AlertTriangle className="h-8 w-8 text-destructive" />
          <CardTitle className="text-black text-4xl font-bold">Delete Item</CardTitle>
        </div>
        <CardDescription>
        Are you sure you want to delete this item? All data will be lost
        permanently.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1 bg-background text-foreground"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </Button>
        <Button
          variant="destructive"
          className="flex-1"
          onClick={() => {
            onDelete(value);
            setIsOpen(false);
          }}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
