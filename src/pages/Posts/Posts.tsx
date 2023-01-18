import { PostContainer } from './styles'
import { Header } from '../../components/Header'
import { HeaderPost } from './components/HeaderPost'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Loader } from './components/Loader'
import { PostContent } from './components/PostContent'

export interface DataIssue {
    title: string,
    body: string,
    updated_at: string,
    comments: number,
    html_url: string
}

export function Posts() {
    const location = useLocation()
    const pathname = location.pathname
    const pathId = parseInt(pathname.charAt(pathname.length - 1))
    const [issues, setIssues] = useState({} as DataIssue)

    async function selectedIssues(id: number) {
        const response = await api.get(`repos/Anna-Luiza-Gusmao/github-blog/issues/${id}`)
        setIssues(response.data)
    }

    useEffect(() => {
        selectedIssues(pathId)
    }, [])

    return (
        <>
            {
                (Object.keys(issues).length === 0) ? <Loader /> : (
                    <>
                        <Header />
                        <PostContainer>
                            <HeaderPost issues={issues} />
                            <PostContent content={issues.body} />
                        </PostContainer>
                    </>
                )
            }

        </>
    )
}