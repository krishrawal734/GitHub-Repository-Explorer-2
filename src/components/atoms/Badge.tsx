import React from "react";

interface BadgeProps {
  text: string;
}

const Badge = React.memo(({ text }: BadgeProps) => {
  return (
    <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
      {text}
    </span>
  );
});

export default Badge;
