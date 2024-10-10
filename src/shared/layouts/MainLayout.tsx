import React from "react";
// Components
import AlanHeader from "@/shared/components/AlanHeader";
import AlanFooter from "@/shared/components/AlanFooter";

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
