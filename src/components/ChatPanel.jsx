import { useEffect, useState } from "react";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

import agentService from "../services/agentService";

function ChatPanel({
  formData,
  setFormData,
  activities,
  setActivities
}) {
  const [messages, setMessages] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [step, setStep] =
    useState("IDENTIFIER");

  /*
   * DEMO MODE
   *
   * HAPPY
   * MISMATCH
   */

  const DEMO_MODE = "HAPPY";

  useEffect(() => {
    setMessages([
      {
        sender: "agent",
        text:
          "Hello 👋 I will help you complete your loan application."
      },
      {
        sender: "agent",
        text:
          "Please provide your GST Number or PAN Number."
      }
    ]);
  }, []);

  const addAgentMessage = (
    text
  ) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "agent",
        text
      }
    ]);
  };

  const addActivity = (
    activity
  ) => {
    setActivities((prev) => [
      ...prev,
      activity
    ]);
  };

  const handleIdentifier =
    (identifier) => {
      const result =
        agentService.lookupIdentifier(
          identifier
        );

      setFormData((prev) => ({
        ...prev,
        ...result.data,

        gstStatus:
          result.found
            ? "Verified"
            : "Not Available"
      }));

      addActivity(
        "Identifier Received"
      );

      if (result.found) {
        addActivity(
          `Data fetched from ${result.source}`
        );
      } else {
        addActivity(
          "No Data Found"
        );
      }

      addAgentMessage(
        result.message
      );

      const questions =
        agentService.getFollowUpQuestions(
          result.data
        );

      if (
        questions.length > 0
      ) {
        setTimeout(() => {
          questions.forEach(
            (question) => {
              addAgentMessage(
                question
              );
            }
          );
        }, 1000);
      }

      setTimeout(() => {
        addAgentMessage(
          "Do you consent to fetch and verify the available information? (Yes / No)"
        );

        setStep("CONSENT");
      }, 1500);
    };

  const handleConsent = (
    input
  ) => {
    if (
      input.toLowerCase() ===
      "yes"
    ) {
      addActivity(
        "Consent Granted"
      );

      addAgentMessage(
        "Consent received successfully."
      );

      setTimeout(() => {
        addAgentMessage(
          "Please enter OTP: 123456"
        );

        setStep("OTP");
      }, 1000);
    } else {
      addAgentMessage(
        "Consent is required to continue."
      );
    }
  };

  const handleOTP = (otp) => {
    const verified =
      agentService.verifyOTP(
        otp
      );

    if (!verified) {
      addAgentMessage(
        "Invalid OTP. Please try again."
      );
      return;
    }

    setFormData((prev) => ({
      ...prev,
      otpStatus: "Verified"
    }));

    addActivity(
      "OTP Verified"
    );

    addAgentMessage(
      "OTP verified successfully."
    );

    setTimeout(() => {
      addAgentMessage(
        "Type BANK to simulate Bank Statement upload."
      );

      setStep(
        "BANK_STATEMENT"
      );
    }, 1000);
  };

  const handleBankStatement =
    () => {
      setFormData((prev) => ({
        ...prev,
        documentStatus:
          "Bank Uploaded"
      }));

      addActivity(
        "Bank Statement Uploaded"
      );

      addAgentMessage(
        "Bank Statement uploaded successfully."
      );

      setTimeout(() => {
        addAgentMessage(
          "Type ITR to simulate ITR upload."
        );

        setStep("ITR");
      }, 1000);
    };

  const handleITR = () => {
    const verification =
      DEMO_MODE ===
      "MISMATCH"
        ? agentService.crossVerifyMismatch()
        : agentService.crossVerify();

    setFormData((prev) => ({
      ...prev,

      documentStatus:
        "Verified",

      verificationStatus:
        verification.status
    }));

    addActivity(
      "ITR Uploaded"
    );

    addActivity(
      verification.message
    );

    addAgentMessage(
      verification.message
    );

    setTimeout(() => {
      addAgentMessage(
        "What loan amount would you like to apply for?"
      );

      setStep(
        "LOAN_AMOUNT"
      );
    }, 1000);
  };

  const handleLoanAmount = (
    amount
  ) => {
    setFormData((prev) => ({
      ...prev,
      loanAmount: amount
    }));

    addActivity(
      `Loan Amount Requested ₹${amount}`
    );

    addAgentMessage(
      `Loan amount ₹${amount} captured successfully.`
    );

    setTimeout(() => {
      addAgentMessage(
        "Application Completed."
      );

      addAgentMessage(
        "All available information has been collected and verified."
      );

      addAgentMessage(
        "Ready For Human Review."
      );

      addActivity(
        "Application Ready For Human Review"
      );

      setStep("REVIEW");
    }, 1000);
  };

  const processUserInput = (
    input
  ) => {
    switch (step) {
      case "IDENTIFIER":
        handleIdentifier(
          input
        );
        break;

      case "CONSENT":
        handleConsent(input);
        break;

      case "OTP":
        handleOTP(input);
        break;

      case "BANK_STATEMENT":
        handleBankStatement();
        break;

      case "ITR":
        handleITR();
        break;

      case "LOAN_AMOUNT":
        handleLoanAmount(
          input
        );
        break;

      default:
        break;
    }
  };

  const handleUserMessage = (
    input
  ) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: input
      }
    ]);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      processUserInput(
        input
      );
    }, 1200);
  };

  return (
    <div className="chat-panel">
      <div className="chat-header">
        Loan Agent
      </div>

      <div className="chat-body">
        {messages.map(
          (
            message,
            index
          ) => (
            <ChatMessage
              key={index}
              message={message}
            />
          )
        )}

        {loading && (
          <TypingIndicator />
        )}
      </div>

      <ChatInput
        onSendMessage={
          handleUserMessage
        }
        disabled={
          step === "REVIEW"
        }
      />
    </div>
  );
}

export default ChatPanel;