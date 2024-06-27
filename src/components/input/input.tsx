import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input( props : InputProps ) {
  return (
    <input className="p-3 bg-slate-300 rounded-lg" {...props}/>
  )
}