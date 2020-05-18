import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import Cards from "../../cards";
import { Helmet } from "react-helmet";

import Card from "./components/card";

const Container = styled.div`
  padding-top: 45px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #ecf2f9;
  padding-x: 10%;
`;

const CardDetails = () => {
  const { id } = useParams();
  const card = Cards.getById(id);

  if (!card)
    return (
      <Container>
        <h4>Damnit! We couldn't find that card.</h4>
        <Link to="/">Look for another</Link>
      </Container>
    );

  console.log(card);
  return (
    <>
      <Helmet>
        <title>{card.title} | Grits and Biscuits</title>
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={card.title} />
        <meta
          property="og:description"
          content="Hand drawn, interactive, cards by Kaylin 💕"
        />
        <meta
          property="og:image"
          content={`https://${window.location.hostname}${card.front}`}
        />
      </Helmet>
      <Container>
        <Card id={id} frontSrc={card.front} insideSrc={card.inside} />
      </Container>
    </>
  );
};

export default CardDetails;
