import React from "react";

interface BadgeProps {
  text: string;
}

const Badge = React.memo(({ text }: BadgeProps) => {
  return (
    <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
      {text}
    </span>
  );
});

export default Badge;