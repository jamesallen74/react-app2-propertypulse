import React from "react";
import "@/assets/styles/global.css";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Home",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
