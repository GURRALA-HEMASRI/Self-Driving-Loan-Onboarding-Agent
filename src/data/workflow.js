export const WORKFLOW_STEPS = [
  "GST",
  "CONSENT",
  "OTP",
  "BANK_STATEMENT",
  "ITR",
  "LOAN_AMOUNT",
  "REVIEW"
];

export const AGENT_MESSAGES = {
  welcome:
    "Hello 👋 I will help you complete your loan application.",

  gst:
    "Please provide your GST Number.",

  consent:
    "I found your business details. Do you consent to fetch GST data?",

  otp:
    "Consent received. Please enter the OTP sent to your registered mobile number.",

  bankStatement:
    "OTP verified. Please upload your latest bank statement.",

  itr:
    "Bank statement received. Please upload your latest ITR document.",

  loanAmount:
    "Documents verified. What loan amount would you like to apply for?",

  review:
    "Application completed successfully. Ready for human review."
};