import React, { Component } from 'react';
import { array, bool, func, oneOf, object, shape, string } from 'prop-types';
import { injectIntl, intlShape } from '../../util/reactIntl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import debounce from 'lodash/debounce';
import unionWith from 'lodash/unionWith';
import classNames from 'classnames';
import config from '../../config';
import routeConfiguration from '../../routeConfiguration';
import { createResourceLocatorString, pathByRouteName } from '../../util/routes';
import { parse, stringify } from '../../util/urlHelpers';
import { propTypes } from '../../util/types';
import { getListingsById } from '../../ducks/marketplaceData.duck';
import { manageDisableScrolling, isScrollingDisabled } from '../../ducks/UI.duck';
import { ModalInMobile, Page } from '../../components';
import { TopbarContainer } from '../../containers';





// ReactDOM.render(
//   <ResponsiveImage
//     src="https://lorempixel.com/1200/800/"
//     width={ 1200 }
//     height={ 800 } />,
//   document.getElementById( 'app' )
// );



//var parse = require('html-react-parser');

//import image from "./Simply Chill".replace(" ", "_").toLowerCase() + ".jpg"


import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import { searchListings, searchMapListings, setActiveListing } from './ThemeTestPage.duck';
import {
  pickSearchParamsOnly,
  validURLParamsForExtendedData,
  validFilterParams,
  //createSearchResultSchema,
} from './ThemeTestPage.helpers';
import MainThemePanel from './MainThemePanel';
import css from './ThemeTestPage.css';
import css1 from './ThemeSimplyChillPage.css';


