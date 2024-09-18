import React from "react";
import "@styles/global.css";
import Nav from "@components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Anh Dung",
  description: "CV Online of DungPA",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
