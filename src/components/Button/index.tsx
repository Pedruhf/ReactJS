import styled from 'styled-components'

interface Props {
  outlined ?: boolean;
}

export default styled.button<Props>`
  background: ${Props => Props.outlined ? 'transparent' : 'var(--twitter)'};
  color: ${Props => Props.outlined ? 'var(--twitter)' : 'white'};
  border: ${Props => Props.outlined ? '1px solid var(--twitter)' : 'none'};
  
  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${Props => Props.outlined ? 'var(--twitter-dark-hover)' : 'var(--twitter-light-hover)'};

  }
`;
