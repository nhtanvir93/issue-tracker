"use client";
import React from "react";
import { TextField, Heading } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-4">
      <Heading size="7">Create New Issue</Heading>
      <TextField.Root placeholder="Title">
        <TextField.Slot />
      </TextField.Root>
      <SimpleMDE placeholder="Description" />
      <div className="flex justify-end">
        <Button variant="solid">Submit</Button>
      </div>
    </div>
  );
};

export default NewIssuePage;
