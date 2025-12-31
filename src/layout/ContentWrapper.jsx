export default function ContentWrapper({ children }) {
  return (
    <div
      style={{
        flex: 1,
        padding: "32px",
        background: "#ffffff",
      }}
    >
      {children}
    </div>
  );
}
