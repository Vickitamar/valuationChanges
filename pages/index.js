import React, { useEffect } from "react";
import styled from "styled-components";
import Detail from "../components/detail";
import { Banner } from "../components/banner";

const Main = styled.main`
  max-width: 960px;
  margin: 0 auto;
`;

const PropertyDetails = ({ account }) => {
  return (
    <Main>
      <Banner>Property details</Banner>
      <Detail account={account}/>
    </Main>
  );
}

export async function getServerSideProps(context) {
  //  const res = await fetch(`"/api/account"`)
  //  const data = await res.json()
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
   return {
     props: { account }
   }
  
  }



export default PropertyDetails;
