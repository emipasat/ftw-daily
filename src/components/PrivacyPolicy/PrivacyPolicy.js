import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: August 10, 2020</p>

      <h2>Privacy Policy</h2>
      <p>
      Epic Visits S.R.L. , a private limited-liability company, registered in Romania, J8/814/18.05.2020, Unique Registration Code 42509467, headquartered in Ucea de Jos Village, 125 A, Brasov, is the owner of all intellectual property rights over the website having the URL address: www.ferestroika.com (the “Website”).
The following Terms govern your access to and use of this Website. Specific terms and conditions may also apply to content, data, materials or specific information included in or available through this Website (the “Content”) or for transactions made through this Website.
Within the limits of the law, Epic Visits S.R.L. does not affirm nor offer any guarantee that (i) the Website will meet your requirements or that (ii) the Website will operate uninterruptedly, in a timely, secure or error-free manner; or that (iii) the results that can be obtained from the use of the Website (including any Content, information and materials on this Website) will be accurate, complete, accurate, secure, reliable or otherwise meet you requirements.

      </p>

      <h2>1. Accepting the Privacy Policy</h2>
      <p>
      By accessing or using this Website, you agree to observe the Terms of Use, as well as all terms and conditions included or referred to herein, and any additional terms and conditions posted on this Website, including the Cookie Policy. If you do not agree with all these terms, you should not access nor use this Website.
      </p>

      <h2>2. Changes to the Privacy Policy</h2>
      <p>
      These Privacy Policy may be amended by Epic Visits S.R.L. at any time. The amended Terms of Use become effective when they are displayed on the website. By continuing accessing or using the Website after displaying such amendments, we will assume that you have accepted the respective changes. We recommend reviewing any applicable terms and conditions regularly.
Epic Visits S.R.L. may discontinue or make changes or updates to the Website or to the Website Content at any time, without prior notice. Epic Visits S.R.L. may restrict, deny or interrupt any person’s access to the Website or any part thereof at any time, without notice and without giving any reason.

      </p>

      <h2>3. Protection of personal data</h2>
      <p>
      Personal information provided or collected through or in connection with this Website will only be used in accordance with the notice regarding the processing of personal data.
      </p>

      <h2>4. Terms of use. Guarantees.</h2>
      <p>
      Epic Visits S.R.L. does not warrant that the Website or the servers on which it is hosted are free of viruses or other potentially harmful informatic components. You use the Website at your own risk, Epic Visits S.R.L. not being responsible for any direct or indirect damages caused by the use of or accessing / visiting the Website or as a result of using the information on the Website. Epic Visits S.R.L. is not responsible for any errors or omissions that may occur in writing or presenting the materials on the Website. Epic Visits S.R.L. does not give any guarantee of the content and use of this Website. The published information corresponds to the reality at the moment of their registration on the Website or the updating of the various pages of the Website.
The services and products presented on the Website do not constitute an offer of any kind, being presented purely for your information only. In order to book an experience from Epic Visits S.R.L. , please fill in the contact request for an offer.

      </p>

      <h2>5. Security</h2>
      <p>Performing unauthorized operations on this Website and attempting to do so, including but not limited to: abusive use, fraudulent use, unauthorized access, modification, copying of information for commercial purposes, blocking access, and so on will be punished according to the law.</p>

      <h2>6. Limitation of liability</h2>
      <p>Neither Epic Visits S.R.L. nor any of its affiliates, partners and suppliers shall in no case be liable for any direct, indirect or consequential damages resulting from, arising out of or in connection with the access, use or inability to access or use Website, content, or content created by the user, even if Epic Visits S.R.L. has been notified of the possibility of such damages, unless such damages arise from misrepresentations or contract misrepresentation from Ferestroika Experience S.R.L.</p>



      <h2>7. Intellectual property rights</h2>
      <p>Epic Visits S.R.L. is the owner of all intellectual property rights over the Website.
Any use of the Website or the Content for commercial purposes, including but not limited to reproduction or distribution, copying, downloading of files on any network, is strictly forbidden without the written permission of Epic Visits S.R.L.</p>
    
      <h2>8. Blocking the Website</h2>
      <p>We have the exclusive right to block access to the Website or to any part thereof for commercial or operational reasons. Whenever possible, prior to such block, we will inform the registered users.</p>
    

      <h2>9. Applicable law. Litigation</h2>
      <p>The rights and obligations of the parties mentioned in these Terms of Use, as well as all the legal effects they produce, are governed by the Romanian law in force.
Any dispute relating to these Terms of Use shall be settled by the competent Romanian courts.
</p>


      <h2>10. Further information and contact</h2>
      <p>For any further information, please contact us at: team@epicvisits.com</p>
    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
