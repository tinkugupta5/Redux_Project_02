import React from "react";
import Layout from "./Layout";

const PageNotFound = () => {
  const logo = "https://fakeimg.pl/1700x820/?text=404&font=lobster";

  return (
    <Layout>
      <img src={logo} alt="logo" style={{ width: "100%" }} />
    </Layout>
  );
};

export default PageNotFound;
