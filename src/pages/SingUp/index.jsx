
import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { Container,Form,Background,LinkButton } from "./style";
import { FiUser,FiMail,FiLock, FiArrowLeft } from "react-icons/fi";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
export function SingUp(){
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()
    function singUp(){
        if(!name || !email || !password){
            alert("Preencha todos os campos")
            return
        }
        api.post('/users',{name,email,password})
        .then(() => {
            alert("usuario cadastrado com sucesso")
            navigate("/")
        }).catch(error => {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("não possivel cadastrar")
            }
        })
    }
    return(
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links uteis</p>

                <h2>Crie Sua Conta</h2>
                <Input placeholder="Name" type="text" icon={FiUser} onChange={e => setName(e.target.value)}/>
                <Input placeholder="E-mail" type="text" icon={FiMail}  onChange={e => setEmail(e.target.value)}/>
                <Input placeholder="Senha" type="password" icon={FiLock}  onChange={e => setPassword(e.target.value)}/>

                <Button title="Cadastrar"  onClick={singUp}/>

                <LinkButton to="/"><FiArrowLeft/> Voltar Para o Login</LinkButton>
            </Form>
            
        </Container>
    )
}