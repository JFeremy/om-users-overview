'use client'

import Image from "next/image";
import Link from "next/link";
import { useQueryState } from "nuqs";

import { navigationLinks } from "@/src/constants/navigations";
import { sectionParser } from "@/src/lib/searchParams";

import { Button } from "../ui/button";


export const Header = () => {
    const [section, setSection] = useQueryState('section', sectionParser);

    return (<header className="flex flex-row justify-center p-10 md:justify-between">
        <div className="flex flex-row items-center gap-4">
            <Link href="https://www.opusmajor.io/" className="animate-pulse">
                <Image
                    src="/assets/opus-logo.svg"
                    alt="Opus Major logo"
                    width={200}
                    height={100}
                />
            </Link>
            <Link href="https://www.linkedin.com/company/opusmajor/" className="opacity-75">
                <Image
                    src="/assets/linkedin.svg"
                    alt="LinkedIn logo"
                    width={15}
                    height={15}
                />
            </Link>
        </div>

        <div className="hidden flex-row gap-6 md:flex">
            {navigationLinks.map((navigationLink) =>
                <Button disabled={section === navigationLink.params} onClick={() => setSection(navigationLink.params)} variant={"ghost"} key={navigationLink.params} className={`flex flex-row gap-2 text-lg font-semibold text-muted `}>
                    <navigationLink.icon className="size-10" />
                    {navigationLink.label}
                </Button>
            )}
        </div>
    </header>)
}
