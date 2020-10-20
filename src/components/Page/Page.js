import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import routeConfiguration from '../../routeConfiguration';
import config from '../../config';
import { metaTagProps } from '../../util/seo';
import { canonicalRoutePath } from '../../util/routes';
import { CookieConsent } from '../../components';

import facebookImage from '../../assets/epicvisitsFacebook-1200x630.jpg';
import twitterImage from '../../assets/epicvisitsTwitter-600x314.jpg';
import css from './Page.css';

const preventDefault = e => {
  e.preventDefault();
};

const twitterPageURL = siteTwitterHandle => {
  if (siteTwitterHandle && siteTwitterHandle.charAt(0) === '@') {
    return `https://twitter.com/${siteTwitterHandle.substring(1)}`;
  } else if (siteTwitterHandle) {
    return `https://twitter.com/${siteTwitterHandle}`;
  }
  return null;
};

class PageComponent extends Component {
  constructor(props) {
    super(props);
    // Keeping scrollPosition out of state reduces rendering cycles (and no bad states rendered)
    this.scrollPosition = 0;
    this.contentDiv = null;
    this.scrollingDisabledChanged = this.scrollingDisabledChanged.bind(this);

    //this.setLanguageFromUrl();
    // nu merge de aici TODO de ce? trebuie doar deasupra
  }

  setLanguageFromUrl() {
    var first = window.location.href;
    var first1 = first.split('/');
    console.log(first1)
  
    if (first1[3] == 'ro')
    {
      config.locale = 'ro';
    }
    else 
    {
      config.locale = 'en';
    }
  };

  componentDidMount() {
    // By default a dropped file is loaded in the browser window as a
    // file URL. We want to prevent this since it might loose a lot of
    // data the user has typed but not yet saved. Preventing requires
    // handling both dragover and drop events.
    document.addEventListener('dragover', preventDefault);
    document.addEventListener('drop', preventDefault);

  }

  componentWillUnmount() {
    document.removeEventListener('dragover', preventDefault);
    document.removeEventListener('drop', preventDefault);
  }

  scrollingDisabledChanged(currentScrollingDisabled) {
    if (currentScrollingDisabled && currentScrollingDisabled !== this.scrollingDisabled) {
      // Update current scroll position, if scrolling is disabled (e.g. modal is open)
      this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.scrollingDisabled = currentScrollingDisabled;
    } else if (currentScrollingDisabled !== this.scrollingDisabled) {
      this.scrollingDisabled = currentScrollingDisabled;
    }
  }

  render() {
    const {
      className,
      rootClassName,
      children,
      location,
      intl,
      scrollingDisabled,
      referrer,
      author,
      contentType,
      description,
      facebookImages,
      published,
      schema,
      tags,
      title,
      twitterHandle,
      twitterImages,
      updated,
    } = this.props;

    const classes = classNames(rootClassName || css.root, className, {
      [css.scrollingDisabled]: scrollingDisabled,
    });

    this.scrollingDisabledChanged(scrollingDisabled);
    const referrerMeta = referrer ? <meta name="referrer" content={referrer} /> : null;

    const canonicalRootURL = config.canonicalRootURL;
    const shouldReturnPathOnly = referrer && referrer !== 'unsafe-url';
    const canonicalPath = canonicalRoutePath(routeConfiguration(), location, shouldReturnPathOnly);
    const canonicalUrl = `${canonicalRootURL}${canonicalPath}`;

    const siteTitle = config.siteTitle;
    const schemaTitle = intl.formatMessage({ id: 'Page.schemaTitle' }, { siteTitle });
    const schemaDescription = intl.formatMessage({ id: 'Page.schemaDescription' });
    const metaTitle = title || schemaTitle;
    const metaDescription = description || schemaDescription;
    const facebookImgs = facebookImages || [
      {
        name: 'facebook',
        url: `${canonicalRootURL}${facebookImage}`,
        width: 1200,
        height: 630,
      },
    ];
    const twitterImgs = twitterImages || [
      {
        name: 'twitter',
        url: `${canonicalRootURL}${twitterImage}`,
        width: 600,
        height: 314,
      },
    ];

    const metaToHead = metaTagProps({
      author,
      contentType,
      description: metaDescription,
      facebookImages: facebookImgs,
      twitterImages: twitterImgs,
      published,
      tags,
      title: metaTitle,
      twitterHandle,
      updated,
      url: canonicalUrl,
      locale: intl.locale,
    });

    // eslint-disable-next-line react/no-array-index-key
    const metaTags = metaToHead.map((metaProps, i) => <meta key={i} {...metaProps} />);

    const facebookPage = config.siteFacebookPage;
    const twitterPage = twitterPageURL(config.siteTwitterHandle);
    const instagramPage = config.siteInstagramPage;
    const sameOrganizationAs = [facebookPage, twitterPage, instagramPage].filter(v => v != null);

    // Schema for search engines (helps them to understand what this page is about)
    // http://schema.org
    // We are using JSON-LD format

    // Schema attribute can be either single schema object or an array of objects
    // This makes it possible to include several different items from the same page.
    // E.g. Product, Place, Video
    const schemaFromProps = Array.isArray(schema) ? schema : [schema];
    const schemaArrayJSONString = JSON.stringify([
      ...schemaFromProps,
      {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        '@id': `${canonicalRootURL}#organization`,
        url: canonicalRootURL,
        name: siteTitle,
        sameAs: sameOrganizationAs,
        logo: `${canonicalRootURL}/static/webapp-icon-192x192.png`,
        address: config.address,
      },
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: canonicalRootURL,
        description: schemaDescription,
        name: schemaTitle,
        publisher: {
          '@id': `${canonicalRootURL}#organization`,
        },
      },
    ]);

