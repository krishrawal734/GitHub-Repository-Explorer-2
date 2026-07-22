import React from "react";

interface Props {
  children: React.ReactNode;
}

const HomeTemplate = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-center text-4xl font-bold">
          Github Repository Explorer
        </h1>

        {children}

      </div>
    </div>
  );
};

export default HomeTemplate;