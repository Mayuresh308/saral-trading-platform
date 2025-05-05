// // app/api/news/route.ts
// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     const res = await fetch("https://backend-swis.onrender.com/news"); // ← change to your deployed backend URL
//     const data = await res.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
//   }
// }








// app/api/news/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch("https://backend-swis.onrender.com/news", {
      cache: "no-store", // prevent edge/server cache
    });
    const data = await res.json();

    const response = NextResponse.json(data);
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}
