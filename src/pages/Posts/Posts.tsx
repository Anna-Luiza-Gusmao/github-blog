import { PostContainer } from './styles'
import { Header } from '../../components/Header'
import { HeaderPost } from './components/HeaderPost'

export function Posts () {
    return (
        <>
            <Header />
            <PostContainer>
                <HeaderPost />
            </PostContainer>
        </>
    )
}