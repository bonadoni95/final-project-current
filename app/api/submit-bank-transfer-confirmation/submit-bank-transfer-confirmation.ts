// api/submit-bank-transfer-confirmation.ts

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export default async function submitBankTransferConfirmation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const { orderId, bankTransferProof } = req.body;

    // Validate input data
    if (!orderId || !bankTransferProof) {
      return NextResponse.json(
        { error: "Missing orderId or bankTransferProof" },
        { status: 400 }
      );
    }

    // Update order status in the database
    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: {
        bankTransferProof: bankTransferProof, // Save the bank transfer proof in the database
        status: "pending_verification", // Update the order status to indicate pending verification
      },
    });

    return res
      .status(200)
      .json({
        message: "Bank transfer confirmation submitted successfully",
        updatedOrder,
      });
  } catch (error) {
    console.error("Error submitting bank transfer confirmation:", error);
    return NextResponse.json(
      { error: "Failed to submit bank transfer confirmation" },
      { status: 500 }
    );
  }
}