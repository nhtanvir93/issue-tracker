import React from "react";
import { TextField, TextArea, Heading } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-4">
      <Heading size="7">Create New Issue</Heading>
      <TextField.Root placeholder="Title">
        <TextField.Slot />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <div className="flex justify-end">
        <Button variant="solid">Submit</Button>
      </div>
    </div>
  );
};

export default NewIssuePage;
