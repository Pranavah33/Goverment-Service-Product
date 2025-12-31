import InputField from "../common/InputField";
import SectionHeader from "../common/SectionHeader";

export default function BasicDetailsForm() {
  return (
    <>
      <SectionHeader title="Basic Details" />

      <div style={grid}>
        <InputField label="Business Name" />
        <InputField label="Business Type" />
        <InputField label="Business Sub Type" />

        <InputField label="Website" />
        <InputField label="Contact Number" />
        <InputField label="Alternative Contact Number" />
      </div>
    </>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
};
