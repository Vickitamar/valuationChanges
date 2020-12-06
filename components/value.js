import React from "react";
import { add, format } from "date-fns";
import {
    AccountHeadline,
    AccountLabel,
    AccountList,
    InfoText,
  } from "./style";

const Value = ({account}) => {
    let mortgage;
    const lastUpdate = new Date(account.lastUpdate);
    if (account.associatedMortgages.length) {
      mortgage = account.associatedMortgages[0];
    };
    
    return (
        <>
          <AccountLabel>Estimated Value</AccountLabel>
          <AccountHeadline>
            {new Intl.NumberFormat("en-GB", {
             style: "currency",
             currency: "GBP",
            }).format(account.recentValuation.amount)}
          </AccountHeadline>
          <AccountList>
            <InfoText>
              {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
            </InfoText>
            <InfoText>
              {`Next update ${format(
                add(lastUpdate, { days: account.updateAfterDays }),
                "do MMM yyyy"
              )}`}
            </InfoText>
          </AccountList>
        </>
    )

}

export default Value;