import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <main>
      <Navbar>{children}</Navbar>
    </main>
  );
};

export default layout;
