import { faker } from "@faker-js/faker";
import Image from "next/image";

import { cn } from "@/src/lib/utils";
import { User } from "@/src/models/user.model";

import { Marquee } from "../ui/marquee";

const UsersPreview = (user: User) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width="32" height="32" alt="" src={user.avatar} />
                <div className="flex flex-col">
                    <figcaption className="text-nowrap text-sm font-medium dark:text-white">
                        {user.name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">joined since {user.createdAt.toLocaleDateString()}</p>
                </div>
            </div>
        </figure>
    );
};

export function MarqueeUsersPreview() {
    const users: User[] = Array.from({ length: 30 }).map(() => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
        createdAt: faker.date.past(),
    }));

    const firstRow = users.slice(0, users.length / 2);
    const secondRow = users.slice(users.length / 2);
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:60s]">
                {firstRow.map((user) => (
                    <UsersPreview key={user.id} {...user} />
                ))}
            </Marquee>
            <Marquee pauseOnHover reverse className="[--duration:60s]">
                {secondRow.map((user) => (
                    <UsersPreview key={user.id} {...user} />
                ))}
            </Marquee>
        </div>
    );
}
