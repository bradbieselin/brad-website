import { NavBarInterface } from "./interface";
import { createClient, Entry } from "contentful";

export const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || 'some-id',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'some-token',
})

//Fetch Conetnful Nav Content
export const getNavBarContent = async (id: string): Promise<NavBarInterface>  => {
    const contentfulNavBarData: Entry<NavBarInterface> = await contentfulClient.getEntry<NavBarInterface>(id);
    const navBar: NavBarInterface = {...contentfulNavBarData.fields}
    return navBar;
}

//Fetch contentful landing content

//Fetch VerticleTimelineContent