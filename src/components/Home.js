import React from 'react';
import styled from 'styled-components';
import Logo from '../images/konexxlogo_highvis_272x92dp.svg';
import BaseImage from '../images/base_image.png';

const BottomImage = styled.div`
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: flex-end; 
  z-index: 2;
  position: absolute;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
    }
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #162022;
  opacity: 0.95;
  height: 800px;
`;

const Panel = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  width: 75%;
  height: 60%;
  z-index: 1;
  margin: 0;
  top: 50%;
  transform: translateY(-50%);
  background: #5d7c80;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    height: 70%;
    }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  
  width: 75%;
  height: 60%;
  z-index: 96;
  margin: 0;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 1279px) {
    flex-direction: column;
    }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 97;
  margin-right: 5%;
  margin-left: 5%;
  img {
    width: 272px;
    height: 92px;
    margin-top: auto;
  }

  @media screen and (max-width: 768px) {
    img {
    width: 172px;
    margin-top: 50px;
    margin-right: 0%;
  }
    }
`;

const WordSection = styled.div`
  padding: 20px;
  padding-top: 0px;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  color: #162022;
  text-align: left;
  max-width: 584px;
  z-index: 98;
  margin-left: 40px;

  @media screen and (max-width: 1279px) {
    align-items: center;
        text-align: center;
        margin-left: 0px;
    }

  @media screen and (max-width: 768px) {
        font-size: 14px;
        margin-left: 0px;
        align-items: center;
        text-align: center;
    }
`;

const Button = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 20px;
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  color: #162022;
  text-align: center;
  z-index: 99;
  background-color: #c4ff00;
  border-radius: 10px;

  @media screen and (max-width: 1279px) {
    max-width: 200px;
    }

  @media screen and (max-width: 768px) {
    max-width: 200px;
    }
`;


const Home = () => {
  return (
    <Container>
      <Panel></Panel>
        <Content>
          <LogoSection>
          <img src={Logo} alt='logo' />
          </LogoSection>
          <WordSection>
            <h1>Making great things happen each and every day.</h1>
            <p>Based in Melbourne, we are commercial builders licensed across Australia who take pride in working with you to create great things. With a portfolio that delves into hospitality, retail, commercial offices, base buildings and healthcare services.</p>
          <Button>
            <a href="mailto:admin@konexx.com.au">Contact us today</a>
          </Button>
          </WordSection>
        </Content>
      <BottomImage>
            <img src={BaseImage} alt="Bottom Image" />
      </BottomImage>
    </Container>
  );
};

export default Home;