import { useNavigate } from 'react-router-dom'
import { AllPublications, PublicationsContainer, HeaderPublications } from './styles'

export function Publications () {
    const navigate = useNavigate()

    return (
        <AllPublications>
            <PublicationsContainer onClick={() => navigate('/post')}>
                <HeaderPublications>
                    <p>JavaScript data types and data structures</p>
                    <span>Há 1 dia</span>
                </HeaderPublications>
                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
            </PublicationsContainer>
            <PublicationsContainer onClick={() => navigate('/post')}>
                <HeaderPublications>
                    <p>JavaScript data types and data structures</p>
                    <span>Há 1 dia</span>
                </HeaderPublications>
                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
            </PublicationsContainer>
            <PublicationsContainer onClick={() => navigate('/post')}>
                <HeaderPublications>
                    <p>JavaScript data types and data structures</p>
                    <span>Há 1 dia</span>
                </HeaderPublications>
                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
            </PublicationsContainer>
        </AllPublications>
    )
}