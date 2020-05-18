import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 300px;
  height: 300px;
  padding: 16px;
  padding-bottom: 8px;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
`;

const Image = styled.img`
  height: inherit;
  width: inherit;
  border-radius: 7px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 19px;
  color: #5d5b6a;
  font-family: "Amatic SC", cursive;
`;

const CardPreview = ({ frontSrc, insideSrc, id, title }) => {
  const [isFlipped, setFlipped] = useState(false);

  const imageSrc = isFlipped ? insideSrc : frontSrc;

  const toggleFlip = () => insideSrc && setFlipped(!isFlipped);

  return (
    <Link to={`/${id}`} onMouseEnter={toggleFlip} on onMouseLeave={toggleFlip}>
      <Container>
        <Image src={imageSrc} />
      </Container>
      <Meta>
        <Title>{title}</Title>
      </Meta>
    </Link>
  );
};

export default CardPreview;
