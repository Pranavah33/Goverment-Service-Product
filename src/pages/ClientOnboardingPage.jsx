import BasicDetailsForm from "../components/onboarding/BasicDetailsForm";
import AddressForm from "../components/onboarding/AddressForm";
import StatutoryDetailsForm from "../components/onboarding/StatutoryDetailsForm";
import OwnerDetailsTable from "../components/onboarding/OwnerDetailsTable";
import FormActions from "../components/onboarding/FormActions";

export default function ClientOnboardingPage() {
  return (
    <>
      <h2>Client Onboarding</h2>
      {<><BasicDetailsForm /><AddressForm /><StatutoryDetailsForm /><OwnerDetailsTable /><FormActions /></>}
    </>
  );
}
