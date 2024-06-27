import LoginCard from "@/components/loginCard/loginCard";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import Link from "next/link";

export default function CadastroPage() {
  return (
    <div className="flex items-center justify-center h-lvh">
      <form className="flex">
        <LoginCard title="Cadastro">
          <Input type="text" placeholder="Seu Nome" />
          <Input type="email" placeholder="Seu Email" />
          <Input type="password" placeholder="Sua senha" />
          <Button>Criar Conta</Button>
          <Link className="underline" href="./login">Já possuo uma conta</Link>
        </LoginCard>
      </form>
    </div>
  )
}
