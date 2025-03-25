import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        className={`
          ${
            variant === "default"
              ? "bg-blue-500 text-white hover:bg-blue-700"
              : "border border-gray-300 text-gray-700 hover:bg-gray-100"
          }
          ${size === "sm" ? "px-3 py-2 text-sm" : size === "md" ? "px-6 py-3 text-base" : "px-8 py-4 text-lg"}
          rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
          ${className || ""}
        `}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

