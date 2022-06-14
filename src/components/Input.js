import React from "react";

export default function Input({placeholder = 'input', value, ...props}) {
  return (
    <input
      className="border-2 border-slate-200 w-full mb-[10px] p-2"
      type="text"
      placeholder={placeholder}
      value={value}
      {...props}
    />
  );
}
