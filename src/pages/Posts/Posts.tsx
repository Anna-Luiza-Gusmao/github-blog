import { PostContainer } from './styles'
import { Header } from '../../components/Header'
import { HeaderPost } from './components/HeaderPost'
import { useLocation } from 'react-router-dom'

export function Posts () {
    const location = useLocation()
    const pathname = location.pathname
    const pathId = parseInt(pathname.charAt(pathname.length - 1))
    
    return (
        <>
            <Header />
            <PostContainer>
                <HeaderPost pathId={pathId} />
            </PostContainer>
        </>
    )
}