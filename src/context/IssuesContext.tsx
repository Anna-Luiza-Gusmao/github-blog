import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../lib/axios"

interface DataIssues {
    url: string,
    title: string,
    body: string,
    comments: number,
    created_at: string
}

interface IssuesContextType {
    issuesData: DataIssues[]
}

interface IssuesProviderProps {
    children: ReactNode;
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider ({children}: IssuesProviderProps) {
    const [issuesData, setIssuesData] = useState<DataIssues[]>([])

    async function fecthIssues() {
        const response = await api.get('repos/Anna-Luiza-Gusmao/github-blog/issues')
        setIssuesData(response.data)
    }

    useEffect(() => {
        fecthIssues()
    }, [])

    console.log(issuesData)
    
    return (
        <IssuesContext.Provider value={{ issuesData }}>
            {children}
        </IssuesContext.Provider>
    )
}