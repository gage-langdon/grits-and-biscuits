import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  padding-top: 60px;
  width: 100%;
  padding-bottom: 16px;
  background-color: #bbded6;
  display: flex;
  display-direction: row;
`;

const Credits = styled.div`
  margin-left: auto;
  padding-right: 16px;
  color: #5d5b6a;
  font-family: "Amatic SC", cursive;
`;

const Footer = () => {
  return (
    <Container>
      <Credits>Kaylin McCoskey 2020</Credits>
    </Container>
  );
};
export default Footer;
