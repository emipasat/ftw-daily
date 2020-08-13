import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './ThemeLivingTraditionsPage.css';
import image from './living_traditions.jpg';

const ThemeLivingTraditionsPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Living Traditions"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'ThemeLivingTraditionsPage',
        description: 'Living Traditions',
        name: 'Theme Living Traditions page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Living Traditions</h1>
          <img className={css.coverImage} src={image} alt="Living Traditions" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p> </p>
            </div>

            <div className={css.contentMain}>
              <h2>
              Living Traditions
              </h2>

              <p>
              Where are your roots? What makes you think about childhood? If the answer lies in tradition, then this is the place to start searching for your next vacation. Our roots are in fact living traditions, where communities come together and build unique places left for us to be discovered. Start your epic journey by rediscovering the magic of old stories, folk music, traditional houses, and become a part of the community that keeps the tradition alive. Choose a memorable stay and experience all wrapped up in a thematic travel package.
              </p> 

              {/* <h3 className={css.subtitle}>Are you a sauna owner?</h3>

              <p>
                Saunatime offers you a good way to earn some extra cash! If you're not using your
                sauna every evening, why not rent it to other people while it's free. And even if
                you are using your sauna every evening (we understand, it's so good), why not invite
                other people to join you when the sauna is already warm! A shared sauna experience
                is often a more fulfilling one.
              </p>  */}

              {/* <h3 id="contact" className={css.subtitle}>
                Create your own marketplace like Saunatime
              </h3>
              <p>
                Saunatime is brought to you by the good folks at{' '}
                <ExternalLink href="http://sharetribe.com">Sharetribe</ExternalLink>. Would you like
                to create your own marketplace platform a bit like Saunatime? Or perhaps a mobile
                app? With Sharetribe it's really easy. If you have a marketplace idea in mind, do
                get in touch!
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p> */}
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

export default ThemeLivingTraditionsPage;
