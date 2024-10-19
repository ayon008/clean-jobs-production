import { createClient } from "next-sanity";


export const client = createClient({
    projectId: 'x89ff5qy',
    dataset: 'production',
    apiVersion: '2023-03-01', // https://www.sanity.io/docs/api-versioning
    useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})