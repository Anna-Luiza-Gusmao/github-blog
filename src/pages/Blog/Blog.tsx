import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { BlogContainer } from './styles'

export function Blog () {
    return (
        <>
            <Header />
            <BlogContainer>
                <Profile />
            </BlogContainer>
        </>
    )
}