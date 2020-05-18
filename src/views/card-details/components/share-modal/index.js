import React, { useState } from "react";
import styled from "styled-components";
import ReactDom from "react-dom";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  background-color: white;
  height: 300px;
  border-radius: 7px;
  opacity: 98%;
  z-index: 100;

  @media only screen and (max-width: 425px) {
    width: 95%;
  }

  @media only screen and (min-width: 425px) {
    width: 40%;
  }

  @media only screen and (min-width: 1098px) {
    width: 30%;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  // align-items: center;
  padding-bottom: 32px;
`;

const CloseButton = styled.span`
  margin-left: auto;
  font-size: 32px;
`;

const ShareTitle = styled.h4`
  margin: 0px;
  font-size: 32px;
  color: #5d5b6a;
  font-weight: bold;
  font-family: "Amatic SC", cursive;
`;

const ShareInstructions = styled.div`
  color: grey;
  text-align: center;
  padding-bottom: 24px;
`;

const ShareLink = styled.a`
  border: none;
  background: none;
  color: blue;
`;

const ShareModal = ({ active, onClose }) => {
  if (!active) return null;

  const shareLink = window.location.href;
  return ReactDom.createPortal(
    <Background onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <InnerContainer>
          <Header>
            <ShareTitle>Share</ShareTitle>
            <CloseButton onClick={onClose}>&times;</CloseButton>
          </Header>
          <ShareInstructions>
            Copy and paste this link to share with someone you love
          </ShareInstructions>
          <ShareLink href={shareLink}>{shareLink}</ShareLink>
        </InnerContainer>
      </Container>
    </Background>,
    document.getElementById("root")
  );
};

export default ShareModal;
