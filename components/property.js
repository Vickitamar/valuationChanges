import React from "react";
import {
    AccountLabel,
    AccountList,
    InfoText,
    RowContainer,
  } from "./style";

const Property = ({account}) => {
    return (
        <>
          <AccountLabel>Property details</AccountLabel>
          <RowContainer>
            <AccountList>
              <InfoText>{account.name}</InfoText>
              <InfoText>{account.bankName}</InfoText>
              <InfoText>{account.postcode}</InfoText>
            </AccountList>
          </RowContainer>
        </>
    )
};

export default Property;