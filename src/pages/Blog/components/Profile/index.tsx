import { ProfileContainer, ProfilePicture, ProfileData, TitleContainer, Title, DataContainer } from "./styles"
import { LinkGithub } from "../../../../components/LinkGithub"

import IconArrowUp from '../../../../assets/icons/arrow-up.svg'
import IconGithub from '../../../../assets/icons/github.svg'
import Building from '../../../../assets/icons/building.svg'
import UserGroup from '../../../../assets/icons/user-group.svg'

export function Profile () {
    return (
        <ProfileContainer>
            <ProfilePicture src='https://avatars.githubusercontent.com/u/87679298?v=4' />
            <ProfileData>
                <TitleContainer>
                    <Title>Anna Luiza Gusmão</Title>
                    <LinkGithub descriptionLink="GITHUB" pathIcon={IconArrowUp} />
                </TitleContainer>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <div style={{'marginTop': '1.5rem', 'display': 'flex'}}>
                    <DataContainer>
                        <img src={IconGithub}/>
                        <p>Anna-Luiza-Gusmao</p>
                    </DataContainer>
                    <DataContainer>
                        <img src={Building}/>
                        <p>Estúdio Haus</p>
                    </DataContainer>
                    <DataContainer>
                        <img src={UserGroup}/>
                        <p>3 seguidores</p>
                    </DataContainer>
                </div>
            </ProfileData>
        </ProfileContainer>
    )
}