import React from "react";
import Link from "next/link";
import { Button, Table } from "@radix-ui/themes";
import { PrismaClient } from "@prisma/client";
import IssueStatusBadge from "../components/IssueStatusBadge";

const prisma = new PrismaClient();

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div>
      <div className="flex justify-end">
        <Link href="/issues/new">
          <Button variant="solid">New Issue</Button>
        </Link>
      </div>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden sm:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden sm:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.RowHeaderCell>
                {issue.title}
                <div className="block sm:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.RowHeaderCell>
              <Table.Cell className="hidden sm:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden sm:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
