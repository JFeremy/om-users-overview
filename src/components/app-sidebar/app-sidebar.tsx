'use client'
import { X } from "lucide-react";
import Image from "next/image"
import { useQueryState } from "nuqs";
import { useState } from "react";

import { navigationLinks } from "@/src/constants/navigations"
import { sectionParser } from "@/src/lib/searchParams";
import { Tabs } from "@/src/models/navigation.model";

import { Button } from "../ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";


export function AppSidebar() {
    const [section, setSection] = useQueryState('section', sectionParser);
    const [isOpen, setIsOpen] = useState(false);

    const handleSectionChange = (newSection: Tabs) => {
        setSection(newSection);
        setIsOpen(false);
    };

    return (
        <Drawer open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
            <DrawerTrigger className="fixed bottom-10 z-10 animate-pulse md:hidden" asChild>
                <Image
                    onClick={() => setIsOpen(true)}
                    src="/assets/logo_black.png"
                    alt="logo"
                    width={50}
                    height={50}
                />
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle className="flex justify-center">
                            <Image
                                src="/assets/name_black.png"
                                alt="Opus Major logo"
                                width={200}
                                height={100}
                            /></DrawerTitle>
                    </DrawerHeader>
                    <div className="flex flex-col gap-4 p-4 pb-0">
                        {navigationLinks.map((navigationLink) =>
                            <Button disabled={section === navigationLink.params} onClick={() => handleSectionChange(navigationLink.params)} variant={"ghost"} key={navigationLink.params} className={`flex flex-row gap-2 text-lg font-semibold`}>
                                <navigationLink.icon className="size-10" />
                                {navigationLink.label}
                            </Button>
                        )}
                    </div>
                    <DrawerFooter className="flex items-center">
                        <DrawerClose asChild>
                            <Button onClick={() => setIsOpen(false)} variant="outline" size="icon"><X /></Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
