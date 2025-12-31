export default function Sidebar() {
  return (
    <div
      style={{
        width: "340px",
        background: "#ffffff",
        padding: "20px",
        borderRight: "1px solid #e5e7eb",
      }}
    >
      <p style={{ fontWeight: 600 }}>Client Onboarding</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={activeItem}>Client Profile</li>
        <li style={menuItem}>Products</li>
        <li style={menuItem}>User Management</li>
        <li style={menuItem}>Roles & Permission</li>
        <li style={menuItem}>Membership Plans</li>
      </ul>
    </div>
  );
}

const menuItem = {
  padding: "10px 12px",
  borderRadius: "8px",
  cursor: "pointer",
};

const activeItem = {
  ...menuItem,
  background: "#fde2e2",
  color: "#e11d48",
  fontWeight: 500,
};
