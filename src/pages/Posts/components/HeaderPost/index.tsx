import { LinkGithub } from '../../../../components/LinkGithub'
import { HeaderContainer, LinkHeader, LinkBackContainer, Title } from './styles'

import ArrowLeft from '../../../../assets/icons/chevrolet-left.svg'
import ArrowUp from '../../../../assets/icons/arrow-up.svg'
import { IconContainer } from '../../../../components/IconContainer'

import IconGithub from '../../../../assets/icons/github.svg'
import Calendar from '../../../../assets/icons/calendar.svg'
import Comment from '../../../../assets/icons/comment.svg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../../../context/UserContext'
import { IssuesContext } from '../../../../context/IssuesContext'
import { DataIssue } from '../../Posts'

interface HeaderPostProps {
    issues: DataIssue
}

export function HeaderPost({ issues }: HeaderPostProps) {
    const navigate = useNavigate()
    const { userData } = useContext(UserContext)
    const { formatDataIssues } = useContext(IssuesContext)

    return (
        <HeaderContainer>
            <LinkHeader>
                <LinkBackContainer>
                    <img src={ArrowLeft} onClick={() => navigate('/')}/>
                    <p>VOLTAR</p>
                </LinkBackContainer>
                <LinkGithub descriptionLink="VER NO GITHUB" pathIcon={ArrowUp} pathGithub={issues.html_url} />
            </LinkHeader>
            <Title>{issues.title}</Title>
            <div style={{ 'marginTop': '1.5rem', 'display': 'flex' }}>
                <IconContainer>
                    <img src={IconGithub} />
                    <p style={{'color': '#7B96B2'}}>{userData.login}</p>
                </IconContainer>
                <IconContainer>
                    <img src={Calendar} />
                    <p style={{'color': '#7B96B2'}}>{issues.updated_at}</p>
                </IconContainer>
                <IconContainer>
                    <img src={Comment} />
                    <p style={{'color': '#7B96B2'}}>{issues.comments} comentários</p>
                </IconContainer>
            </div>
        </HeaderContainer>
    )
}