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

import css from './ThemeTastyTreasuresPage.css';
import image from './tasty_treasures.jpg';

const ThemeTastyTreasuresPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Tasty Treasures"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'ThemeTastyTreasuresPage',
        description: 'Tasty Treasures',
        name: 'Theme Tasty Treasures page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Tasty Treasures</h1>
          <img className={css.coverImage} src={image} alt="Tasty Treasures" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p> </p>
            </div>

            <div className={css.contentMain}>
              <h2>
              Tasty Treasures
              </h2>

              <p>
              If you are an epicure, gourmet, gourmand, gastronome, or foodie, then you are in the right category. No matter how they call us, we all have in common the love for good, healthy and tasty food wherever and whenever we travel. Here you can discover the treasures of perfect balanced tastes and unique housing experiences. There is a saying that the love for travel goes through the stomach, and it is very true especially when it comes to epic travellers. Your journey is unique and why don’t you also make your food experience to be the same? Choose a memorable stay and experience all wrapped up in a thematic travel package.

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

export default ThemeTastyTreasuresPage;
