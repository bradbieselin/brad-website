import { Asset, Entry, RichTextContent } from "contentful";

export interface NavItems {
    link: string;
    linkLabel: string;
}

export interface NavBar {
    NavItems: NavItems[];
}

export interface Landing {
    image: Asset;
    richText: RichTextContent;
}

export interface VerticleTimelineElement {
    dateRange: string;
    company: string;
    location: string;
    description: string;
}

export interface VerticleTimeline {
    timelineElements: VerticleTimelineElement[];
}
