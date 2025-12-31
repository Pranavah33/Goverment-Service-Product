import { useState } from "react";
import SectionHeader from "../common/SectionHeader";

export default function OwnerDetailsTable() {
  const [owners, setOwners] = useState([
    {
      ownerName: "",
      contactNo: "",
      email: "",
      location: "",
      din: "",
    },
  ]);

  const handleChange = (index, field, value) => {
    const updatedOwners = [...owners];
    updatedOwners[index][field] = value;
    setOwners(updatedOwners);
  };

  const addRow = () => {
    setOwners([
      ...owners,
      {
        ownerName: "",
        contactNo: "",
        email: "",
        location: "",
        din: "",
      },
    ]);
  };

  const removeRow = (index) => {
    if (owners.length === 1) return;
    setOwners(owners.filter((_, i) => i !== index));
  };

  return (
    <>
      <SectionHeader title="Owner Details" />

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Owner Name</th>
            <th>Owner Contact No.</th>
            <th>Owner Email ID</th>
            <th>Location</th>
            <th>DIN Number</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {owners.map((owner, index) => (
            <tr key={index}>
              <td>
                <input
                  value={owner.ownerName}
                  onChange={(e) =>
                    handleChange(index, "ownerName", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  value={owner.contactNo}
                  onChange={(e) =>
                    handleChange(index, "contactNo", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  value={owner.email}
                  onChange={(e) =>
                    handleChange(index, "email", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  value={owner.location}
                  onChange={(e) =>
                    handleChange(index, "location", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  value={owner.din}
                  onChange={(e) =>
                    handleChange(index, "din", e.target.value)
                  }
                />
              </td>

              <td>
                <button onClick={() => removeRow(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "12px" }}>
        <button onClick={addRow}>+ Add Owner</button>
      </div>
    </>
  );
}

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

