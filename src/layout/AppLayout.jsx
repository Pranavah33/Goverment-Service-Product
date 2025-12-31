import Header from "./Header";
import Sidebar from "./Sidebar";
import ContentWrapper from "./ContentWrapper";
import ClientOnboardingPage from "../pages/ClientOnboardingPage";

export default function AppLayout() {
  return (
    <>
      <Header />

      {/* Pink background layer */}
      <div
        style={{
          backgroundColor: "#fca5a5", // soft pink
          padding: "24px",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <Sidebar />
          <ContentWrapper>
            <ClientOnboardingPage />
          </ContentWrapper>
        </div>
      </div>
    </>
  );
}
