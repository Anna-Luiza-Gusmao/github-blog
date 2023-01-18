import { LinkGithub } from '../../../../components/LinkGithub'
import { HeaderContainer, LinkHeader, LinkBackContainer, Title } from './styles'

import ArrowLeft from '../../../../assets/icons/chevrolet-left.svg'
import ArrowUp from '../../../../assets/icons/arrow-up.svg'
import { IconContainer } from '../../../../components/IconContainer'

import IconGithub from '../../../../assets/icons/github.svg'
import Calendar from '../../../../assets/icons/calendar.svg'
import Comment from '../../../../assets/icons/comment.svg'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../context/UserContext'
import { api } from '../../../../lib/axios'
import { IssuesContext } from '../../../../context/IssuesContext'

interface HeaderPostProps {
    pathId: number
}

interface DataIssue {
    title: string,
    body: string,
    updated_at: string,
    comments: number
}

export function HeaderPost({ pathId }: HeaderPostProps) {
    const navigate = useNavigate()
    const { userData } = useContext(UserContext)
    const [ issue, setIssue] = useState({} as DataIssue)
    const { formatDataIssues } = useContext(IssuesContext)

    async function selectedIssues(id: number) {
        const response = await api.get(`repos/Anna-Luiza-Gusmao/github-blog/issues/${id}`)
        setIssue(response.data)
    }
    
    useEffect(() => {
        selectedIssues(pathId)
    }, [])

    console.log(issue)

    return (
        <HeaderContainer>
            <LinkHeader>
                <LinkBackContainer>
                    <img src={ArrowLeft} onClick={() => navigate('/')}/>
                    <p>VOLTAR</p>
                </LinkBackContainer>
                <LinkGithub descriptionLink="VER NO GITHUB" pathIcon={ArrowUp} pathGithub='/' />
            </LinkHeader>
            <Title>{issue.title}</Title>
            <div style={{ 'marginTop': '1.5rem', 'display': 'flex' }}>
                <IconContainer>
                    <img src={IconGithub} />
                    <p style={{'color': '#7B96B2'}}>{userData.login}</p>
                </IconContainer>
                <IconContainer>
                    <img src={Calendar} />
                    <p style={{'color': '#7B96B2'}}></p>
                </IconContainer>
                <IconContainer>
                    <img src={Comment} />
                    <p style={{'color': '#7B96B2'}}>{issue.comments} comentários</p>
                </IconContainer>
            </div>
        </HeaderContainer>
    )
}