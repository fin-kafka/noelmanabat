/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

import { useContext, useEffect, useState } from 'react';
import { CompanyDetailsContext } from 'shared/utils/contexts';
import { Company } from 'shared/utils/types';
import CompanyDetails from './company-details';

export default function Details(): JSX.Element {
  const companyDetails: Company[] = useContext(CompanyDetailsContext);

  return (
    <>
      <div className="mx-0 md:mx-32 w-full">
        {companyDetails.map((company) => (
          <div className="p-2">
            <CompanyDetails key={company.name} activeCompany={company} />
          </div>
        ))}
      </div>
    </>
  );
}
