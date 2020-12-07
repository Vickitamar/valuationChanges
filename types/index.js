import PropTypes from "prop-types";

const accountType = PropTypes.shape({
    uid: PropTypes.string,
    deleted: PropTypes.boolean,
    dateCreated: PropTypes.string,
    currency: PropTypes.string,
    name: PropTypes.string,
    bankName: PropTypes.string,
    type: PropTypes.string,
    subType: PropTypes.string,
    originalPurchasePrice: PropTypes.number,
    originalPurchasePriceDate: PropTypes.string,
    recentValuation: PropTypes.shape({
      amount: PropTypes.number,
      status: PropTypes.string,
    }),
    associatedMortgages: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        uid: PropTypes.string,
        currentBalance: PropTypes.number,
      }),
    ),
    canBeManaged: PropTypes.boolean,
    postcode: PropTypes.string,
    lastUpdate: PropTypes.string,
    updateAfterDays: PropTypes.number,
  })

  export default accountType;