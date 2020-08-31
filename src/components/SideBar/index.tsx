import React from 'react';

import StickyBox from 'react-sticky-box'

import List from '../List'
import FollowSugestion from '../FollowSugestion'
import News from '../News'

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>

        <Body>

          <List
            title='Talvez você curta'
            elements={[
              <FollowSugestion
                name='Pedin'
                nickname='@Pedruhf'
              />,

              <FollowSugestion
                name='XicoButico'
                nickname='@Xic0te'
              />,

              <FollowSugestion
                name='Dnarly Limah'
                nickname='@DnarlyLima'
              />,

            ]}
          />

          <List
            title='Talvez você curta'
            elements={[
              <News topic='caceta de parcelio' />,
              <News topic='francisco de cabeça pra baixo' />,
              <News topic='minha rolona' />,
            ]}
          />

          <List
            title='Talvez você curta'
            elements={[
              <News topic='caceta de parcelio' />,
              <News topic='francisco de cabeça pra baixo' />,
              <News topic='minha rolona' />,
            ]}
          />

          <List
            title='Talvez você curta'
            elements={[
              <News topic='caceta de parcelio' />,
              <News topic='francisco de cabeça pra baixo' />,
              <News topic='minha rolona' />,
            ]}
          />

          <List
            title='Talvez você curta'
            elements={[
              <News topic='caceta de parcelio' />,
              <News topic='francisco de cabeça pra baixo' />,
              <News topic='minha rolona' />,
            ]}
          />

        </Body>

      </StickyBox>

    </Container>
  )
}

export default SideBar;