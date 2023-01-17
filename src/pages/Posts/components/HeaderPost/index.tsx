import { LinkGithub } from '../../../../components/LinkGithub'
import { HeaderContainer, LinkHeader, LinkBackContainer, Title } from './styles'

import ArrowLeft from '../../../../assets/icons/chevrolet-left.svg'
import ArrowUp from '../../../../assets/icons/arrow-up.svg'
import { IconContainer } from '../../../../components/IconContainer'

import IconGithub from '../../../../assets/icons/github.svg'
import Calendar from '../../../../assets/icons/calendar.svg'
import Comment from '../../../../assets/icons/comment.svg'
import { useNavigate } from 'react-router-dom'

export function HeaderPost() {
    const navigate = useNavigate()

    return (
        <HeaderContainer>
            <LinkHeader>
                <LinkBackContainer>
                    <img src={ArrowLeft} onClick={() => navigate('/')}/>
                    <p>VOLTAR</p>
                </LinkBackContainer>
                <LinkGithub descriptionLink="VER NO GITHUB" pathIcon={ArrowUp} pathGithub='/' />
            </LinkHeader>
            <Title>JavaScript data types and data structures</Title>
            <div style={{ 'marginTop': '1.5rem', 'display': 'flex' }}>
                <IconContainer>
                    <img src={IconGithub} />
                    <p style={{'color': '#7B96B2'}}>Anna-Luiza-Gusmao</p>
                </IconContainer>
                <IconContainer>
                    <img src={Calendar} />
                    <p style={{'color': '#7B96B2'}}>Há 1 dia</p>
                </IconContainer>
                <IconContainer>
                    <img src={Comment} />
                    <p style={{'color': '#7B96B2'}}>5 comentários</p>
                </IconContainer>
            </div>
        </HeaderContainer>
    )
}