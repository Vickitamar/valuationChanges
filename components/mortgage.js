import React from "react";
import {
    AccountLabel,
    AccountList,
    InfoText,
    RowContainer,
  } from "./style";

const Mortgage = ({account}) => {
    return (
        <>
          <AccountLabel>Mortgage</AccountLabel>
          <RowContainer
            // This is a dummy action
            onClick={() => alert("You have navigated to the mortgage page")}
          >
            <AccountList>
              <InfoText>
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                }).format(
                  Math.abs(account.associatedMortgages[0].currentBalance)
                )}
              </InfoText>
              <InfoText>{account.associatedMortgages[0].name}</InfoText>
            </AccountList>
          </RowContainer>
        </>
    )
};

export default Mortgage;