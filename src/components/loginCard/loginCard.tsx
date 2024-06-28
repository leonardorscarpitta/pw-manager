import { ReactNode } from 'react';

interface LoginCardProps {
  title: string,
  children: ReactNode,
}

export default function LoginCard({ title, children }: LoginCardProps ) {
  return (
    <div className="flex flex-col gap-y-6 bg-white font-bold text-black rounded-lg p-16 bg-white">
      <h1 className="text-center font-black text-purple-500 uppercase">{title}</h1>
      {children}
    </div>
  )
}