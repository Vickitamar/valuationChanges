/* eslint-disable max-statements */
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Button } from "./button";
import Value from "./value";
import Property from "./property";
import Mortgage from "./mortgage";
import { AccountSection, Inset } from "./style";

const account = {
  uid: "65156cdc-5cfd-4b34-b626-49c83569f35e",
  deleted: false,
  dateCreated: "2020-12-03T08:55:33.421Z",
  currency: "GBP",
  name: "15 Temple Way",
  bankName: "Residential",
  type: "properties",
  subType: "residential",
  originalPurchasePrice: 250000,
  originalPurchasePriceDate: "2017-12-03",
  recentValuation: { amount: 310000, status: "good" },
  associatedMortgages: [
    {
      name: "HSBC Repayment Mortgage",
      uid: "fb463121-b51a-490d-9f19-d2ea76f05e25",
      currentBalance: -175000,
    },
  ],
  canBeManaged: false,
  postcode: "BS1 2AA",
  lastUpdate: "2020-12-01T08:55:33.421Z",
  updateAfterDays: 30,
};

const Detail = ({}) => {
  useEffect(() => {
    window
      .fetch("/api/account")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  return (
    <Inset>
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
