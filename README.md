# Neenv Self-Driving Loan Onboarding Agent

## Overview

This project is a prototype implementation of the **Self-Driving Loan Onboarding Agent** assignment provided by Neenv Financial Technologies.

The application demonstrates how an AI-assisted onboarding agent can proactively guide MSME customers through the loan application process while automatically populating a loan application form in real time.

The solution follows the two key principles specified in the assignment:

* **Agent takes initiative** by driving the conversation and requesting required information step-by-step.
* **Agent never hallucinates** and displays "Not Available" whenever data cannot be found instead of generating fabricated information.

---
![](https://github.com/GURRALA-HEMASRI/Self-Driving-Loan-Onboarding-Agent/blob/a837786360789f5be7d1cb4f0d1a0ec23aa37838/Screenshot%202026-06-03%20155845.png)
![](https://github.com/GURRALA-HEMASRI/Self-Driving-Loan-Onboarding-Agent/blob/a837786360789f5be7d1cb4f0d1a0ec23aa37838/Screenshot%202026-06-03%20155921.png)
![](https://github.com/GURRALA-HEMASRI/Self-Driving-Loan-Onboarding-Agent/blob/a837786360789f5be7d1cb4f0d1a0ec23aa37838/Screenshot%202026-06-03%20155934.png)
## Features

### Split-Screen Interface

The application consists of two synchronized panels:

#### Left Panel – AI Loan Agent

* Conversational onboarding experience
* Guides users through the loan application journey
* Requests information in a structured sequence
* Provides status updates throughout the process

#### Right Panel – Live Application Form

* Automatically updates as data becomes available
* Displays fetched business details
* Allows manual review and editing
* Shows verification status for different onboarding stages

---

## Simulated Loan Onboarding Flow

### Step 1: Customer Identification

The agent asks for:

* GST Number OR
* PAN Number

### Step 2: Business Data Retrieval

Using mock data, the system retrieves:

* Business Name
* Owner Name
* Mobile Number
* Email Address
* Business Address
* Annual Turnover
* Bank Details

### Step 3: Verification Workflow

The agent simulates:

* GST Verification
* Consent Collection
* OTP Verification
* Bank Statement Submission
* ITR Submission

### Step 4: Loan Application Completion

The customer enters:

* Desired Loan Amount

The application is then marked as ready for human review.

---

## No-Hallucination Design

A key requirement of the assignment is that the agent must never invent data.

When customer information is unavailable:

* The agent clearly states that no records were found.
* Form fields display:

  * "Not Available"
* No assumptions are made.
* No values are fabricated.

This demonstrates safe behaviour expected in financial and lending workflows.

---

## Mock Data Used

The project intentionally uses static mock datasets.

### Sample Customers

1. ABC Traders

   * GST: 29ABCDE1234F1Z5
   * PAN: ABCDE1234F

2. XYZ Distributors

   * GST: 27XYZAB9876K1Z2
   * PAN: XYZAB9876K

### Mock Documents

* Bank Statement
* ITR Document
* Verification Statuses

No real customer data is used.

---

## Tech Stack

### Frontend

* React.js
* Vite
* JavaScript (ES6)

### State Management

* React Hooks

  * useState
  * useEffect

### Styling

* CSS

---

## Project Structure

```text
src/
│
├── components/
│   ├── ChatPanel.jsx
│   ├── ChatInput.jsx
│   ├── ChatMessage.jsx
│   ├── LoanForm.jsx
│   ├── ActivityTimeline.jsx
│   └── StatusBadge.jsx
│
├── services/
│   └── agentService.js
│
├── data/
│   ├── customers.js
│   ├── documents.js
│   └── workflow.js
│
├── styles/
│   ├── global.css
│   └── dashboard.css
│
├── App.jsx
└── main.jsx
```

---

## Installation

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Build Project

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

## Assumptions

To keep the assignment lightweight and focused:

* All APIs are mocked.
* OTP verification is simulated.
* Document verification is simulated.
* Customer records are static.
* No backend services are used.
* No database is required.

---

## Assignment Objective

The purpose of this prototype is to demonstrate:

* Proactive AI-driven onboarding
* Real-time form population
* Transparent verification workflow
* Safe handling of missing information
* Human-in-the-loop review process

This project is intended as a proof-of-concept and not a production-ready lending platform.
