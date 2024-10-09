import React from "react";
// Components
import AlanHeader from "../components/AlanHeader";
import AlanFooter from "../components/AlanFooter";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <AlanHeader />

        <div>{children}</div>

        <AlanFooter />
      </main>
    </>
  );
}

export default MainLayout;
