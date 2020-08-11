import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './WildlifePage.css';
import image from './wildlife.jpg';

const WildlifePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Wildlife"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WildlifePage',
        description: 'Wildlife',
        name: 'Wildlife page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Wildlife.</h1>
          <img className={css.coverImage} src={image} alt="Wildlife" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p></p>
            </div>

            <div className={css.contentMain}>
              {/* <h2>
                Wildlife
              </h2> */}

              <p>
              A truly epic travel experience includes interactions with wildlife in their natural habitats. Luckily, Romania has a huge virtually-untouched area of mountains and is the home to some of Europe's most exciting species, including Brown Bears and Wolves. With that in mind, here you can explore the stunning wildlife of Romania, and find the best stays and experiences, all wrapped up in thematic travel packages. Enjoy!
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default WildlifePage;
