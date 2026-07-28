import React from "react";
import AppLayout from "./AppLayout";

interface Props {
  children: React.ReactNode;
}

const DetailTemplate = ({ children }: Props) => {
  return (
    <AppLayout backLink={{ to: "/", label: "← Back to search" }}>
      {children}
    </AppLayout>
  );
};

export default DetailTemplate;
