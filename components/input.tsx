import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={`
          rounded-md border border-gray-300 px-3 py-2 text-sm font-medium
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className || ""}
        `}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

