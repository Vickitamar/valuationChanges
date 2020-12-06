/* eslint-disable max-statements */
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Button } from "./button";
import Value from "./value";
import Property from "./property";
import Mortgage from "./mortgage";
import ValuationChanges from "./valuationChanges";
import { AccountSection, Inset } from "./style";

const Detail = ({ account }) => {
  // useEffect(() => {
  //   window
  //     .fetch("/api/account")
  //     .then((res) => res.json())
  //     .then(console.log);
  // }, []);

  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  return (
    <Inset>
      <AccountSection>
        <ValuationChanges account={account} />
      </AccountSection>
      <AccountSection>
        <Value account={account} />
      </AccountSection>
      <AccountSection>
        <Property account={account} />
      </AccountSection>
      {mortgage && (
        <AccountSection>
          <Mortgage account={account} />
        </AccountSection>
      )}
      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
