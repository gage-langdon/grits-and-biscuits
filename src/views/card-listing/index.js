import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import LLamaSeeThatAss from "../../cards/llama_see_that_ass";

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

  return (
    <>
      <Helmet>
        <title>Grits and Biscuits</title>
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content="Grits and Biscuits" />
        <meta
          property="og:description"
          content="Hand drawn, interactive, cards by Kaylin 💕"
        />
        <meta
          property="og:image"
          content={`https://${window.location.hostname}${LLamaSeeThatAss.front}`}
        />
      </Helmet>
      <Container>{CardRows}</Container>
    </>
  );
};

export default CardListing;
