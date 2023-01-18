import { Routes, Route } from 'react-router-dom'
import { Blog } from './pages/Blog/Blog'
import { Posts } from './pages/Posts/Posts'

export function Routers () {
    return (
        <Routes>
            <Route path='/' element={<Blog />}/>
            <Route path='/post/:id' element={<Posts />}/>
        </Routes>
    )
}