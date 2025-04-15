import { NextResponse } from 'next/server'

export function middleware() {
  const response = NextResponse.next()

  // Set CSP headers
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
  )

  return response
}

export const config = {
  matcher: '/:path*',
} 