const images = [
{ id: 'simply_chill', src: './simply_chill.jpg', 
  title: 'Simply Chill', 
  description: 'Tired, stressed, brainwashed? Ok, we know how that feels. You need a Great Do Nothing experience.  Where you can just relax and enjoy the little things in life that make you feel happy. Choose a memorable stay and experience all wrapped up in a thematic travel package.' ,
  title_ro: 'Marea Relaxare', 
  description_ro: 'Te simți obosit, stresat, incapabil să te concentrezi? Te înțelegem, știm cum este. Ai nevoie de o scurtă vacanță în care să te deconectezi. Aici vei găsi cazări inedite din România pentru o vacanță de neuitat.  ' 
},
{ id: 'nature_wonders', src: './nature_wonders.jpg', 
  title: 'Nature Wonders', 
  description: 'Nature...these are the times when you realize how much it means to you. Especially if you’re living in a noisy and polluted city. If you like to climb mountains, admire breathtaking natural sights, take a picnic on a hill surrounded by birds and beautiful flowers, you have come to the right place. Enjoy a unique accommodation specially curated for you, while you fulfil your need for exploring the natural wonders. Choose a memorable stay and experience all wrapped up in a thematic travel package. And remember, it is not only about the highest peak that you can climb, it is about the epic journey that lies ahead. ' ,
  title_ro: 'Minuni ale Naturii', 
  description_ro: 'Natura...multe sunt momentele când realizezi cât de mult înseamnă pentru tine. În special dacă locuiești într-un oraș zgomotos și poluat. Dacă îți place să faci drumeții montane, să descoperi peisaje care îți taie respirația, sau să iei un picnic în natură, înconjurat de dealuri domoale și acompaniat de sunetul relaxant al păsărilor, atunci ai descoperit categoria perfectă pentru tine. Aici vei găsi cazări și experiențe inedite din România grupate în pachete de vacanță tematice în natură, pentru ca excursia ta să devină o poveste epică.' 
},
{ id: 'wildlife', src: './wildlife.jpg', 
  title: 'Wildlife', 
  description: 'A truly epic travel experience includes interactions with wildlife in their natural habitats. Luckily, Romania has a huge virtually-untouched area of mountains and is the home to some of Europe\'s most exciting species, including Brown Bears and Wolves. With that in mind, here you can explore the stunning wildlife of Romania, and find the best stays and experiences, all wrapped up in thematic travel packages. Enjoy!' ,
  title_ro: 'Natură Neîmblânzită', 
  description_ro: 'O experiență cu adevărat unică implică descoperirea naturii neîmblânzite în toată frumusețea ei. România se bucură de o varietate de spații unice, unde natura își urmează încă nestingherită cursul. Lupi, urși și râși, zimbri îți dau întâlnire în mediul lor natural. Explorează o Românie uimitoare. Aici vei găsi cazări și experiențe inedite din România grupate în pachete de vacanță tematice, pentru ca excursia ta să devină o poveste epică.' 
},
{ id: 'living_traditions', src: './living_traditions.jpg', 
  title: 'Living Traditions', 
  description: 'Where are your roots? What makes you think about childhood? If the answer lies in tradition, then this is the place to start searching for your next vacation. Our roots are in fact living traditions, where communities come together and build unique places left for us to be discovered. Start your epic journey by rediscovering the magic of old stories, folk music, traditional houses, and become a part of the community that keeps the tradition alive. Choose a memorable stay and experience all wrapped up in a thematic travel package.' ,
  title_ro: 'Tradiții Nemuritoare', 
  description_ro: 'Cât de bine îți cunoști istoria? Unde îți sunt rădăcinile? Ce te face să te gândești la copilărie? Poți să începi călătoria ta epică prin redescoperirea poveștilor demult uitate, a obiceiurile populare, a muzicii tradiționale autentice, a caselor vechi unde tradiția este menținută vie. Aici vei găsi cazări și experiențe inedite din România grupate în pachete tematice pentru o vacanță de neuitat. ' 
},
  
{ id: 'fun_and_learning_for_kids', src: './fun_and_learning_for_kids.jpg', 
  title: 'Fun & Learning for Kids', 
  description: 'It’s the perfect moment to spend some quality time with your family. Although family time gives great fulfillment and is a great opportunity to reconnect, it’s sometimes quite a challenge to please every member of the family. Not to worry. Here you can find epic visits designed for you. Where you can explore, learn and most important, have fun together. Team up and get ready for some family adventure! Choose a memorable stay and experience all wrapped up in a thematic travel package.' ,
  title_ro: 'Distracție și Învățare pentru Copii', 
  description_ro: 'Timpul petrecut în familie înseamnă distracție și bucurie împărtășită reciproc. Este cel mai prețios dar pe care îl avem. Chiar dacă viața de familie îți oferă sentimentul de împlinire, uneori este destul de dificil să găsești activități care să-i mulțumească pentru toți. Am pregătit câteva soluții. Aici vei găsi cazări și experiențe inedite din România grupate în pachete tematice de vacanță pentru întreaga familie care vor transforma orice excursie într-o poveste epică.' 
},
  
{ id: 'tasty_treasures', src: './tasty_treasures.jpg', 
  title: 'Tasty Treasures', 
  description: 'If you are an epicure, gourmet, gourmand, gastronome, or foodie, then you are in the right category. No matter how they call us, we all have in common the love for good, healthy and tasty food wherever and whenever we travel. Here you can discover the treasures of perfect balanced tastes and unique housing experiences. There is a saying that the love for travel goes through the stomach, and it is very true especially when it comes to epic travellers. Your journey is unique and why don’t you also make your food experience to be the same? Choose a memorable stay and experience all wrapped up in a thematic travel package.' ,
  title_ro: 'Comori Gustoase', 
  description_ro: 'Gurmanzi, pofticioși, oricum ni s-ar spune, un lucru e cert: știm să ne bucurăm de viață și vânăm creațiile culinare. Nu căutam doar mâncare bună, vrem să descoperim povești, senzații noi, combinații curajoase. Aici vei găsi cazări și experiențe inedite din România grupate în pachete de vacanță tematice, pentru ca excursia ta să devină o poveste epică.' 
},
{ id: 'urban_discoveries', src: './urban_discoveries.jpg', 
  title: 'Urban Discoveries', 
  description: 'Living legends, hidden gems, a city’s best secrets are now being revealed. Take a break from Lonely Planet and start to discover a wholesome city experience where you learn and live like an urban Indiana Jones...for a couple of days at least. Explore the thrills of discovery. Choose a memorable stay and experience all wrapped up in a thematic travel package.' ,
  title_ro: 'Descoperiri Urbane', 
  description_ro: 'Legende urbane sau bijuterii arhitecturale ascunse în inima orașului așteaptă să fie descoperite la pas. Lasă-te cucerit de magia orașului, intră în pielea unui Indiana Jones urban, pierde-te pe străzi și descoperă povești nespuse...măcar pentru câteva zile. Aici vei găsi cazări și experiențe inedite din România grupate în pachete de vacanță tematice, pentru ca excursia ta să devină o poveste epică.' 
},
{ id: 'romantic_escapes', src: './romantic_escapes.jpg', 
  title: 'Romantic Escapes', 
  description: 'All we need is love, love, love, love. Yes, being in love is magical, but every relationship needs care and nurturing from both sides. Start celebrating your love and create memorable and unique moments. We’ll take care of the setup, you just focus on what is really important. Choose a memorable stay and experience all wrapped up in a thematic travel package.' ,
  title_ro: 'Escapade Romantice', 
  description_ro: 'Un singur cuvânt ne poate izbăvi de tot greul și durerea vieții: cuvântul iubire (Sofocle). Să iubești este un sentiment magic, dar fiecare relație trebuie întreținută, precum o floare, cu atenție, respect și grijă din ambele părți. Găsește o cale inedită de a celebra dragostea: călătorind. Noi avem grijă de toate, tu trebuie doar să te concentrezi pe ceea ce contează cu adevărat. Aici vei găsi cazări și experiențe inedite din România grupate în pachete de vacanță tematice, pentru ca excursia ta să devină o poveste epică. ' 
},
// { id: 'simply_chill', src: './simply_chill.jpg', 
//   title: 'Simply Chill', 
//   description: 'Tired, stressed, brainwashed? Ok, we know how that feels. You need a Great Do Nothing experience.  Where you can just relax and enjoy the little things in life that make you feel happy. Choose a memorable stay and experience all wrapped up in a thematic travel package.' ,
//   title_ro: 'Simply Chill', 
//   description_ro: 'Tired, stressed, brainwashed? Ok, we know how that feels. You need a Great Do Nothing experience.  Where you can just relax and enjoy the little things in life that make you feel happy. Choose a memorable stay and experience all wrapped up in a thematic travel package.' 
// },
  
  //{ id: 'spiritual_journey', src: './spiritual_journey.jpg', title: 'Spiritual Journey', description: 'Tired, stressed, brainwashed? Ok, we know how that feels. You need a Great Do Nothing experience.  Where you can just relax and enjoy the little things in life that make you feel happy. Choose a memorable stay and experience all wrapped up in a thematic travel package.' },
  
{ id: 'energy_and_adrenaline', src: './energy_and_adrenaline.jpg', 
  title: 'Energy and Adrenaline', 
  description: 'We think that it is important to live fast and have memorable stays, that’s why this category is for the ones who love to feel the adrenaline rush. No matter if it is paragliding or downhill, at the end of the day you need a unique place to spend the night and recover after the adventure. Make your adventures epic and go beyond the comfort, live the story of your experience to the maximum. Choose a memorable stay and experience all wrapped up in a thematic travel package.' ,
  title_ro: 'Energie și Adrenalină', 
  description_ro: 'Îți place să te dai cu parapanta? Vrei să zbori cu un avion ultraușor? Iubești senzația oferită de o sesiune de downhill? Super, ai nevoie de o excursie epică, în care să simți intens fiecare bătaie a inimii. Aici vei găsi cazări și experiențe inedite din România grupate în pachete de vacanță tematice, pentru ca excursia ta să devină o poveste epică. ' 
},
  
  //{ id: 'wellness_and_well-being', src: './wellness_and_well-being.jpg', title: 'Wellness and Well-Being', description: 'Tired, stressed, brainwashed? Ok, we know how that feels. You need a Great Do Nothing experience.  Where you can just relax and enjoy the little things in life that make you feel happy. Choose a memorable stay and experience all wrapped up in a thematic travel package.' },
  
{ id: 'living_traditions', src: './living_traditions.jpg', 
  title: 'Living Traditions', 
  description: 'Where are your roots? What makes you think about childhood? If the answer lies in tradition, then this is the place to start searching for your next vacation. Our roots are in fact living traditions, where communities come together and build unique places left for us to be discovered. Start your epic journey by rediscovering the magic of old stories, folk music, traditional houses, and become a part of the community that keeps the tradition alive. Choose a memorable stay and experience all wrapped up in a thematic travel package.' 
},
{ id: 'home_alone', src: './home_alone.jpg', 
  title: 'Entire Places', 
  description: 'Looking for that perfect place to celebrate anniversaries, holidays or team buildings with your family, friends or colleagues ? Check out these stays especially designed for small or large groups that will transform each gathering into an epic experience.' 
},
{ id: 'entire_places', src: './home_alone.jpg', 
  title: 'Entire Places', 
  description: 'Looking for that perfect place to celebrate anniversaries, holidays or team buildings with your family, friends or colleagues ? Check out these stays especially designed for small or large groups that will transform each gathering into an epic experience.' ,
  title_ro: 'Case de Închiriat Integral', 
  description_ro: 'Te-ai gândit vreodată cum ar fi să ai un conac, o cabană sau chiar o casă în copac numai pentru tine și prietenii tăi? Imaginează-ți cât de epice ar putea fi petrecerile, cât de multă distracție ai putea avea cu familia. Team-building-urile organizate aici ar fi cele mai tari experiențe ale anului. Aici vei găsi cabane de inchiriat integral și alte cazări de vis pentru grupuri mici și mari care vor transforma orice excursie într-o poveste epică.' 
},
  
{ id: 'spiritual_journey', src: './spiritual_journey.jpg', 
  title: 'Spiritual Journey', 
  description: 'Can’t find your motivation for study or work anymore? Do you feel that something’s missing in your life, that you’ve lost contact with...yourself? Sometimes, you need to get lost to rediscover yourself. We’ve gathered some epic journeys that will bring food for your mind and soul. Choose a memorable stay and experience all wrapped up in a thematic travel package.' ,
  title_ro: 'Călătorii Spirituale', 
  description_ro: 'Ți-ai pierdut motivația de a studia sau de a munci? Simți un gol interior și ai senzația că te pierzi pe tine din ce în ce mai mult? Ia o pauză și dispari...într-o călătorie. Am pregătit niște vizite epice care îți vor hrăni mintea și sufletul. Alege cazări unice și experiențe memorabile grupate în pachete tematice!' 
},

];


