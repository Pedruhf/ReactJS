import React from 'react';

import { Container } from './styles'

interface Props {
  topic: string;
}

const News: React.FC<Props> = ({topic}) => {
  return (
    <Container>
      <span>Assunto do momento no Brasil</span>
      <strong>{topic}</strong>
    </Container>
  )
}

export default News;