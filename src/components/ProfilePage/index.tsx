import React from 'react'
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles'
import Feed from '../Feed'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Pedin God</h1>
        <h2>@Pedruhf</h2>

        <p>
          Tentando ser alguem na vida <a href='https://ufrn.br'>UFRN</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Parelhas/RN
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21/11/1998
          </li>
        </ul>

        <Followage>
          <span>Seguindo <strong>451</strong></span>
          <span><strong>891</strong> seguidores</span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  )
}

export default ProfilePage;