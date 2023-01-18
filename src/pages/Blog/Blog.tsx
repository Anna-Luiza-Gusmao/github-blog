import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { Publications } from './components/Publications'
import { SearchForm } from './components/SearchForm'
import { BlogContainer } from './styles'

export function Blog () {
    return (
        <>
            <Header />
            <BlogContainer>
                <Profile />
                <SearchForm />
                <Publications />
            </BlogContainer>
        </>
    )
}