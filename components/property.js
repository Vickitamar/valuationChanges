import React from "react";
import accountType from "../types";
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

Property.propTypes = {
  account: accountType
};

export default Property;