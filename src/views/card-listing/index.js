/* eslint-disable jsx-a11y/accessible-emoji */

import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import LLamaSeeThatAss from "../../cards/llama_see_that_ass";

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
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 60px;

  ${({ background }) =>
    background === "brick" &&
    `
      background: linear-gradient(135deg, #ecf2f9 21px, #fab7b7 22px, #fab7b7 24px, transparent 24px, transparent 67px, #fab7b7 67px, #fab7b7 69px, transparent 69px),
      linear-gradient(225deg, #ecf2f9 21px, #fab7b7 22px, #fab7b7 24px, transparent 24px, transparent 67px, #fab7b7 67px, #fab7b7 69px, transparent 69px)0 64px;
      background-color:#ecf2f9;
      background-size: 64px 128px;
`}

  ${({ background }) =>
    background === "squiggles" &&
    `
      background-color: #fab7b747;
      background-size: 58px 58px;
      background-position: 0px 2px, 4px 35px, 29px 31px, 33px 6px,
      0px 36px, 4px 2px, 29px 6px, 33px 30px;
      background-image:
      linear-gradient(335deg,  #ecf2f9 23px, transparent 23px),
      linear-gradient(155deg,  #ecf2f9 23px, transparent 23px),
      linear-gradient(335deg,  #ecf2f9 23px, transparent 23px),
      linear-gradient(155deg,  #ecf2f9 23px, transparent 23px),

      linear-gradient(335deg,  #ecf2f9 10px, transparent 10px),
      linear-gradient(155deg,  #ecf2f9 10px, transparent 10px),
      linear-gradient(335deg,  #ecf2f9 10px, transparent 10px),
      linear-gradient(155deg,  #ecf2f9 10px, transparent 10px);
`}
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

const SectionFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
`;

const CategoryLink = styled.span`
  color: black;
  a {
    color: black;
    text-decoration: none;
  }
`;

const CardListing = () => {
  const sections = Cards.listSections();

  const CardRows = sections.map((section, i) => {
    const cardPreviews = section.items.map((card) => (
      <PreviewCard
        key={card.id}
        id={card.id}
        imageSrc={card.front}
        title={card.title}
        category={card.category}
      />
    ));
    return (
      <SectionContainer key={`section_${i}`} background={section.background}>
        <SectionTitle>{section.title}</SectionTitle>
        <Row>{cardPreviews}</Row>
        <SectionFooter>
          {section.linkedCategory ? (
            <CategoryLink>
              <Link to={`/categories/${section.linkedCategory}`}>
                View More
              </Link>
            </CategoryLink>
          ) : null}
        </SectionFooter>
      </SectionContainer>
    );
  });

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
      <Container>{CardRows}</Container>
    </>
  );
};

export default CardListing;
