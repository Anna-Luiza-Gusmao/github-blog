import styled from "styled-components"

export const IconContainerDiv = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1.5rem;

    p {
        color: ${props => props.theme["gray-100"]};
    }

    img {
        width: 24px;
        height: 24px;

        margin-right: 0.5rem;
    }
`