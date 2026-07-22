import React from "react";

interface Props {
  children: React.ReactNode;
}

const DetailTemplate = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl">
        {children}
      </div>
    </div>
  );
};

export default DetailTemplate;