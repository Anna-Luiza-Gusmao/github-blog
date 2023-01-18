import { useNavigate } from 'react-router-dom'
import { AllPublications, PublicationsContainer, HeaderPublications, PublicationDescription } from './styles'
import { useContext } from 'react'
import { IssuesContext } from '../../../../context/IssuesContext'

export function Publications() {
    const navigate = useNavigate()
    const { issuesData, formatDataIssues } = useContext(IssuesContext)

    const limitedIssuesBody = (body: string) => {
        let stringDescriptionIssues = body.split('')
        if (stringDescriptionIssues.length > 260) {
            const newStringDescriptionIssues = stringDescriptionIssues.slice(0, 261);
            stringDescriptionIssues = newStringDescriptionIssues.concat('...');
        }

        return stringDescriptionIssues
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
                        <PublicationDescription>{limitedIssuesBody(item.body)}</PublicationDescription>
                    </PublicationsContainer>
                ))
            }
        </AllPublications>
    )
}