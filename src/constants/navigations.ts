import { LineChart, LucideIcon, UserPlus, Users } from "lucide-react";

import { Tabs } from "../models/navigation.model";

export interface NavigationLink {
    readonly params: Tabs;
    readonly icon: LucideIcon;
    readonly label: string;
}
export const navigationLinks: NavigationLink[] = [{
    params: Tabs.GRAPH,
    icon: LineChart,
    label: "Analytics",
}, {
    params: Tabs.LIST,
    icon: Users,
    label: "Players",
}, {
    params: Tabs.FORM,
    icon: UserPlus,
    label: "Add a user",
}]