import InputField from "../common/InputField";
import SectionHeader from "../common/SectionHeader";

export default function StatutoryDetailsForm() {
  return (
    <>
      <SectionHeader title="Statutory Details" />

      <div style={grid}>
        <InputField label="PAN" />
        <InputField label="Name as per PAN" />
        <InputField label="TAN" />

        <InputField label="GST Number" />
        <InputField label="Name as per GST" />
        <InputField label="PF Number" />
      </div>
    </>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
};
