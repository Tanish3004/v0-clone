import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// These routes do NOT require a user to log in
const isPublicRoute = createRouteMatcher([
    "/",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/api(.*)", // This ensures /api/inngest stays open and fully accessible to the dev server
]);

export default clerkMiddleware(async (auth, req) => {
    // Note the "!" inversion below: Protect if it is NOT a public route
    if (!isPublicRoute(req)) {
        await auth.protect();
    }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};