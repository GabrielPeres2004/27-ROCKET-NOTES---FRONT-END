import { Container, Form, Background } from "./style";

import { Input } from '../../Components/Input'
import { Button } from "../../Components/Button"
import { FiMail, FiLock  } from "react-icons/fi";

import { Link } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../hooks/auth";

export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { SignIn } = useAuth()

    function handleClick(){
        SignIn({email, password})
    }

    return(
        <Container>
            <Form>

            <h1> Rocket Notes </h1>
            <p>Aplicação para salvar e gerenciar seus links úteis.</p>

            <h2>Faça seu login</h2>

            <Input
            type="text"
            icon={FiMail}
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
            ></Input>

            <Input
            type="password"
            icon={FiLock}
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}

            ></Input>
            

            <Button title="Entrar" onClick={handleClick}/>



            <Link to="/register">Criar conta</Link>
            </Form>

            <Background>
            </Background>




            

            
            

        </Container>
    )
}