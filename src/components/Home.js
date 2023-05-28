import React from 'react';
import styled from 'styled-components';
import Logo from '../images/konexxlogo_highvis_272x92dp.svg';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #162022;
  opacity: 0.95;
  height: 800px;

`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 290px;
  height: calc(100% - 560px);
  img {
    width: 272px;
    height: 92px;
    margin-top: auto;
  }
`;

const WordSection = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #5d7c80;
  text-align: center;
  max-width: 584px;
`;

const Form = styled.form``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 14px;
  background: #fff;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  height: 44px;
  margin: 0 auto;
  max-width: 584px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  padding-top: 18px;
  top: 53px;
  z-index: 0;
  button {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: Roboto, arial, sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }
`;

const SearchIcon = styled.span`
  color: #9aa0a6;
  height: 30px;
  width: 30px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  & svg {
    fill: #9aa0a6;
  }
`;

const SearchInput = styled.input`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 40px;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.87);
  word-wrap: break-word;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  height: 34px;
  font-size: 16px;
`;

const MicIcon = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  border: 0;
  background: transparent;
  outline: none;
  padding: 0 8px;
  width: 40px;
  line-height: 44px;
  height: 44px;
  svg {
    height: 24px;
    width: 24px;
    vertical-align: middle;
  }
`;

const Home = () => {
  return (
    <Container>
      <LogoSection>
      <img src={Logo} alt='logo' />
      </LogoSection>
      <WordSection>
        <h1>Making great
things happen.</h1>
      <p>With a portfolio that delves into hospitality, retail, commercial offices, base buildings and healthcare services, we pride ourselves on our attention to detail and the quality of our work. And we think our results speak for themselves.</p>
      </WordSection>
    </Container>
  );
};

export default Home;