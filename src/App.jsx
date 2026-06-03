import { useState } from "react";

import ChatPanel from "./components/ChatPanel";
import LoanForm from "./components/LoanForm";
import ActivityTimeline from "./components/ActivityTimeline";

import "./styles/dashboard.css";

function App() {
  const [formData, setFormData] = useState({
    gstNumber: "",
    panNumber: "",

    businessName: "Not Available",
    ownerName: "Not Available",
    mobileNumber: "Not Available",
    email: "Not Available",
    businessAddress: "Not Available",

    annualTurnover: "Not Available",
    bankAccountNumber: "Not Available",
    ifscCode: "Not Available",

    loanAmount: "",

    gstStatus: "Pending",
    otpStatus: "Pending",
    documentStatus: "Pending",
    verificationStatus: "Pending"
  });

  const [activities, setActivities] = useState([
    "Agent started onboarding"
  ]);

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <h1>
            Neenv Self-Driving Loan Onboarding Agent
          </h1>

          <p>
            AI-assisted MSME Loan Application
          </p>
        </div>
      </header>

      <main className="dashboard">
        {/* Left Panel */}
        <section className="left-panel">
          <ChatPanel
            formData={formData}
            setFormData={setFormData}
            activities={activities}
            setActivities={setActivities}
          />
        </section>

        {/* Right Panel */}
        <section className="right-panel">
          <LoanForm
            formData={formData}
            setFormData={setFormData}
          />

          <ActivityTimeline
            activities={activities}
          />
        </section>
      </main>
    </div>
  );
}

export default App;