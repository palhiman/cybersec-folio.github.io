import { db } from "@/db";
import { contactMessages } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    await db.insert(contactMessages).values({
      name,
      email,
      subject,
      message,
    });

    return Response.json({ ok: true, message: "Message sent successfully" });
  } catch {
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
