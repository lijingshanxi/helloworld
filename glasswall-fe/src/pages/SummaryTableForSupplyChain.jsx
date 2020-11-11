import React from "react";
import { styled, Card } from "@material-ui/core";
import SummaryTable from "../components/supplyChain/SummaryTable"

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
});

const StyledCard = styled(Card)({
  width: "50vw"
});

const SummaryTableForSupplyChain = () => (
  <Container>
      <SummaryTable></SummaryTable>
      <br></br>

      <StyledCard>
          <img src="/table.jpg" width="100%" />
      </StyledCard>
      <br></br>
      <StyledCard>
          <img src="/visual.jpg" width="100%" />
      </StyledCard>
  </Container>
);

export default SummaryTableForSupplyChain;
