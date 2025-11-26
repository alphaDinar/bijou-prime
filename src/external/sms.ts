import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_ARKESEL_KEY;

export const sendSMS = async (contact: string, message: string) => {
  const url = "https://sms.arkesel.com/sms/api?action=send-sms";
  const data = {
    "action": "send-sms",
    "api_key": apiKey!,
    "to": contact,
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
  } catch (error) {
    console.error("Error sending SMS:", error);
  }
}