import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import styled from "styled-components";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

// views
import CardListing from "./card-listing";
import CardDetails from "./card-details";
import CategoryDetails from "./category-details";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Views = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <Container>
      <Navbar />
      <Switch>
        <Route
          path="/categories/:category"
          children={<CategoryDetails />}
          exact
        />
        <Route path="/:id" children={<CardDetails />} exact />
        <Route path="/" children={<CardListing />} />
      </Switch>
      <Footer />
    </Container>
  );
};
export default Views;
