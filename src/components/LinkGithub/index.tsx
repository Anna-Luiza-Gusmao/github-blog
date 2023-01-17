import { useNavigate } from 'react-router-dom'
import { LinkGithubContainer } from './styles'

interface DataLink {
    descriptionLink: string,
    pathIcon: string,
    pathGithub: string
}

export function LinkGithub ({descriptionLink, pathIcon, pathGithub}: DataLink) {
    const navigate = () => {
        window.location.href = pathGithub
    }

    return (
        <LinkGithubContainer>
            <p>{descriptionLink}</p> 
            <img src={pathIcon} onClick={navigate}/>
        </LinkGithubContainer>
    )
}