import { Container, Form, Background } from "./style";

import { Input } from '../../Components/Input'
import { Button } from "../../Components/Button"
import { FiMail, FiLock, FiUser  } from "react-icons/fi";

import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";


export function SignUp(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        await api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar!");
            }
        })
    }


    return(
        <Container> 

            <Background/>
            
            <Form>
            <h1> Rocket Notes </h1>
            <p>Aplicação para salvar e gerenciar seus links úteis.</p>

            <h2>Crie sua conta</h2>

            <Input
            type="text"
            icon={FiUser}
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
            ></Input>

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

            <Button title="Cadastrar" onClick={handleSignUp}/>



            <Link to="/" >Voltar para o login</Link>
            </Form>

        </Container>
    )
}