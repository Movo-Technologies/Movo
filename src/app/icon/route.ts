import { NextResponse } from "next/server";

// Preserve the previous icon URL for saved shortcuts and the web manifest.
export function GET(request: Request) {
  return NextResponse.redirect(
    new URL("/brand/favicon-light.png", request.url),
  );
}
