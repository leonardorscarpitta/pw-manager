import LoginCard from "@/components/loginCard/loginCard";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-lvh bg-black">
      <form className="flex">
        <LoginCard title="Login">
          <Input type="email" placeholder="Seu Email" />
          <Input type="password" placeholder="Sua senha" />
          <Button>Entrar</Button>
          <Link className="underline" href="./cadastro">Ainda não tem uma conta?</Link>
        </LoginCard>
      </form>
    </div>
  )
}
