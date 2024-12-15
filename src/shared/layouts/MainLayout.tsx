import React from "react";
// Components
import AlanHeader from "@/shared/components/AlanHeader";
import AlanFooter from "@/shared/components/AlanFooter";
import AlanStairTransition from "@/shared/components/AlanStairTransition";
import AlanPageTransition from "@/shared/components/AlanPageTransition";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <AlanHeader />

        <AlanStairTransition />
        <AlanPageTransition>{children}</AlanPageTransition>

        <AlanFooter />
      </main>
    </>
  );
}

export default MainLayout;
