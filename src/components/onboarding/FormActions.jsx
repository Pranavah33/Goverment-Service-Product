export default function FormActions() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "12px",
        marginTop: "32px",
      }}
    >
      <button style={cancelBtn}>Cancel</button>
      <button style={saveBtn}>Save</button>
    </div>
  );
}

const cancelBtn = {
  padding: "8px 16px",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
  background: "#f3f4f6",
};

const saveBtn = {
  padding: "8px 16px",
  borderRadius: "6px",
  border: "none",
  background: "#ef4444",
  color: "#ffffff",
};