const pathToThemeImages = require.context('./', true);

const getCats = () => images.map(name => `<img src='${pathToThemeImages(name.src, true)}' srcSet="${pathToThemeImages(name.src.replace('.jpg', '_300.jpg'), true)} 300w, ${pathToThemeImages(name.src.replace('.jpg', '_768.jpg'), true)} 768w, ${pathToThemeImages(name.src.replace('.jpg', '_1280.jpg'), true)} 1280w" alt='${name.title}' />`);

const getCats1 = () => images.map(name => pathToThemeImages(name.src, true));

// const ResponsiveImage = () => (
//   <img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`} />
// );

//const element = <FontAwesomeIcon icon={faCoffee} style={{ position: 'absolute', top: 30, left: 10 }} />

// Pagination page size might need to be dynamic on responsive page layouts
// Current design has max 3 columns 12 is divisible by 2 and 3
// So, there's enough cards to fill all columns on full pagination pages
const RESULT_PAGE_SIZE = 24;
const MODAL_BREAKPOINT = 768; // Search is in modal on mobile layout


export class ThemeTestPageComponent extends Component {
  constructor(props) {
    super(props);

    //console.log(props.params['pub_themes'])

    this.state = {
      isSearchMapOpenOnMobile: props.tab === 'map',
      isMobileModalOpen: false,
    };

    this.searchMapListingsInProgress = false;

    this.onOpenMobileModal = this.onOpenMobileModal.bind(this);
    this.onCloseMobileModal = this.onCloseMobileModal.bind(this);
  }