    const scrollPositionStyles = scrollingDisabled
      ? { marginTop: `${-1 * this.scrollPosition}px` }
      : {};

    const pixelFacebook = `<!-- Facebook Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '248137096520763');
      fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=248137096520763&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Facebook Pixel Code -->`

    // If scrolling is not disabled, but content element has still scrollPosition set
    // in style attribute, we scrollTo scrollPosition.
    const hasMarginTopStyle = this.contentDiv && this.contentDiv.style.marginTop;
    if (!scrollingDisabled && hasMarginTopStyle) {
      window.requestAnimationFrame(() => {
        window.scrollTo(0, this.scrollPosition);
      });
    }

    return (
      <div className={classes}>
        <Helmet
          htmlAttributes={{
            lang: intl.locale,
          }}
        >
          <title>{title}</title>
          {referrerMeta}
          <link rel="canonical" href={canonicalUrl} />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="Content-Language" content={intl.locale} />
          {metaTags}
          <script type="application/ld+json">
            {schemaArrayJSONString.replace(/</g, '\\u003c')}
          </script>

          
          {/* <script type="text/javascript">
          var script= document.createElement('script');
script.text = "alert('xxx')";
document.head.appendChild(script);
</script> */}
<script>
  var script= document.createElement('script');
  script.src = "/static/scripts/pixelFacebook.js";
  document.head.appendChild(script);
</script>

          
        </Helmet>
        <CookieConsent />
        <div
          className={css.content}
          style={scrollPositionStyles}
          ref={c => {
            this.contentDiv = c;
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

const { any, array, arrayOf, bool, func, number, object, oneOfType, shape, string } = PropTypes;

PageComponent.defaultProps = {
  className: null,
  rootClassName: null,
  children: null,
  author: null,
  contentType: 'website',
  description: null,
  facebookImages: null,
  twitterImages: null,
  published: null,
  referrer: null,
  schema: null,
  tags: null,
  twitterHandle: null,
  updated: null,
};

PageComponent.propTypes = {
  className: string,
  rootClassName: string,
  children: any,
  scrollingDisabled: bool.isRequired,

  // Handle referrer policy
  referrer: string,

  // SEO related props
  author: string,
  contentType: string, // og:type
  description: string, // page description
  facebookImages: arrayOf(
    shape({
      width: number.isRequired,
      height: number.isRequired,
      url: string.isRequired,
    })
  ),
  twitterImages: arrayOf(
    shape({
      width: number.isRequired,
      height: number.isRequired,
      url: string.isRequired,
    })
  ),
  published: string, // article:published_time
  schema: oneOfType([object, array]), // http://schema.org
  tags: string, // article:tag
  title: string.isRequired, // page title
  twitterHandle: string, // twitter handle
  updated: string, // article:modified_time

  // from withRouter
  history: shape({
    listen: func.isRequired,
  }).isRequired,
  location: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const Page = injectIntl(withRouter(PageComponent));
Page.displayName = 'Page';

export default Page;
