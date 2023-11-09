import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { Container,Form ,Avatar} from "./style";
import { FiArrowLeft,FiUser,FiMail,FiLock,FiCamera} from "react-icons/fi";
import tempImg from '../../assets/temp_avatar.svg'
import { useAuth } from "../../hooks";
import { useState } from "react";
import { api } from "../../services/api";
export function Profile(){
    const {user,updateProfile} = useAuth ()
    const [name,setName] = useState(user.name)
    const [email,setEmail] = useState(user.email)
    const [passwordOld,setPasswordOld] = useState ()
    const [passwordNew,setPasswordNew] = useState()
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : tempImg
    const [avatar,setAvatar] = useState(avatarURL)
    const [avatarFile,setAvatarFile] = useState(null)
    const navigate = useNavigate ()
    async function handleUpdate(){
        const updated = {
            name,
            email,
            password:passwordNew,
            old_password:passwordOld
        }
        // object.assign combina informações e sobrescreve informações repetidas
        // nesse caso, estamos usando para quando tiver um campo que não foi alterado, então retornamos
        // um objeto com os mesmo valores e os valores novos sobrepondo os antigos
        const userUpdated = Object.assign(user,updated)
        await updateProfile({user:userUpdated,avatarFile})
    }
    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)
        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }
    return(
        <Container>
            <header>
                <button onClick={() => navigate(-1)}><FiArrowLeft/> Voltar</button>
            </header>
            <Form>
                <Avatar>
                    <img src={avatar} alt="foto do doido" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="file" onChange={handleChangeAvatar} />
                    </label>
                </Avatar>
                <Input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} type="text" icon={FiUser}/>
                <Input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} type="email" icon={FiMail}/>
                <Input placeholder="Senha Atual" type="password" onChange={e => setPasswordOld(e.target.value)} icon={FiLock}/>
                <Input placeholder="Nova Atual" type="password" onChange={e => setPasswordNew(e.target.value)} icon={FiLock}/>
                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
            
        </Container>
    )
}