  // Invoked when a modal is opened from a child component,
  // for example when a filter modal is opened in mobile view
  onOpenMobileModal() {
    this.setState({ isMobileModalOpen: true });
  }

  // Invoked when a modal is closed from a child component,
  // for example when a filter modal is opened in mobile view
  onCloseMobileModal() {
    this.setState({ isMobileModalOpen: false });
  }

  // componentWillMount() {
  //   const image1 = images.filter(x=>x.title === "Simply Chill")[0].src

  //   import(image1).then(image => {this.setState({url: image})})
  // }

  render() {
    const {
      intl,
      listings,
      filterConfig,
      sortConfig,
      history,
      location,
      mapListings,
      onManageDisableScrolling,
      pagination,
      scrollingDisabled,
      searchInProgress,
      searchListingsError,
      searchParams,
      params,
      activeListingId,
      onActivateListing,
    } = this.props;

    // eslint-disable-next-line no-unused-vars
    const { page, ...searchInURL } = parse(location.search, {
      
    });
    
    // urlQueryParams doesn't contain page specific url params
    // like mapSearch, page or origin (origin depends on config.sortSearchByDistance)
    const urlQueryParams = pickSearchParamsOnly(searchInURL, filterConfig, sortConfig);

    //const themeQuerystring = urlQueryParams['pub_themes']

    const themeQuerystring ='pub_themes='+params['pub_themes']

    console.log(themeQuerystring)

    console.log(urlQueryParams)

    // Page transition might initially use values from previous search
    const urlQueryString = stringify(urlQueryParams);
    var paramsQueryString = stringify(
      pickSearchParamsOnly(searchParams, filterConfig, sortConfig)
    );
    const searchParamsAreInSync = urlQueryString === paramsQueryString;

    //paramsQueryString = themeQuerystring // forztam sa fie ca la querystring

    console.log(paramsQueryString)

    const validQueryParams = validURLParamsForExtendedData(searchInURL, filterConfig);

    //console.log(validQueryParams)
    validQueryParams['pub_themes'] = params['pub_themes']

    console.log(validQueryParams)

    const isWindowDefined = typeof window !== 'undefined';
    const isMobileLayout = isWindowDefined && window.innerWidth < MODAL_BREAKPOINT;
    
    //const { title, description, schema } = createSearchResultSchema(listings, intl);

    const detectedTheme = images.filter(x=>x.id === params['pub_themes'])[0] ? 
      images.filter(x=>x.id === params['pub_themes'])[0] 
      :
      { id: 'theme_not_found', src: './wildlife.jpg', title: 'Theme not found', description: 'Theme not found' } 

    const position = images.indexOf(detectedTheme)

    const title = detectedTheme.title
    const description = detectedTheme.description
    const schema = {};


    const firstImage = getCats1()[position];
    const title1 = images[position].title;

    console.log(firstImage)


    //const image1 = images.filter(x=>x.title === "Simply Chill")[0].src
    
    //import(image1).then(image => {this.setState({url: image})})

    // Set topbar class based on if a modal is open in
    // a child component
    const topbarClasses = this.state.isMobileModalOpen
      ? classNames(css.topbarBehindModal, css.topbar)
      : css.topbar;

    // N.B. openMobileMap button is sticky.
    // For some reason, stickyness doesn't work on Safari, if the element is <button>
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <Page
        scrollingDisabled={scrollingDisabled}
        description={description}
        title={title}
        schema={schema}
      >


      
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer
            className={topbarClasses}
            currentPage="ThemeTestPage"
            currentSearchParams={urlQueryParams}
          />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css1.staticPageWrapper}>
          <h1 className={css1.pageTitle}>{config.locale === 'en' ? detectedTheme.title : detectedTheme.title_ro }</h1>
          {/* <img className={css1.coverImage} src={getCats()[0]} alt="Simply Chill" /> */}

