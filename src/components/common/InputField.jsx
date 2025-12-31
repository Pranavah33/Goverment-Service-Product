export default function InputField({ label }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{ fontSize: "15px", color: "#374151" }}>
        {label}
      </label>
      <input
        style={{
          padding: "8px 10px",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
        }}
      />
    </div>
  );
}
