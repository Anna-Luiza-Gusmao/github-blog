import { useNavigate } from 'react-router-dom'
import { AllPublications, PublicationsContainer, HeaderPublications } from './styles'
import { useContext } from 'react'
import { IssuesContext } from '../../../../context/IssuesContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Publications() {
    const navigate = useNavigate()
    const { issuesData } = useContext(IssuesContext)

    const limitedIssuesBody = (body: string) => {
        let stringDescriptionIssues = body.split('')
        if (stringDescriptionIssues.length > 250) {
            const newStringDescriptionIssues = stringDescriptionIssues.slice(0, 251);
            stringDescriptionIssues = newStringDescriptionIssues.concat('...');
        }

        return stringDescriptionIssues
    }

    const formatDataIssues = (date: string) => {
        const plainDateString = formatDistanceToNow(new Date(date), {
            addSuffix: true,
            locale: ptBR
        })
        const dataStringWithFormatting = plainDateString.charAt(0).toUpperCase() + plainDateString.slice(1)
        
        return dataStringWithFormatting
    }

    return (
        <AllPublications>
            {
                issuesData.map((item) => (
                    <PublicationsContainer key={item.number} onClick={() => navigate('/post')}>
                        <HeaderPublications>
                            <p>{item.title}</p>
                            <span>{formatDataIssues(item.created_at)}</span>
                        </HeaderPublications>
                        <p>{limitedIssuesBody(item.body)}</p>
                    </PublicationsContainer>
                ))
            }
        </AllPublications>
    )
}