          {/* {parse(getCats()[0])} */}

          {/* style={{ position: 'absolute', top: 30, left: 10 }} */}

          

          <div dangerouslySetInnerHTML={{__html: getCats()[position]}} />




          <div className={css1.contentWrapper}>
            <div className={css1.contentSide}>
              {/* <div className={css1.container}> */}
                <MainThemePanel
                  urlQueryParams={validQueryParams}
                  listings={listings}
                  searchInProgress={searchInProgress}
                  searchListingsError={searchListingsError}
                  searchParamsAreInSync={searchParamsAreInSync}
                  onActivateListing={onActivateListing}
                  onManageDisableScrolling={onManageDisableScrolling}
                  onOpenModal={this.onOpenMobileModal}
                  onCloseModal={this.onCloseMobileModal}
                  
                  pagination={pagination}
                  searchParamsForPagination={parse(location.search)}
                  showAsModalMaxWidth={MODAL_BREAKPOINT}
                  history={history}
                />
                {/* <ModalInMobile
                  className={css.mapPanel}
                  id="ThemeTestPage.map"
                  isModalOpenOnMobile={this.state.isSearchMapOpenOnMobile}
                  onClose={() => this.setState({ isSearchMapOpenOnMobile: false })}
                  showAsModalMaxWidth={MODAL_BREAKPOINT}
                  onManageDisableScrolling={onManageDisableScrolling}
                >
            
                </ModalInMobile> */}
              {/* </div> */}
            </div>

