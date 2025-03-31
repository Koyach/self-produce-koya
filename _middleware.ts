import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

// Define the middleware function separately
function middleware(request: NextRequest) {
  console.log('Middleware triggered for path:', request.nextUrl.pathname); // Log the requested path

  // Configure next-intl middleware
  const handleI18nRouting = createMiddleware({
    locales: ['en', 'ja'], // Supported locales
    defaultLocale: 'ja'   // Default locale if none matches
  });

  // Execute the next-intl middleware
  return handleI18nRouting(request);
}

// Export the middleware function as the default export
export default middleware;

// Export the config object separately
export const config = {
  // Match only internationalized pathnames:
  // - The root path (/)
  // - Paths starting with /en or /ja, followed by anything (or nothing)
  matcher: ['/', '/(ja|en)/:path*']
};
