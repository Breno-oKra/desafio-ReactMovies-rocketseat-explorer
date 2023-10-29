
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { Container,Form,Background,LinkButton } from "./style";
import { FiUser,FiMail,FiLock, FiArrowLeft } from "react-icons/fi";

export function SingUp(){
    return(
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links uteis</p>

                <h2>Crie Sua Conta</h2>
                <Input placeholder="Name" type="text" icon={FiUser}/>
                <Input placeholder="E-mail" type="text" icon={FiMail}/>
                <Input placeholder="Senha" type="password" icon={FiLock}/>

                <Button title="Cadastrar"/>

                <LinkButton to="/"><FiArrowLeft/> Voltar Para o Login</LinkButton>
            </Form>
            
        </Container>
    )
}