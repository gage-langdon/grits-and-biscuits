import React from "react";
import styled from "styled-components";

// Components
import Cards from "../../cards";
import PreviewCard from "./components/preview-card";

const Container = styled.div`
  padding-top: 24px;
  width: 100%;
  min-height: 85vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  background-color: #ecf2f9;
`;

const CardListing = () => {
  const cards = Cards.list();

  const previews = cards.map((card) => (
    <PreviewCard
      key={card.id}
      id={card.id}
      imageSrc={card.front}
      title={card.title}
      category={card.category}
    />
  ));

  return <Container>{previews}</Container>;
};

export default CardListing;
