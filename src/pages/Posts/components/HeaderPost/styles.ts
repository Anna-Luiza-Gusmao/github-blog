import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;

    position: relative;
    padding: 2rem;
    margin-top: -6rem;

    border-radius: 10px;
    background: ${props => props.theme["blue-700"]};
`

export const LinkHeader = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.25rem;
`

export const LinkBackContainer = styled.div`
    display: flex;
    align-items: center;

    p { 
        font-size: 0.75rem;
        font-weight: 700;
        color: ${props => props.theme["blue"]};
    }

    img {
        width: 18px;
        height: 18px;
        cursor: pointer;
        margin-right: 0.75rem;
    }
`

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme["white"]};
`