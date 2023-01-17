import styled from "styled-components"

export const AllPublications = styled.section`
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    column-gap: 2rem;

    margin: 3rem 0;
`

export const PublicationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;

    padding: 2rem;
    background: ${props => props.theme["blue-600"]};
    border-radius: 10px;

    p {
        color: ${props => props.theme["gray-200"]};
    }
`

export const HeaderPublications = styled.header`
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.25rem;

    p {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${props => props.theme["white"]};
        padding-right: 3rem;
    }

    span {
        font-size: 0.875rem;
        color: ${props => props.theme["blue-200"]};
    }
`