import Link from "next/link";
import LoginCard from "@/components/loginCard/loginCard";
import Input from "@/components/input/input";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-lvh">
      <p className="font-white"><Link className="underline font-black" href="./cadastro">Clique aqui</Link> para criar uma conta</p>
    </div>
  );
}
