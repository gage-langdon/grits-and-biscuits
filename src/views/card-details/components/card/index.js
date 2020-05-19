import React, { useState } from "react";
import styled from "styled-components";
import { space } from "styled-system";
import ShareModal from "../share-modal";
import { Link } from "react-router-dom";
import { capitalize } from "../../../../utils";

const Container = styled.div`
  min-height: 300px;
  min-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 425px) {
    width: 95%;
  }

  @media only screen and (min-width: 425px) {
    width: 75%;
  }

  @media only screen and (min-width: 1098px) {
    width: 60%;
  }
`;

const ImageContainer = styled.img`
  height: inherit;
  width: inherit;
  border-radius: 7px;
  cursor: pointer;
`;

const CardNav = styled.div`
  width: inherit;
  margin-top: 32px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardNavDivider = styled.span`
  color: #5d5b6a;
`;

const CardNavBtn = styled.button`
  color: ${({ active }) => (active ? "#5d5b6a" : "#588da8")};
  border: none;
  background: none;
  cursor: pointer;

  ${space}
`;

const Card = ({ id, frontSrc, insideSrc, category }) => {
  const [isFlipped, setFlipped] = useState(false);
  const [isShareModalActive, setShareModalActive] = useState(false);

  const toggleFlip = () => insideSrc && setFlipped(!isFlipped);
  const toggleShareMoeal = () => setShareModalActive(!isShareModalActive);

  const imageSrc = isFlipped ? insideSrc : frontSrc;

  // precache inside card it loads immediately
  if (insideSrc) new Image().src = insideSrc;

  const CardNavigation = insideSrc ? (
    <div>
      <CardNavBtn active={!isFlipped} onClick={toggleFlip}>
        Front
      </CardNavBtn>
      <CardNavDivider>|</CardNavDivider>
      <CardNavBtn active={isFlipped} onClick={toggleFlip}>
        Inside
      </CardNavBtn>
    </div>
  ) : null;

  return (
    <>
      <Container>
        <ImageContainer src={imageSrc} onClick={toggleFlip} />
        <CardNav>
          <Link to={`/categories/${category}`} style={{ marginRight: "auto" }}>
            <CardNavBtn>
              {"< "}
              {capitalize(category)}
            </CardNavBtn>
          </Link>
          {CardNavigation}
          <CardNavBtn ml="auto" onClick={toggleShareMoeal}>
            Share
          </CardNavBtn>
        </CardNav>
      </Container>
      <ShareModal active={isShareModalActive} onClose={toggleShareMoeal} />
    </>
  );
};

export default Card;
