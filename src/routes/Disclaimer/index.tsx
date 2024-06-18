// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { PageContentWrapper } from 'Wrappers';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeWrapper } from 'routes/Home/Wrapper';

export const Disclaimer = () => {
  // Scroll to top of window on visit.
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <PageContentWrapper className="thin">
      <HomeWrapper>
        <div className="legal">
          <h1>Disclaimer</h1>
          <p className="ySpace">
            These Terms of Use apply to <Link to="/">polkadot.cloud</Link> as
            well as any other affiliated sites, digital services, or
            applications on which a link to these Terms of Use appears
            (collectively, the &ldquo;Website&ldquo;) and apply to all visitors.
          </p>
          <p className="ySpace">
            These Terms of Use and any other terms that appear on the page from
            which you were directed to these Terms of Use govern your use of the
            Website. By accessing the Website, you agree to be legally bound by
            the Terms of Use then in effect. Please also refer to the relevant
            additional legal information applicable to your country.
          </p>
          <p className="ySpace">
            These Terms of Use as well as the information and materials
            contained in the Website are subject to change at any time and from
            time to time, without notice. If you do not agree to be bound by
            these Terms of Use, do not use the Website.
          </p>

          <p className="ySpace">
            The Website and all information and functionalities contained within
            them are not directed at or intended for use by any person resident
            or located in any jurisdiction where (1) the distribution of such
            information or functionality is contrary to the laws of such
            jurisdiction; or (2) such distribution is prohibited without
            obtaining the necessary licenses or authorizations by the relevant
            branch, subsidiary or affiliate office of Foundation and such
            licenses or authorizations have not been obtained.
          </p>
          <p className="ySpace">
            Unless specifically stated otherwise, all price information is
            indicative only. No representation or warranty, either express or
            implied, is provided in relation to the accuracy, completeness or
            reliability of the materials, nor are they a complete statement of
            the securities, markets or developments referred to herein. The
            materials should not be regarded by recipients as a substitute for
            the exercise of their own judgment.
          </p>
          <p className="ySpace">
            All information and materials published, distributed or otherwise
            made available on the Website are provided for informational
            purposes, for your non-commercial, personal use only. No information
            or materials published on the Website constitutes a solicitation, an
            offer, or a recommendation to buy or sell any investment
            instruments, to effect any transactions, or to conclude any legal
            act of any kind whatsoever.
          </p>
          <p className="ySpace">
            Foundation does not provide investment, legal or tax advice through
            the Website and nothing herein should be construed as being
            financial, legal, tax or other advice.
          </p>
          <p className="ySpace">
            Your use of the Website is at your own risk. The Website, together
            with all content, information and materials contained therein, is
            provided &ldquo;as is&ldquo; and &ldquo;as available&ldquo;, without
            any representations or warranties of any kind. Any materials,
            information or content accessed, downloaded or otherwise obtained
            through the use of the Website is done at your own risk and
            Foundation is not responsible for any damage to your computer
            systems or loss of data that results from the download of such
            material.
          </p>
          <p className="ySpace">
            To the fullest extent permitted by law, in no event shall Foundation
            or our affiliates, or any of our directors, employees, contractors,
            service providers or agents have any liability whatsoever to any
            person for any direct or indirect loss, liability, cost, claim,
            expense or damage of any kind, whether in contract or in tort,
            including negligence, or otherwise, arising out of or related to the
            use of all or part of the Website, or any links to third party
            websites.
          </p>
          <p className="ySpace">
            Foundation shall not be liable to you or anybody else for any
            damages incurred in connection with any messages sent to Foundation
            using ordinary E-mail or any other electronic messaging system.
          </p>
        </div>
      </HomeWrapper>
    </PageContentWrapper>
  );
};
