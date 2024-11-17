import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
    console.log(`Received event: ${event.type}`);
  } catch (error: any) {
    console.error(`Webhook error: ${error.message}`);
    return new NextResponse(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }

  console.log("Webhook handled successfully.");
  return new NextResponse(null, { status: 200 });
}
