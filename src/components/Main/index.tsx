import * as S from './styles';
import { ReactElement } from 'react';

type Props = {
  title?: string;
  description?: string;
};

const Main = ({
  title = 'Your app is up and running!',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}: Props): ReactElement => (
  <S.Wrapper>
    <S.Logo src="/img/icon-512.png" alt="An atom symbol in a pink background" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/dev-illustration.svg"
      alt="A developer in front of a screen writing code"
    />
  </S.Wrapper>
);

export default Main;
