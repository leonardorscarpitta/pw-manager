"use client";
import LoginCard from "@/components/loginCard/loginCard";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function CadastroPage() {

    const [ email, setEmail ] = useState<string>()
    const [ usuario, setUserName ] = useState<string>()
    const [ senhaMestra, setPassword ] = useState<string>()

  // =================================================
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://172.28.0.1:8080/api/usuarios', {
        email,
        usuario,
        senhaMestra,
      });
      console.log('Usuário registrado: ', response.data);
    } catch (error) {
      console.error('Erro ao registrar o usuário: ', error);
    }
  };
  // =================================================

  return (
    <div className="flex items-center justify-center h-lvh">
      <form onSubmit={handleSubmit} className="flex">
        <LoginCard title="Cadastro">
          <Input type="text" placeholder="Seu Nome" value={usuario} onChange={(event) => setUserName(event.target.value)} />
          <Input type="email" placeholder="Seu Email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <Input type="password" placeholder="Sua senha" value={senhaMestra} onChange={(event) => setPassword(event.target.value)} />
          <Button>Criar Conta</Button>
          <Link className="underline" href="./login">Já possuo uma conta</Link>
        </LoginCard>
      </form>
    </div>
  )
}
