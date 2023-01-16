import { LinkGithubContainer } from './styles'

interface DataLink {
    descriptionLink: string,
    pathIcon: string
}

export function LinkGithub ({descriptionLink, pathIcon}: DataLink) {
    return (
        <LinkGithubContainer>
            <p>{descriptionLink}</p> 
            <img src={pathIcon}/>
        </LinkGithubContainer>
    )
}