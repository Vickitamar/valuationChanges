/* eslint-disable max-statements */
import PropTypes from "prop-types";
import React from "react";
import { Button } from "./button";
import Value from "./value";
import Property from "./property";
import Mortgage from "./mortgage";
import ValuationChanges from "./valuationChanges";
import { AccountSection, Inset } from "./style";

const Detail = ({ account }) => {
  // how I would have done it in React
  // const [accountData, setAccountData] = useState({})
  // const [fetchingAccount, setFetchingAccount] = useState(false)
  // const [errorMessage, setErrorMessage] = useState('')
  // useEffect(() => {
  //   async function loadData() {
  //     try {
  //       setFetchingAccount(true)
  //       const response = await window.fetch("/api/account")
  //       const data = await response.json();
  //       setAccountData(data)
  //       setFetchingAccount(false)
  //     } catch (error) {
  //       setErrorMessage(error.message)
  //       setFetchingAccount(false)   
  //   }
  // }
  //   loadData();
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
