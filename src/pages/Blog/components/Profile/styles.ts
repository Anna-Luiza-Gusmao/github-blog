import styled from "styled-components"

export const ProfileContainer = styled.section`
    display: flex;

    position: relative;
    padding: 2rem;
    margin-top: -6rem;
    margin-bottom: 4.5rem;
    
    border-radius: 10px;
    background: ${props => props.theme["blue-700"]};
`

export const ProfilePicture = styled.img`
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
`

export const ProfileData = styled.section`
    display: flex;
    flex-direction: column;

    padding-left: 2rem;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 0.5rem;
`

export const Title = styled.h1`
    color: ${props => props.theme["gray-100"]};
    font-weight: 700;
    font-size: 1.5rem;
`

export const DataContainer = styled.div`
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