import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [ data, setData] = useState({})

    async function SignIn({email, password}){
        try {
            const response =  await api.post('/sessions', {email, password})
            const { user, token } = response.data

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            localStorage.setItem('@rocketnotes:user', JSON.stringify(user))
            localStorage.setItem('@rocketnotes:token', token)

            setData({user, token})

        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel acessar")
            }
        }
    }


    function SignOut(){
        localStorage.removeItem('@rocketnotes:user')
        localStorage.removeItem('@rocketnotes:token')

        setData({})

    }

    async function UpdateProfile({user, avatarFile}){

        try {

            if( avatarFile){
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUploadForm)
                
                user.avatar = response.data.avatar
            }

            await api.put("/users", user);

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

            setData({ user, token: data.token });

            alert("Suas informações foram atualizadas com sucesso")

        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel acessar")
            }
        }
    }
            
    useEffect(() => {
        const user = localStorage.getItem('@rocketnotes:user')
        const token = localStorage.getItem('@rocketnotes:token')

        if( user && token){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })

        }
    }, [])


    return(
        <AuthContext.Provider value={{
            SignIn,
            SignOut,
            UpdateProfile,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>

    )
}


function useAuth(){
    const context = useContext(AuthContext)

    return context

}

export { AuthProvider, useAuth}