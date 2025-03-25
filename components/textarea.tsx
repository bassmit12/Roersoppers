import React from "react";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={`
          rounded-md border border-gray-300 px-3 py-2 text-sm font-medium
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className || ""}
        `}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
