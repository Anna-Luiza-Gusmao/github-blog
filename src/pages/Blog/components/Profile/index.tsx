import { ProfileContainer, ProfilePicture, ProfileData, TitleContainer, Title } from "./styles"
import { LinkGithub } from "../../../../components/LinkGithub"

import IconArrowUp from '../../../../assets/icons/arrow-up.svg'
import IconGithub from '../../../../assets/icons/github.svg'
import Building from '../../../../assets/icons/building.svg'
import UserGroup from '../../../../assets/icons/user-group.svg'
import { IconContainer } from "../../../../components/IconContainer"

export function Profile () {
    const pathGithub = "https://github.com/Anna-Luiza-Gusmao"

    return (
        <ProfileContainer>
            <ProfilePicture src='https://avatars.githubusercontent.com/u/87679298?v=4' />
            <ProfileData>
                <TitleContainer>
                    <Title>Anna Luiza Gusmão</Title>
                    <LinkGithub descriptionLink="GITHUB" pathIcon={IconArrowUp} pathGithub={pathGithub} />
                </TitleContainer>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <div style={{'marginTop': '1.5rem', 'display': 'flex'}}>
                    <IconContainer>
                        <img src={IconGithub}/>
                        <p>Anna-Luiza-Gusmao</p>
                    </IconContainer>
                    <IconContainer>
                        <img src={Building}/>
                        <p>Estúdio Haus</p>
                    </IconContainer>
                    <IconContainer>
                        <img src={UserGroup}/>
                        <p>3 seguidores</p>
                    </IconContainer>
                </div>
            </ProfileData>
        </ProfileContainer>
    )
}