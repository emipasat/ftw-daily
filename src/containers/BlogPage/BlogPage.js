import React, { Component } from 'react';
import { array, bool, func, oneOf, object, shape, string } from 'prop-types';
import { injectIntl, intlShape } from '../../util/reactIntl';
import { connect } from 'react-redux';
import { compose } from 'redux';

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

import css from './BlogPage.css';
import image1 from './images/zabola-estate-1.jpg';
import image2 from './images/zabola-estate-2.jpg';

const setLanguageFromUrl111 = () => {

  const isServer = typeof window === 'undefined';

  if (!isServer)
  {
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
  }
  
};

setLanguageFromUrl111();

const Story111Page = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const { params } = this.props;

  console.log(params['date']);

  // prettier-ignore
  return (
    <StaticPage
      title="Story"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'StoryPage',
        description: 'Blog Epicvisits',
        name: 'Blog page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
    <h1 className={css.pageTitle}>{config.locale === 'ro' ? ('Zabola Estate- povestea regală din inima pădurii') : ('Zabola Estate- The Royal Story Hidden Deep In The Heart Of The Forest') }</h1>
          {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>{config.locale === 'ro' ? ('Afla mai multe despre noi din Media:') : ('Find out more about us from the Media:') }</p>
            </div>

            <div className={css.contentMain}>

              <i>{config.locale==='ro' ? ('A fost odată ca niciodată… și încă mai este.') : ('Once upon a time there was… and still is.')}</i>

              <h2>
              {config.locale === 'ro' ? ('O poveste fascinantă se scrie la 40 de km de rămășițele ultimei erupții vulcanice (Lacul Sf. Ana și Tinovul Mohos). O poveste despre o lume captivantă, care vibrează pe bătăile inimii pădurilor din Transilvania. O poveste pe care o poți descoperi, dincolo de viața cotidiană, dincolo de rutină, dincolo de escapadele tradiționale cu care ești obișnuit.') : 
              ('A fascinating story is being written every day, 40 kilometers away from the geographical landmarks of an ancestral volcanic eruption (Lake Saint Ana and Tinovul Mohos). The tale is about a captivating world, which vibrates in the heartbeats of the wild forests of Transylvania. A unique story that you can discover beyond the mundane details of life, beyond the traditional escapes that you are already accustomed to.') }
              </h2>

              <p>
              {config.locale === 'ro' ? (`Proprietarii actuali, Contesa Katalin, împreună cu fiii ei, Alexander și Gregor Roy
Chowdhury au creionat, în inima pădurii, un tărâm magic, desprins din cărțile cu basme.
Însă povestea izvorăște din timpuri mai vechi. Istoria Domeniului Mikes de la Zabola
datează din secolul al XV-lea, când deja exista o clădire fortificată cu un bastion pe
locul castelului actual. În secolele următoare, clădirea a fost reconstruită de mai multe
ori, păstrându-i-se însă originea renascentistă. La începutul secolului XX, o nouă clădire
pentru oaspeți a fost construită, legată de castelul vechi printr-un pasaj subteran și o
punte supraetajată. Astfel, misterul este la el acasă.`) : 
              (`The initial owners, Contesse Katalin, alongside her sons, Alexander and Gregor Roy
              Chowdhury have sketched, in the heart of the forest, a magical land, depicting a fairy
              tale world. The historical background is set in the XVth century, when the Mikes
              Domains from Zabola had on the settlement a stronghold, on the same placement as
              the actual castle. In the upcoming centuries, the renaissance castle was well maintained
              and the original architecture was kept in the initial lines. At the beginning of the XXth
              century, a new guest house was built, but the mystery of the story was not torn away, in
              fact, it was added by the underground passage that connects the two buildings.`) }
               
              </p>

              <p>
              {config.locale === 'ro' ? (`Locul cu o istorie care impresionează a servit de-a lungul anilor sub diverse forme: întâi
sat de vacanță al presei comuniste, apoi preventoriu, orfelinat, școală și, ulterior,
sanatoriu. După eforturi considerabile, proprietarii actuali îl recuperează în anul 2005,
iar de 15 ani locul ce spune povestea generațiilor este în continuă conservare și
reabilitare. Proiectul de refacere a fost și încă este însă o demonstrație de respect
pentru natură, chiar și sub amprenta modernizării. Meritul proprietarilor stă în tehnicile
green de renovare, dar și în programul de protejare a naturii dezvoltat: Conservation
Transylvania (hyperlinked cu www.conservationtransylvania.com).
<br/><br/>
Vizita la Zabola nu este doar un concediu. Este mai degrabă o experiență epică, care
așteaptă să fie descoperită. Este o atracție turistică diferită, inedită, spectaculoasă. De
la interior, spre exterior și împrejurimi, vei pătrunde într-o incursiune în timp și spațiu, o
lecție de geografie pentru toate vârstele și o școală a emoțiilor autentice.`) 
: 
              (`The local history of the place has shifted its significance depending on the context and
              the regimes: a village retreat, then it was transformed into a preventorium, orphanage,
              school, and finally in a sanatorium. Every historical change left a mark that damaged the
              architectural gem, but this happened until 2005 when the actual owners took the castle
              and brought it to its initial glamour. For the last 15 years, the place is telling the stories
              of the generations that passed on the realm, and everything is kept under a very tidy
              process of continuous reconstructions and rehabilitation. The bringing back to life
              project represents more than rehabilitation actions, it is a statement of respect towards
              history and nature. The main merit of the actual owners is that they promoted a style of
              green renovation, which puts emphasis on modernization, natural surrounding
              conservations, and keeping the historical landmarks alive through Conservation
              Transylvania (hyperlinked cu www.conservationtransylvania.com).
              <br/><br/>
              Visiting Zabola is more than a simple vacation, it is indeed an epic experience, which is
              awaiting to be discovered. A tourist attraction defined by unicity, spectacularity and its
              unexpected diversity. From the insides to the exteriors to the natural surroundings every
              step is an immersion in time and space, a history lesson for all ages, and an authentic
              school of real emotions.`) }
               
              </p>


              <h3 className={css.subtitle}>{config.locale === 'ro' ? ('Cum funcționează:') : ('How it works:') }</h3>

              


              
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

//export default StoryPage;

export class BlogPageComponent extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const {
      intl,
      params,
    } = this.props;


    console.log(params['date']);

    var title = config.locale === 'ro' ? 
    '<a href="/ro/blog/20201101/zabola-estate">Zabola Estate- povestea regală din inima pădurii <br/></a>' : 
    '<a href="/blog/20201101/zabola-estate">Zabola Estate- The Royal Story Hidden Deep In The Heart Of The Forest <br/></a>';
    var teaser = config.locale === 'ro' ? 'O poveste fascinantă se scrie la 40 de km de rămășițele ultimei erupții vulcanice (Lacul Sf. Ana și Tinovul Mohos). O poveste despre o lume captivantă, care vibrează pe bătăile inimii pădurilor din Transilvania. O poveste pe care o poți descoperi, dincolo de viața cotidiană, dincolo de rutină, dincolo de escapadele tradiționale cu care ești obișnuit.'
      : 'A fascinating story is being written every day, 40 kilometers away from the geographical landmarks of an ancestral volcanic eruption (Lake Saint Ana and Tinovul Mohos). The tale is about a captivating world, which vibrates in the heartbeats of the wild forests of Transylvania. A unique story that you can discover beyond the mundane details of life, beyond the traditional escapes that you are already accustomed to.';

    var more = config.locale === 'ro' ? `<a href="/ro/blog/20201101/zabola-estate">Citeste mai mult...</a>` 
    : `<a href="/blog/20201101/zabola-estate">More...</a>`;


    return (
      <StaticPage
        title="Blog"
        schema={{
          '@context': 'http://schema.org',
          '@type': 'BlogPage',
          description: 'Blog Epicvisits',
          name: 'Blog page',
        }}
      >
        <LayoutSingleColumn>
          <LayoutWrapperTopbar>
            <TopbarContainer />
          </LayoutWrapperTopbar>
  
          <LayoutWrapperMain className={css.staticPageWrapper}>

            <p className={css.pageTitle}>(01-11-2020)</p>
            <h1 className={css.pageTitle} dangerouslySetInnerHTML={{__html: title}}></h1>

            
  
            {/* <div className={css.contentWrapper}> */}
              {/* <div className={css.contentSide}>
                <p>{config.locale === 'ro' ? ('Afla mai multe despre noi din Media:') : ('Find out more about us from the Media:') }</p>
              </div> */}
  
              <div >
  
                <i>{config.locale==='ro' ? ('A fost odată ca niciodată… și încă mai este.') : ('Once upon a time there was… and still is.')}</i>
  
                <p dangerouslySetInnerHTML={{__html: teaser}}></p>

                <img className={css.coverImage} src={image1} alt="Zabola Estate 1" />

                <img className={css.coverImage} src={image2} alt="Zabola Estate 2" />
  
                <p dangerouslySetInnerHTML={{__html: more}}>
                
                </p>
  
  
                
  
  
                
              </div>
            {/* </div> */}
          </LayoutWrapperMain>
  
          <LayoutWrapperFooter>
            <Footer />
          </LayoutWrapperFooter>
        </LayoutSingleColumn>
      </StaticPage>
    );
    }
}
  
const BlogPage = compose(
  //withRouter,
  connect(
    //mapStateToProps,
    //mapDispatchToProps
  ),
  //injectIntl
)(BlogPageComponent);

export default BlogPage;