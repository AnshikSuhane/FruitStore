import axios from "axios";
import { createContext, useContext, useState } from "react";
const AuthContext=createContext()
export function AuthProvider({children}){
    const [isAuthenticated,setIsAuthenticated]=useState(false)
    const [user,setuser]=useState(null)
    const [error,setError]=useState("")
    const login=async(email,password)=>{
        try {
            const url="https://fruitsstore-84f76-default-rtdb.firebaseio.com/LoginPage.json"
            const res=await axios.get(url)
            const users=res.data
            const foundUser=Object.values(users).find((user)=>user.email===email && user.password===password)
            if(foundUser){
                setIsAuthenticated(true)
                setuser({email})
                setError("")
            }
            else{
                setError("invalaid email or password")
            }
        } catch (error) {
            setError("error conecting to server")
            console.error("Error Loggind in:",error)
        }
    }
    const logout=()=>{
        setIsAuthenticated(false)
        setuser(null)
    }
    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout,user,error}}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth(){
    const context=useContext(AuthContext)
    if(context===undefined){
        throw new Error("useAuth must be used within an Authprovider")
    }
    return context
}