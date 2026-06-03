function FormField({
  label,
  name,
  value,
  onChange,
  readOnly = false
}) {
  return (
    <div className="form-field">
      <label>{label}</label>

      <input
        type="text"
        name={name}
        value={value || ""}
        readOnly={readOnly}
        onChange={onChange}
      />
    </div>
  );
}

export default FormField;