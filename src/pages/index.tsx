import React, { useEffect } from "react";
import Router from "next/router";

const Index: React.FC = () => {
  useEffect(() => {
    Router.push("/admin/dashboard");
  }, []);

  return <div />;
};

export default Index;
