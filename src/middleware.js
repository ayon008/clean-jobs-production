import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const cookieStore = cookies()
    const userTokenObj = cookieStore.get('userToken');
    const userToken = userTokenObj?.value;
    console.log(userToken);
    const loginURL = new URL('/login', request.url);
    loginURL.searchParams.append('redirect', pathname);
    loginURL.searchParams.append('message', 'You need to log in to access this page.');

    if (!userToken) {
        return NextResponse.redirect(loginURL);
    }
    else if (userToken) {
        return NextResponse.next();
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/profile', '/messages', '/search/:leads', '/search/:leads/:states', '/search/:leads/:states/:id'],
}