import React from 'react';

const dummyTaxData = [
  { month: 'Jan', filings: 3 },
  { month: 'Feb', filings: 2 },
  { month: 'Mar', filings: 4 },
  { month: 'Apr', filings: 1 },
  { month: 'May', filings: 3 },
  { month: 'Jun', filings: 2 },
];

function TaxFilingOverview() {
  return (
    <section className="tax-filing-overview">
      <h3>Tax Filing Overview</h3>
      <ul>
        {dummyTaxData.map((data) => (
          <li key={data.month}>
            {data.month}: {data.filings} filings
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaxFilingOverview;
