// api/submit-bank-transfer-confirmation/route.ts

import { NextApiRequest, NextApiResponse } from "next";
import submitBankTransferConfirmation from "./submit-bank-transfer-confirmation";

export function POST(req: NextApiRequest, res: NextApiResponse) {
  return submitBankTransferConfirmation(req, res);
}