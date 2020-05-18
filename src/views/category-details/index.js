/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import LLamaSeeThatAss from "../../cards/llama_see_that_ass";
import { useParams, Link } from "react-router-dom";
import { capitalize } from "../../utils";

// Components
import Cards from "../../cards";
import PreviewCard from "../../components/preview-card";

const Container = styled.div`
  padding-top: 24px;
  width: 100%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #ecf2f9;
  padding-bottom: 60px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: start;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  font-family: "Abril Fatface", cursive;
  color: #5d5b6a;
`;

const CategoryDetails = () => {
  const { category } = useParams();

  const cards = Cards.list().filter((card) => card.category === category);

  if (!cards.length)
    return (
      <Container>
        <h4>Damnit! We couldn't find that category.</h4>
        <Link to="/categories">Look for another</Link>
      </Container>
    );

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
        frontSrc={card.front}
        insideSrc={card.inside}
        title={card.title}
        category={card.category}
      />,
    ];
  }, []);
  if (remainder) createCardRow(remainder);

  return (
    <>
      <Helmet>
        <title>Cards by Kaylin 💕</title>
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
      <Container>
        <SectionTitle>{capitalize(category)}</SectionTitle>
        {CardRows}
      </Container>
    </>
  );
};

export default CategoryDetails;
