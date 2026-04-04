import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // هاد السطر كيقول للموقع: أي صفحة طلبها بنادم، وريه 404
  return NextResponse.rewrite(new URL('/404', request.url))
}

export const config = {
  // هاد السطر كيحمي كاع الصفحات
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
