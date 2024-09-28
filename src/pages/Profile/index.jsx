import { useState } from "react";
import { useAuth} from '../../hooks/auth'
import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Container, Header, Form, Avatar } from "./style";

import { Input } from '../../Components/Input'
import { Button } from "../../Components/Button";

import { Link } from "react-router-dom";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";


export function Profile(){
    const { user, UpdateProfile } = useAuth()


    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState("")
    const [passwordNew, setPasswordNew] = useState("")
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [ avatar, setAvatar] = useState(user.avatar)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate() {

        const user = {
            name,
            email,
            password: passwordNew,
            oldPassword: passwordOld
        }
    
        await UpdateProfile({ user, avatarFile });
            
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)
        
        const imagePreview = URL.createObjectURL(file)
        
        setAvatar(imagePreview)
    }


    return(
        <Container>
            <Header>
                <Link to="/">
                  <FiArrowLeft/>
                </Link>
            </Header>



            <Form>

                <Avatar >
                    <img src={avatarUrl} alt={"foto do usúario"} />

                    <label htmlFor="avatar">

                        <FiCamera/>

                    <input id="avatar" type="file" onChange={handleChangeAvatar} />

                    </label>
                    
                </Avatar>

                <Input
                icon={FiUser}
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
                />

                <Input
                icon={FiMail}
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}

                />

                <Input
                icon={FiLock}
                placeholder="Senha atual"
                onChange={e => setPasswordOld(e.target.value)}

                />

                <Input
                icon={FiLock}
                placeholder="Senha nova"
                onChange={e => setPasswordNew(e.target.value)}

                />

                <Button onClick={handleUpdate} title="Salvar" />

            </Form>

        </Container>

    )
}