import { faker } from "@faker-js/faker";
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table"
import { User } from "@/src/models/user.model";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"


export function UserList() {
  const users: User[] = Array.from({ length: 8 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    createdAt: faker.date.past(),
  }));
  return (
    <Card className="w-fit md:min-w-[80vh]">
      <CardHeader className="flex flex-row content-start justify-between pb-0">
        <CardTitle>Player List</CardTitle>
      </CardHeader>
      <CardContent className="w-fit overflow-x-auto md:min-w-[80vh]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Avatar</TableHead>
              <TableHead>Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Created at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  <Image className="rounded-full" width="32" height="32" alt="" src={user.avatar} /></TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell className="text-right">{user.createdAt.toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
