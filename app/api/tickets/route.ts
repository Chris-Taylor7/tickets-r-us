// app/api/tickets/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  try {
    // fetches all tickets
    const tickets = await prisma.ticket.findMany({
      orderBy: {
        createdAt: 'desc' 
      },
      include: { 
        creator: true 
      } 
    });

    return NextResponse.json(tickets);
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json(
      { error: "Failed to fetch tickets" }, 
      { status: 500 }
    );
  }
}