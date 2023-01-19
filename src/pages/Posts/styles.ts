import styled from 'styled-components'

export const PostContainer = styled.main`
    background: ${props => props.theme["blue-800"]};
    padding: 0 18rem;

    @media (max-width: 1366px) {
        padding: 0 12rem;
    }
`