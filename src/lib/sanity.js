import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";


export function role() {
    const cookieStore = cookies()
    const userTokenObj = cookieStore.get('userToken');
    const token = userTokenObj?.value;
    const decoded = jwtDecode(token);
    const isAdmin = decoded?.isAdmin;
    return isAdmin;
}

export const client = createClient({
    projectId: 'x89ff5qy',
    dataset: 'production',
    apiVersion: '2023-03-01', // https://www.sanity.io/docs/api-versioning
    useCdn: false,
    token: role && 'skZ9P0xCzVCkc4K7y7iwMvz7uQloTq12SRTmZRTBI7w8bPh4oE0bfbteVWJwsEtgnETreSfK2aQHfawHNCj44kJ136LXoLRaYRJfDbnyQtoVI7oXDrH17HnOT4o0jAfbOCHsREXIcsC4Uk1DYODFfz4QWfwOkKrgkamR0jFj1VbLa0oj1fpE'
})

const builder = imageUrlBuilder(client);
export function urlFor(source) {
    return builder.image(source)
}