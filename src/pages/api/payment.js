import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { cardholderName, cardNumber, expiryDate, amount, currency } = req.body;

  if (!cardholderName || !cardNumber || !expiryDate || !amount) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const payment = await prisma.payment.create({
      data: {
        cardholderName,
        cardNumber,
        expiryDate,
        amount,
        currency: currency || "INR",
        status: "success",
      },
    });

    return res.status(200).json({
      status: "success",
      message: "Payment processed successfully",
      transactionId: payment.transactionId,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "Payment processing failed. Please try again.",
    });
  }
}
