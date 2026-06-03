function StatusBadge({ status }) {
  const getBadgeClass = () => {
    switch (status) {
      case "Verified":
        return "verified";

      case "Not Available":
        return "not-available";

      case "Mismatch":
        return "mismatch";

      case "Bank Uploaded":
        return "bank-uploaded";

      case "Pending":
      default:
        return "pending";
    }
  };

  return (
    <span
      className={`status-badge ${getBadgeClass()}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;