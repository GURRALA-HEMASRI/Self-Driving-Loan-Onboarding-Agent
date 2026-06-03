import FormField from "./FormField";
import StatusBadge from "./StatusBadge";

function LoanForm({
  formData,
  setFormData
}) {
  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="loan-form">
      <h2>
        Loan Application Form
      </h2>

      {/* BUSINESS INFORMATION */}

      <div className="form-section">
        <h3>
          Business Information
        </h3>

        <FormField
          label="GST Number"
          name="gstNumber"
          value={
            formData.gstNumber
          }
          onChange={
            handleChange
          }
        />

        <FormField
          label="PAN Number"
          name="panNumber"
          value={
            formData.panNumber
          }
          onChange={
            handleChange
          }
        />

        <FormField
          label="Business Name"
          name="businessName"
          value={
            formData.businessName
          }
          onChange={
            handleChange
          }
        />

        <small>
          Source:
          GST / PAN Lookup
        </small>

        <FormField
          label="Owner Name"
          name="ownerName"
          value={
            formData.ownerName
          }
          onChange={
            handleChange
          }
        />

        <FormField
          label="Mobile Number"
          name="mobileNumber"
          value={
            formData.mobileNumber
          }
          onChange={
            handleChange
          }
        />

        <FormField
          label="Email"
          name="email"
          value={
            formData.email
          }
          onChange={
            handleChange
          }
        />

        <FormField
          label="Business Address"
          name="businessAddress"
          value={
            formData.businessAddress
          }
          onChange={
            handleChange
          }
        />
      </div>

      {/* FINANCIAL INFORMATION */}

      <div className="form-section">
        <h3>
          Financial Information
        </h3>

        <FormField
          label="Annual Turnover"
          name="annualTurnover"
          value={
            formData.annualTurnover
          }
          onChange={
            handleChange
          }
        />

        <FormField
          label="Bank Account Number"
          name="bankAccountNumber"
          value={
            formData.bankAccountNumber
          }
          onChange={
            handleChange
          }
        />

        <FormField
          label="IFSC Code"
          name="ifscCode"
          value={
            formData.ifscCode
          }
          onChange={
            handleChange
          }
        />

        <FormField
          label="Loan Amount"
          name="loanAmount"
          value={
            formData.loanAmount
          }
          onChange={
            handleChange
          }
        />
      </div>

      {/* VERIFICATION */}

      <div className="form-section">
        <h3>
          Verification Status
        </h3>

        <div className="status-row">
          <span>
            GST / PAN Verification
          </span>

          <StatusBadge
            status={
              formData.gstStatus
            }
          />
        </div>

        <div className="status-row">
          <span>
            OTP Verification
          </span>

          <StatusBadge
            status={
              formData.otpStatus
            }
          />
        </div>

        <div className="status-row">
          <span>
            Document Status
          </span>

          <StatusBadge
            status={
              formData.documentStatus
            }
          />
        </div>

        <div className="status-row">
          <span>
            Cross Verification
          </span>

          <StatusBadge
            status={
              formData.verificationStatus
            }
          />
        </div>
      </div>

      {/* HUMAN REVIEW SECTION */}

      <div className="form-section">
        <h3>
          Human Review Summary
        </h3>

        <div className="review-card">
          <p>
            <strong>
              Business Name:
            </strong>{" "}
            {
              formData.businessName
            }
          </p>

          <p>
            <strong>
              Owner:
            </strong>{" "}
            {
              formData.ownerName
            }
          </p>

          <p>
            <strong>
              GST:
            </strong>{" "}
            {
              formData.gstNumber
            }
          </p>

          <p>
            <strong>
              PAN:
            </strong>{" "}
            {
              formData.panNumber
            }
          </p>

          <p>
            <strong>
              Loan Amount:
            </strong>{" "}
            {formData.loanAmount
              ? `₹${formData.loanAmount}`
              : "Not Provided"}
          </p>

          <p>
            <strong>
              Verification:
            </strong>{" "}
            {
              formData.verificationStatus
            }
          </p>

          <p>
            <strong>
              Review Status:
            </strong>{" "}
            Ready For Human Review
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoanForm;