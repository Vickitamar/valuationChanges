import React from "react";
import styled, { css } from "styled-components";
import { lightFormat } from "date-fns";
import {
    AccountLabel,
    AccountList,
    InfoText,
    RowContainer,
    InfoFigure,
    StyledInfoWrapper,
  } from "./style";


const StyledSpan = styled.span`
  font-weight: 600;

`;
const ValuationChanges = ({account}) => {
    
    const sincePurchase = account.recentValuation.amount - account.originalPurchasePrice
    const sincePurchaseFormatted = new Intl.NumberFormat().format(sincePurchase);
    const sincePurchasePercentage = sincePurchase / account.originalPurchasePrice;
    const originalPrice = new Intl.NumberFormat().format(account.originalPurchasePrice)
    const todaysDate = parseInt(lightFormat(new Date(), 'yyyy-MM-dd'));
    const originalDate = parseInt(account.originalPurchasePriceDate);
    const numberOfYears = todaysDate - originalDate;
    const annualAppreciation = sincePurchasePercentage / numberOfYears;


    return (
        <>
          <AccountLabel>Valuation Changes</AccountLabel>
          <RowContainer>
            <AccountList>
            <InfoText><p>Purchased for <StyledSpan>£{originalPrice}</StyledSpan> in September 2015</p></InfoText>
              <StyledInfoWrapper>
              <InfoText>Since purchase</InfoText>
                <InfoFigure>£{sincePurchaseFormatted} ({sincePurchasePercentage}%)</InfoFigure>
              </StyledInfoWrapper>
              <StyledInfoWrapper>
              <InfoText>Annual appreciation</InfoText>
                <InfoFigure>{annualAppreciation}%</InfoFigure>
              </StyledInfoWrapper>
            </AccountList>
          </RowContainer>
        </>
    )
};

export default ValuationChanges;