import InputField from "../common/InputField";
import SectionHeader from "../common/SectionHeader";

export default function AddressForm() {
  return (
    <>
      <SectionHeader title="Address" />

      <div style={grid}>
        <InputField label="Address Line 1" />
        <InputField label="Landmark" />
        <InputField label="Pincode" />

        <InputField label="District" />
        <InputField label="State" />
        <InputField label="Country" />
      </div>
    </>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
};
