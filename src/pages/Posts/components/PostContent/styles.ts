import styled from "styled-components"

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem;
    margin-bottom: 4.5rem;

    background: ${props => props.theme["blue-800"]};
    color: ${props => props.theme["gray-200"]};
    font-size: 1rem;

    h2 {
        margin: 1rem 0;
    }

    ol {
        padding-left: 2rem;
    }

    pre{
        background: ${props => props.theme["blue-600"]};
        padding: 1rem;
        margin: 1.5rem 0;

        code {
            font-family: 'Fira Code', monospace;
            color: ${props => props.theme["white-200"]};
        }
    }

    hr {
        margin: 1rem 0;
        background: ${props => props.theme["blue-600"]};
    }
`