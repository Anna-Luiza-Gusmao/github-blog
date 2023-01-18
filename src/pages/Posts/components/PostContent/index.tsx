import { PostContainer } from "./styles"
import ReactMarkdown from 'react-markdown'

interface PostContentProps {
    content: string
}

export function PostContent ({content}: PostContentProps) {
    return (
        <PostContainer>
            <ReactMarkdown>{content}</ReactMarkdown>
        </PostContainer>
    )
}