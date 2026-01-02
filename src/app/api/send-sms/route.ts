import { adminContact } from "@/src/external/quickLinks";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_ARKESEL_KEY;

  const body = await req.json();
  // const resTemp = new NextResponse();

  console.log(body, "body in sms api");
  const message = body.finalMessage || "New notification";

  const url = "https://sms.arkesel.com/sms/api?action=send-sms";
  const data = {
    "action": "send-sms",
    "api_key": apiKey!,
    "to": adminContact,
    "from": "BIJOU",
    "sms": message
  };

  const queryParams = new URLSearchParams(data).toString();
  const requestUrl = `${url}&${queryParams}`;

  const config = {
    headers: {
      "Accept": "application/json"
    }
  };

  try {
    const response = await axios.get(requestUrl, config);
    console.log(response.data);
    const res = NextResponse.json({ info: 'SMS sent successfully' }, { status: 200 });
    return res;
  } catch (error) {
    console.error("Error sending SMS:", error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
