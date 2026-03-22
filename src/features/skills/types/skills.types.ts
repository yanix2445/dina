import { ReactNode } from "react";

export type Expertise = {
    title: string;
    items: string[];
    icon: ReactNode;
};

export type Certification = {
    name: string;
    date: string;
    desc: string;
    href?: string;
};
