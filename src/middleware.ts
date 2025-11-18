
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const idToken = request.cookies.get('idToken')?.value;

  if (idToken) {
    requestHeaders.set('X-Firebase-AppCheck', idToken);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: "/admin/:path*",
};
