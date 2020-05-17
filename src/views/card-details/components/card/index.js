import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 300px;
  min-width: 300px;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: inherit;
  width: inherit;
  border-radius: 7px;
`;

const CardNav = styled.div`
  margin-top: 32px;
`;

const CardNavDivider = styled.span`
  color: #5d5b6a;
`;

const CardNavBtn = styled.button`
  color: ${({ active }) => (active ? "#5d5b6a" : "#588da8")};
  border: none;
  background: none;
`;

const Card = ({ frontSrc, insideSrc }) => {
  const [isFlipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped(!isFlipped);

  const imageSrc = isFlipped ? insideSrc : frontSrc;
  return (
    <Container>
      <Image src={imageSrc} onClick={toggleFlip} />
      <CardNav>
        <CardNavBtn active={!isFlipped} onClick={toggleFlip}>
          Front
        </CardNavBtn>
        <CardNavDivider>|</CardNavDivider>
        <CardNavBtn active={isFlipped} onClick={toggleFlip}>
          Inside
        </CardNavBtn>
      </CardNav>
    </Container>
  );
};

export default Card;
