import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { BlogContainer } from './styles'

export function Blog () {
    return (
        <>
            <Header />
            <BlogContainer>
                <Profile />
                <SearchForm />
            </BlogContainer>
        </>
    )
}