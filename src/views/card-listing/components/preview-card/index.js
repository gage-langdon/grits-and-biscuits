import React from "react";
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
const Category = styled.h3`
  margin: 0;
  color: #5d5b6a;
  font-size: 12px;
`;

const CardPreview = ({ imageSrc, id, title, category }) => {
  return (
    <Link to={`/${id}`}>
      <Container>
        <Image src={imageSrc} />
      </Container>
      <Meta>
        <Title>{title}</Title>
        <Category>{category}</Category>
      </Meta>
    </Link>
  );
};

export default CardPreview;
