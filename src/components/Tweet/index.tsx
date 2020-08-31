import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  Dot,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
          Voce Retweetou
        </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Pedruhf</strong>
            <span>@Pedruhf</span>
            <Dot />
            <time>30 de ago</time>
          </Header>

          <Description>
            Eu sou ruim d++ nisso, bora trabaiaaaar
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon /> 25
            </Status>

            <Status>
              <RetweetIcon /> 5
            </Status>

            <Status>
              <LikeIcon /> 84
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;