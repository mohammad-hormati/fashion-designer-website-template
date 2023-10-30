import createIntlMiddleware from 'next-intl/middleware';

export default async function middleware(request) {
  // Step 1: Use the incoming request
  const defaultLocale = request.headers.get('x-default-locale') || 'en';

  // Step 2: Create and call the next-intl middleware
  const handleI18nRouting = createIntlMiddleware({
    // All locales across all domains
    locales: ['en', 'fa'],

    // Used when no domain matches (e.g. on localhost)
    defaultLocale: 'en',
  });
  const response = handleI18nRouting(request);

  // Step 3: Alter the response
  response.headers.set('x-default-locale', defaultLocale);

  return response;
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
