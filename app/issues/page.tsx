import React from "react";
import Link from "next/link";
import { Button } from "@radix-ui/themes";

const IssuesPage = () => {
  return (
    <div>
      <Link href="/issues/new">
        <Button variant="solid">New Issue</Button>
      </Link>
    </div>
  );
};

export default IssuesPage;
