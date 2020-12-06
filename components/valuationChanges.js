import React from "react";
import {
    AccountLabel,
    AccountList,
    InfoText,
    RowContainer,
    InfoFigure,
    StyledInfoWrapper,
  } from "./style";

const ValuationChanges = ({account}) => {
    return (
        <>
          <AccountLabel>Valuation Changes</AccountLabel>
          <RowContainer>
            <AccountList>
              <InfoText>Purchased for £199,500 in September 2015</InfoText>
              <StyledInfoWrapper>
              <InfoText>Since purchase</InfoText>
              <InfoFigure>£50,00</InfoFigure>
              </StyledInfoWrapper>
              <StyledInfoWrapper>
              <InfoText>Annual appreciation</InfoText>
              <InfoFigure>£50,00</InfoFigure>
              </StyledInfoWrapper>
            </AccountList>
          </RowContainer>
        </>
    )
};

export default ValuationChanges;