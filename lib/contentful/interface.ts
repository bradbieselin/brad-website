import { Asset, Entry, RichTextContent } from "contentful";

export interface NavItemsInterface {
    link: string;
    linkLabel: string;
}

export interface NavBarInterface {
    navItems: Entry<NavItemsInterface>[];
}

export interface LandingInterface {
    image: Asset;
    richText: RichTextContent;
}

export interface VerticleTimelineElementInterface {
    dateRange?: string;
    company?: string;
    location?: string;
    description?: string;
}

export interface VerticleTimelineInterface {
    timelineElements: VerticleTimelineElementInterface[];
}
