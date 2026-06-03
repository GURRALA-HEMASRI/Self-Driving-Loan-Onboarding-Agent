import { customers } from "../data/customers";
import { documents } from "../data/documents";
import {
  WORKFLOW_STEPS,
  AGENT_MESSAGES
} from "../data/workflow";

class AgentService {
  constructor() {
    this.currentStep = 0;
  }

  getCurrentStep() {
    return WORKFLOW_STEPS[this.currentStep];
  }

  nextStep() {
    if (
      this.currentStep <
      WORKFLOW_STEPS.length - 1
    ) {
      this.currentStep++;
    }

    return this.getCurrentStep();
  }

  resetWorkflow() {
    this.currentStep = 0;
  }

  /*
   * GST LOOKUP
   */

  lookupGST(gstNumber) {
    const customer =
      customers[gstNumber];

    if (!customer) {
      return this.getNoDataResponse(
        gstNumber
      );
    }

    return {
      found: true,
      data: customer,
      source: "GST",
      message:
        "Business details fetched successfully from GST records."
    };
  }

  /*
   * PAN LOOKUP
   */

  lookupPAN(panNumber) {
    const customer =
      Object.values(
        customers
      ).find(
        (customer) =>
          customer.panNumber ===
          panNumber
      );

    if (!customer) {
      return this.getNoDataResponse(
        panNumber
      );
    }

    return {
      found: true,
      data: customer,
      source: "PAN",
      message:
        "Business details fetched successfully from PAN records."
    };
  }

  /*
   * AUTO DETECT
   * GST OR PAN
   */

  lookupIdentifier(
    identifier
  ) {
    if (
      identifier.length >= 15
    ) {
      return this.lookupGST(
        identifier
      );
    }

    return this.lookupPAN(
      identifier
    );
  }

  /*
   * NO DATA RULE
   */

  getNoDataResponse(
    identifier
  ) {
    return {
      found: false,

      data: {
        gstNumber:
          identifier.length >= 15
            ? identifier
            : "Not Available",

        panNumber:
          identifier.length < 15
            ? identifier
            : "Not Available",

        businessName:
          "Not Available",

        ownerName:
          "Not Available",

        mobileNumber:
          "Not Available",

        email:
          "Not Available",

        businessAddress:
          "Not Available",

        annualTurnover:
          "Not Available",

        bankAccountNumber:
          "Not Available",

        ifscCode:
          "Not Available"
      },

      source:
        "Not Available",

      message:
        "No records found. Please enter details manually."
    };
  }

  /*
   * OTP
   */

  verifyOTP(otp) {
    return otp === "123456";
  }

  /*
   * BANK DOCUMENT
   */

  validateBankStatement() {
    return {
      success: true,
      data:
        documents.bankStatement
    };
  }

  /*
   * ITR DOCUMENT
   */

  validateITR() {
    return {
      success: true,
      data: documents.itr
    };
  }

  /*
   * HAPPY PATH
   */

  crossVerify() {
    const gstTurnover =
      7500000;

    const bankTurnover =
      7200000;

    const difference =
      Math.abs(
        gstTurnover -
          bankTurnover
      );

    if (
      difference > 1000000
    ) {
      return {
        verified: false,
        status: "Mismatch",
        message:
          "⚠ Mismatch detected between GST and Bank Statement."
      };
    }

    return {
      verified: true,
      status: "Verified",
      message:
        "Cross verification successful."
    };
  }

  /*
   * DEMO MISMATCH
   */

  crossVerifyMismatch() {
    const gstTurnover =
      7500000;

    const bankTurnover =
      4000000;

    const difference =
      Math.abs(
        gstTurnover -
          bankTurnover
      );

    if (
      difference > 1000000
    ) {
      return {
        verified: false,
        status: "Mismatch",
        message:
          "⚠ Mismatch detected between GST and Bank Statement."
      };
    }

    return {
      verified: true,
      status: "Verified",
      message:
        "Cross verification successful."
    };
  }

  /*
   * FOLLOW UP QUESTIONS
   */

  getFollowUpQuestions(
    formData
  ) {
    const questions = [];

    if (
      formData.businessName ===
      "Not Available"
    ) {
      questions.push(
        "Please enter your business name."
      );
    }

    if (
      formData.ownerName ===
      "Not Available"
    ) {
      questions.push(
        "Please enter the owner name."
      );
    }

    if (
      formData.annualTurnover ===
      "Not Available"
    ) {
      questions.push(
        "Please provide your annual turnover."
      );
    }

    return questions;
  }
}

const agentService =
  new AgentService();

export default agentService;