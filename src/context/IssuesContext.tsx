import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../lib/axios"
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface DataIssues {
    url: string,
    title: string,
    body: string,
    comments: number,
    created_at: string,
    number: number
}

interface IssuesContextType {
    issuesData: DataIssues[],
    formatDataIssues: (date: string) => string,
    searchIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
    children: ReactNode;
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider ({children}: IssuesProviderProps) {
    const [issuesData, setIssuesData] = useState<DataIssues[]>([])

    const formatDataIssues = (date: string) => {
        const plainDateString = formatDistanceToNow(new Date(date), {
            addSuffix: true,
            locale: ptBR
        })
        const dateStringWithFormatting = plainDateString.charAt(0).toUpperCase() + plainDateString.slice(1)

        return dateStringWithFormatting
    }

    async function fecthIssues() {
        const response = await api.get('repos/Anna-Luiza-Gusmao/github-blog/issues')
        setIssuesData(response.data)
    }

    async function searchIssues(query?: string) {
        const response = await api.get(`search/issues?q=${query}%20repo:Anna-Luiza-Gusmao/github-blog`)
        setIssuesData(response.data.items)
    }

    useEffect(() => {
        fecthIssues()
    }, [])

    console.log(issuesData)
    
    return (
        <IssuesContext.Provider value={{ issuesData, formatDataIssues, searchIssues }}>
            {children}
        </IssuesContext.Provider>
    )
}