import React from "react";
// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <Header />

        <div className="mx-auto w-full">{children}</div>

        <Footer />
      </main>
    </>
  );
}

export default MainLayout;
