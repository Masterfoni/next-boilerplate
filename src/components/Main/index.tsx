import * as S from './styles';
import { ReactElement } from 'react';

const Main = (): ReactElement => (
  <S.Wrapper>
    <S.Logo src="/img/icon-512.png" alt="An atom symbol in a pink background" />
    <S.Title>{'Your app is up and running!'}</S.Title>
    <S.Description>
      {'TypeScript, ReactJS, NextJS and Styled Components'}
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer in front of a screen writing code"
    />
  </S.Wrapper>
);

export default Main;
