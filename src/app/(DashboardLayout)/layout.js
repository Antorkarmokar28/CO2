import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen">{children}</div>
    </main>
  );
};

export default layout;
