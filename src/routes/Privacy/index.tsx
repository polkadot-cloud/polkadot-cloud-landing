// Copyright 2024 @polkadot-cloud/polkadot-cloud-landing authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { PageContentWrapper } from 'Wrappers';
import { useEffect } from 'react';
import { HomeWrapper } from 'routes/Home/Wrapper';

export const Privacy = () => {
  // Scroll to top of window on visit.
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <PageContentWrapper className="thin">
      <HomeWrapper>
        <div className="legal">
          <h1>Privacy Policy</h1>

          <p>
            <b>Effective Date: 17th June 2024</b>
          </p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to Polkadot Cloud. Your privacy is important to us. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website and use our services.
          </p>

          <h2>2. Who We Are</h2>
          <p>
            Polkadot Cloud is managed by JKRB Investments Limited, located at
            63/66 Hatton Garden 5f, Suite 23, London, London, England, EC1N 8LE.
            For any privacy-related questions, you can contact us at{' '}
            <a
              href="mailto:privacy@polkadot.cloud"
              target="_blank"
              rel="noreferrer"
            >
              privacy@polkadot.cloud
            </a>
            .
          </p>

          <h2>3. Information We Collect</h2>
          <p>Personal Data:</p>
          <p>Any information you provide us when you contact us</p>

          <ol>
            <li>Automatically Collected Data:</li>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type</li>
            <li>Pages visited on our website</li>
            <li>Time and date of your visit</li>
            <li>Referral source</li>
          </ol>

          <p>
            We use Simple Analytics to collect and analyze this data. Simple
            Analytics does not track visitors and does not store any personally
            identifiable information.
          </p>

          <h2>4. Use of Your Information</h2>
          <p>We use the collected information for the following purposes:</p>

          <ol>
            <li>To provide, operate, and maintain our services</li>
            <li>To process transactions and manage payments</li>
            <li>To communicate with you, including customer support</li>
            <li>To improve our website and services based on usage patterns</li>
            <li>To comply with legal obligations</li>
          </ol>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal data only as long as necessary for the
            purposes set out in this Privacy Policy or as required by law. When
            you delete your account, we will delete your personal data. Backups
            are stored for up to 90 days before permanent deletion.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data against accidental or unlawful
            destruction, loss, alteration, unauthorized disclosure, or access.
            However, no method of transmission over the Internet or method of
            electronic storage is 100% secure.
          </p>

          <h2>7. Your Rights</h2>
          <p>You have the following rights regarding your personal data:</p>

          <ol>
            <li>Access: You can request a copy of your data.</li>
            <li>Correction: You can request correction of inaccurate data.</li>
            <li>Deletion: You can request deletion of your data.</li>
            <li>Objection: You can object to the processing of your data.</li>
            <li>
              Portability: You can request transfer of your data to another
              service provider.
            </li>
            <li>
              Withdrawal of Consent: You can withdraw your consent at any time,
              which may affect our ability to provide services to you.
            </li>
            <li>
              To exercise any of these rights, please contact us at{' '}
              <a
                href="mailto:privacy@polkadot.cloud"
                target="_blank"
                rel="noreferrer"
              >
                privacy@polkadot.cloud
              </a>
              .
            </li>
          </ol>

          <h2>8. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal data to
            third parties, except as required to provide our services, comply
            with the law, or protect our rights. We may share your data with
            service providers that assist us with our operations, subject to
            appropriate confidentiality and data protection agreements.
          </p>

          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            Changes become effective 30 days after being posted. We encourage
            you to review this Privacy Policy periodically.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at{' '}
            <a
              href="mailto:contact@polkadot.cloud"
              target="_blank"
              rel="noreferrer"
            >
              contact@polkadot.cloud
            </a>
            .
          </p>
        </div>
      </HomeWrapper>
    </PageContentWrapper>
  );
};
