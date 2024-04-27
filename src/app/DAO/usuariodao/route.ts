import { access } from "fs";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'; // Force dynamic route behavior

export async function GET(request: NextApiRequest) {
  // Define the response JSON object
  const data = {
    mensaje: 'NO',
    access : 'denied'
  };

  // Respond with JSON and status code 200
  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
