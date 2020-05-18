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
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #ecf2f9;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: start;
  justify-content: center;
`;

const CardListing = () => {
  const cards = Cards.list();

  const CardRows = [];
  const createCardRow = (cardArr) => CardRows.push(<Row>{cardArr}</Row>);

  const remainder = cards.reduce((acc, card) => {
    // groups of 3
    if (acc.length === 3) {
      createCardRow(acc);
      acc = [];
    }

    // create card
    return [
      ...acc,
      <PreviewCard
        key={card.id}
        id={card.id}
        imageSrc={card.front}
        title={card.title}
        category={card.category}
      />,
    ];
  }, []);
  if (remainder) createCardRow(remainder);

  return <Container>{CardRows}</Container>;
};

export default CardListing;
