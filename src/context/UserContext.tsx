import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../lib/axios"

interface DataUser {
    avatar_url: string,
    name: string,
    html_url: string,
    bio: string,
    login: string,
    company: string,
    followers: number
}

interface UserContextType {
    userData: DataUser
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider ({children}: UserProviderProps) {
    const [userData, setUserData] = useState({} as DataUser)

    async function fecthUser() {
        const response = await api.get('users/Anna-Luiza-Gusmao')
        setUserData(response.data)
    }

    useEffect(() => {
        fecthUser()
    }, [])

    console.log(userData)
    
    return (
        <UserContext.Provider value={{ userData }}>
            {children}
        </UserContext.Provider>
    )
}