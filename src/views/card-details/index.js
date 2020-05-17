import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import Cards from "../../cards";

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

  return (
    <Container>
      <Card frontSrc={card.front} insideSrc={card.inside} />
    </Container>
  );
};

export default CardDetails;
