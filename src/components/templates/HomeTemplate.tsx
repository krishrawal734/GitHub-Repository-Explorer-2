import React from "react";
import AppLayout from "./AppLayout";

interface Props {
  children: React.ReactNode;
  backLink?: {
    to: string;
    label: string;
  };
}

const HomeTemplate = ({ children, backLink }: Props) => {
  return <AppLayout backLink={backLink}>{children}</AppLayout>;
};

export default HomeTemplate;
