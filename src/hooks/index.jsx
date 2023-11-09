import {createContext,useContext, useState} from 'react'
import { api } from '../services/api'
import { useEffect } from 'react';
const AuthContext = createContext({});

export function AuthProvider({children}){
    const [data,setData] = useState({})
    
    async function singIn({email,password}){
      
        try {
            const response = await api.post("/session", { email, password });
            const { user, token } = response.data;
            setData({ user, token });
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token);
      
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          } catch (error) {
            if (error.response) {
              alert(error.response.data.message);
            } else {
              alert("Não foi possivel entrar");
            }
          }
    }
    function singOut() {
      localStorage.removeItem("@rocketnotes:token");
      localStorage.removeItem("@rocketnotes:user");
      setData({});
    }
    async function updateProfile({ user,avatarFile }) {
    
      try {
          if(avatarFile){
              const fileUploadForm = new FormData()
              fileUploadForm.append("avatar",avatarFile)
              const response = await api.patch("/users/avatar",fileUploadForm)
              user.avatar = response.data.avatar
          }
       
          await api.put("/users", user)
          
          localStorage.setItem("@rocketnotes:user",JSON.stringify(user));
          setData({user,token:data.token})
          alert("perfil atualizado")
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel atualizar o perfil");
        }
      }
    }
    useEffect(() => {
      const token = localStorage.getItem("@rocketnotes:token");
      const user = localStorage.getItem("@rocketnotes:user");
      if (token && user) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setData({
          token,
          user: JSON.parse(user),
        });
      }
    }, []);
    return (
      <AuthContext.Provider value={{ singIn,user:data.user,updateProfile,singOut}}>
        {children}
      </AuthContext.Provider>
    );
}
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}