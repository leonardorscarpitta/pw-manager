import { ButtonHTMLAttributes } from "react";
import { ReactNode } from "react";

interface OtherButtonProps {
  children: ReactNode,
}

export default function Button({ children, ...props }: OtherButtonProps) {
  return (
    <button className="p-3 bg-purple-500 rounded-full hover:opacity-80 active:opacity-70 transition-all text-white font-bold" {...props}>
      {children}
    </button>
  )
}