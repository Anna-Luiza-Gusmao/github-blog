import styled from "styled-components"

export const SearchFormContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeaderSearchForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    margin-bottom: 0.75rem;

    h1 {
        color: ${props => props.theme["gray-100"]};
        font-weight: 700;
        font-size: 1.125rem;
    }

    p {
        color: ${props => props.theme["blue-200"]};
        font-size: 0.875rem;
    }
`

export const SearchFormInput = styled.form`
    display: flex;
    gap: 1rem;

    input { 
        flex: 1;
        border-radius: 6px;
        border: 1px solid ${props => props.theme["blue-500"]};
        background: ${props => props.theme["black-700"]};
        color: ${props => props.theme["gray-200"]};
        padding: 0.75rem 1rem;

        &::placeholder {
            color: ${props => props.theme["blue-400"]};
        }
    }
`