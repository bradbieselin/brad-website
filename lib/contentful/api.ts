import { createClient } from "contentful";

export const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || 'some-id',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'some-token',
})

//Fetch Conetnful Nav Content

//Fetch contentful landing content

//Fetch VerticleTimelineContent