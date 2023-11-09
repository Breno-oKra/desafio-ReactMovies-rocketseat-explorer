
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { Container,Form,Background } from "./style";
import { FiMail,FiLock } from "react-icons/fi";
import { useAuth } from "../../hooks";
import { useState } from "react";

export function SingIn(){
    const[email,setEmail] = useState('')
    const[password,setPassword]  = useState('')
    const {singIn} = useAuth()
    function logIn(){
        singIn({email,password})
        
    }
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
                <Input placeholder="Senha" type="password" icon={FiLock}  onChange={e => setPassword(e.target.value)}/>

                <Button title="Entrar" onClick={logIn}/>
                <Link to="/register">Criar Conta </Link>
            </Form>
            <Background/>
        </Container>
    )
}