            <div className={css1.contentMain}>
              <h2>
              {config.locale === 'en' ? detectedTheme.title : detectedTheme.title_ro }
              </h2>

              <p>
              {/* {images.filter(x=>x.id === themeQuerystring)[0] ? images.filter(x=>x.id === themeQuerystring)[0].description : null} */}
              {config.locale === 'en' ? detectedTheme.description : detectedTheme.description_ro }
              </p> 
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>








        
        
      </Page>
    );
  }
}

ThemeTestPageComponent.defaultProps = {
  listings: [],
  pagination: null,
  searchListingsError: null,
  searchParams: {},
  tab: 'listings',
  filterConfig: config.custom.filters,
  sortConfig: config.custom.sortConfig,
  activeListingId: null,
};

ThemeTestPageComponent.propTypes = {
  listings: array,
  onActivateListing: func.isRequired,
  onManageDisableScrolling: func.isRequired,
  pagination: propTypes.pagination,
  scrollingDisabled: bool.isRequired,
  searchInProgress: bool.isRequired,
  searchListingsError: propTypes.error,
  searchParams: object,
  tab: oneOf(['filters', 'listings']).isRequired,
  filterConfig: propTypes.filterConfig,
  sortConfig: propTypes.sortConfig,

  // from withRouter
  history: shape({
    push: func.isRequired,
  }).isRequired,
  
  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const {
    currentPageResultIds,
    pagination,
    searchInProgress,
    searchListingsError,
    searchParams,
    activeListingId,
  } = state.ThemeTestPage;
  const pageListings = getListingsById(state, currentPageResultIds);
  

  return {
    listings: pageListings,
    pagination,
    scrollingDisabled: isScrollingDisabled(state),
    searchInProgress,
    searchListingsError,
    searchParams,
    activeListingId,
  };
};

const mapDispatchToProps = dispatch => ({
  onManageDisableScrolling: (componentId, disableScrolling) =>
    dispatch(manageDisableScrolling(componentId, disableScrolling)),
  onActivateListing: listingId => dispatch(setActiveListing(listingId)),
});

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const ThemeTestPage = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(ThemeTestPageComponent);

ThemeTestPage.loadData = (params, search) => {
  const queryParams = parse(search);
  const { page = 1, theme = params['pub_themes'], ...rest } = queryParams;
  //const originMaybe = config.sortSearchByDistance && origin ? { origin } : {};
  return searchListings({
    ...rest,
    //...originMaybe,
    theme,
    page,
    perPage: RESULT_PAGE_SIZE,
    include: ['author', 'images'],
    'fields.listing': ['title', 'geolocation', 'price', 'publicData'],
    'fields.user': ['profile.displayName', 'profile.abbreviatedName'],
    'fields.image': ['variants.landscape-crop', 'variants.landscape-crop2x'],
    'limit.images': 1,
  });
};

export default ThemeTestPage;
