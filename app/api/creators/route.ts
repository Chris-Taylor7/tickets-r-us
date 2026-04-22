// app/api/tickets/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  try {
    // fetches users tickets
    const creators = await prisma.creator.findMany({
      orderBy: {
        createdAt: 'desc' 
      },
      include: { 
        tickets: true 
      } 
    });

    return NextResponse.json(creators);
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json(
      { error: "Failed to fetch creators" }, 
      { status: 500 }
    );
  }
}