export interface KHQRPayload {
  merchantName: string;
  merchantCity: string;
  amount: number;
  currency: "KHR" | "USD";
  transactionId: string;
}

export function generateKHQRPayload(data: KHQRPayload): string {
  // KHQR EMV QR Code payload generation
  // This is a simplified version - implement full EMV spec for production
  const payload = {
    payloadFormatIndicator: "01",
    merchantAccountInfo: {
      bakongAccountId: process.env.BAKONG_ACCOUNT_ID,
    },
    merchantCategoryCode: "5999",
    transactionCurrency: data.currency === "USD" ? "840" : "116",
    transactionAmount: data.amount.toFixed(2),
    merchantName: data.merchantName,
    merchantCity: data.merchantCity,
    additionalData: {
      referenceLabel: data.transactionId,
    },
  };

  return JSON.stringify(payload);
}

export async function verifyKHQRPayment(transactionId: string): Promise<boolean> {
  // Implement verification with Bakong API
  // This would poll the payment provider for transaction status
  try {
    // Placeholder for actual API call
    console.log(`Verifying payment: ${transactionId}`);
    return true;
  } catch (error) {
    console.error("Payment verification failed:", error);
    return false;
  }
}

export function generateQRCodeUrl(payload: string): string {
  // Generate QR code image URL using a QR code service
  const encoded = encodeURIComponent(payload);
  return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encoded}`;
}
