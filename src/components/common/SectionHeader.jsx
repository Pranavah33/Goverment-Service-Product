export default function SectionHeader({ title }) {
  return (
    <div style={{ margin: "32px 0 16px" }}>
      <p style={{ fontWeight: 600 }}>{title}</p>
      <hr style={{ border: "1px solid #e5e7eb" }} />
    </div>
  );
}
