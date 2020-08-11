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

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Epicvisits',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>About Epicvisits</h1>
          {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Find out more about us from the Media:</p>

<a target="_blank" href="https://www.protv.ro/utile/se-lanseaza-epicvisits-com-prima-platforma-online-pentru-cazari-tematice.html">PRO TV</a><br/>
<a target="_blank" href="https://www.businessmagazin.ro/actualitate/airbnb-de-romania-cum-au-reusit-trei-tineri-romani-sa-lanseze-pe-19254224">Business Magazin</a><br/>
<a target="_blank" href="https://adevarulfinanciar.ro/business/start-up/romanii-pot-recomanda-locuri-de-vacanta-tematice-pe-noua-platforma-epicvisits-com/">Adevarul Financiar</a>

            </div>

            <div className={css.contentMain}>
              <h2>
              Welcome to Epic Visits, the online booking platform that connects owners of thematic accommodations and experiences with travelers seeking meaningful, life enriching experiences.
              </h2>

              <p>
              Our story started when our team launched Ferestroika in 2019, a living museum of communism and the 
              first initiative of this kind in Bucharest, Romania.  
              In a thematic apartment we recreated the real story of a family from the 80’s, 
              promoting a unique Touch-Taste-Learn concept. We faced numerous challenges but also gained 
              valuable insights on our road to success and soon realized that tourism 
              as we know it needs a disruption. True to our beliefs, we decided to make it happen 
              ourselves rather than waiting for someone else to do it, and that’s how Epic Visits came to life. 
              </p>

              <h3 className={css.subtitle}>How it works:</h3>

              <p>
              
              <ol >
                <li> Our partners don’t sell accommodation on experiences separately, only complete packages.</li>
                <li> All our listings are grouped under inspiring holiday themes, from romantic couple getaways to urban discoveries, outdoor adrenaline & adventures and many more to discover.</li>
                <li> The availability of the packages is ensured through synchronization with other booking platforms in order to avoid double bookings. Your end date (check-out) can’t be later than 85 days from the moment of your reservation.</li>
                <li> As an added step of protection, after booking with us, your order goes directly to the property who will need to confirm it again in maximum 3 days. If not, the money will be reverted to your account.</li>
                <li> Our platform allows direct communication with the hosts so you can get more clarifications or submit extra requests to your host.</li>
                <li> After a successful booking  your transaction is processed by Stripe who will hold your funds until your booking is successfully completed.</li>
                <li> Your money will be reverted to you by Stripe in two possible scenarios:
                  <ol>
                    <li> Free Cancellation – our default policy is 14 days before the check-in date. Please check with each listing for specific conditions.</li>
                    <li> Closed dispute – you can  raise a dispute with the host and ask for a partial or full refund and our team will intervene to mediate.
                      <a href="#">FIND OUT MORE HERE</a>
                    </li>
                  </ol>
                </li>
              </ol>

              </p>

              <h3 id="contact" className={css.subtitle}>
              Benefits
              </h3>
              <p>

              <b>For property owners</b>
              <ol>
                <li>More time – dedicated contact person, minimum paperwork, safe & fast transactions with Stripe integration, synchronization with other booking platforms</li>
                <li>More visibility – connect with a premium audience, differentiate from the competition, access additional services (PR, Media, Photo-Video and many more)</li>
                <li>More added value – marketing and pricing consultancy, ability to provide extra services to your customers beside accommodation </li>
              </ol>




<b>For travelers</b>
<ol>
  <li>Get inspired – plan your next holiday based on your interests and what you would like to do</li>
  <li>Curated experiences – together with our partners we only choose the best, so that we save you time</li>
  <li>What you see is what you get – our staff visits each and single one of our listings in person before making them available for booking</li>
  <li>Book with confidence – 24/7 support, world-leading payment infrastructure with Stripe, safe & secure transactions with free cancellation options</li>
</ol>




              </p>
              <p>
              Please feel free to contact us anytime at <a href="mailto:team@epicvisits.com">team@epicvisits.com</a> if you want to learn more about our project.

Let’s make travel epic!
 {/* at{' '}
                <ExternalLink href="http://sharetribe.com">Sharetribe</ExternalLink>. Would you like
                to create your own marketplace platform a bit like Saunatime? Or perhaps a mobile
                app? With Sharetribe it's really easy. If you have a marketplace idea in mind, do
                get in touch! */}
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> page.
                {/*  and{' '} */}
                {/* <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>. */}
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

export default AboutPage;
