import styled from "styled-components"

export const LinkGithubContainer = styled.div`
    display: flex;
    align-items: center;

    p { 
        font-size: 0.75rem;
        font-weight: 700;
        color: ${props => props.theme["blue"]};
        padding-right: 0.75rem;
    }

    img {
        width: 18px;
        height: 18px;
        cursor: pointer;
    }
`