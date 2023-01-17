import { ProfileContainer, ProfilePicture, ProfileData, TitleContainer, Title } from "./styles"
import { LinkGithub } from "../../../../components/LinkGithub"

import IconArrowUp from '../../../../assets/icons/arrow-up.svg'
import IconGithub from '../../../../assets/icons/github.svg'
import Building from '../../../../assets/icons/building.svg'
import UserGroup from '../../../../assets/icons/user-group.svg'
import { IconContainer } from "../../../../components/IconContainer"
import { useContext } from "react"
import { UserContext } from "../../../../context/UserContext"

export function Profile () {
    const { userData } = useContext(UserContext)

    return (
        <ProfileContainer>
            <ProfilePicture src='https://avatars.githubusercontent.com/u/87679298?v=4' />
            <ProfileData>
                <TitleContainer>
                    <Title>{userData.name}</Title>
                    <LinkGithub descriptionLink="GITHUB" pathIcon={IconArrowUp} pathGithub={userData.html_url} />
                </TitleContainer>
                <p>{userData.bio}</p>
                <div style={{'marginTop': '1.5rem', 'display': 'flex'}}>
                    <IconContainer>
                        <img src={IconGithub}/>
                        <p>{userData.login}</p>
                    </IconContainer>
                    <IconContainer>
                        <img src={Building}/>
                        <p>{userData.company}</p>
                    </IconContainer>
                    <IconContainer>
                        <img src={UserGroup}/>
                        <p>{userData.followers} seguidores</p>
                    </IconContainer>
                </div>
            </ProfileData>
        </ProfileContainer>
    )
}