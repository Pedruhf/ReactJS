import styled, { css } from 'styled-components'
import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp
} from '../../styles/Icons'

import { ReactComponent as LogoIcon} from '../../styles/logo.svg'

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(LogoIcon)`
  width: 41px;
  height: 41px;

  fill: white;

  > path { 
    fill: var(--twitter);
  }

  margin-bottom:20px;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }
    
    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
      display: inline;
    }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover, &.active {
    span, svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const IconCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  color: white;
`;

export const HomeIcon = styled(Home)`
  ${IconCSS}`
;
export const BellIcon = styled(Notifications)`
  ${IconCSS}`
;
export const EmailIcon = styled(Email)`
  ${IconCSS}`
;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${IconCSS}`
;
export const ProfileIcon = styled(Person)`
  ${IconCSS}`
;

export const BotSide = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  border-radius: 50%;

  flex-shrink: 0;
  background: var(--gray);

`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;
    > span {
      font-weight: normal;
      color: var(--gray);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: white;
    margin-left: 30px;
    cursor: pointer;

    &:hover {
      > path {
        color: red;
      }
    }
  }
`;
