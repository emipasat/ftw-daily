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

import css from './StoryPage.css';
import image1 from './images/zabola-estate-1.jpg';
import image2 from './images/zabola-estate-2.jpg';
import image3 from './images/zabola-estate-3.jpg';
import image4 from './images/zabola-estate-4.jpg';
import image5 from './images/zabola-estate-5.jpg';
import image6 from './images/zabola-estate-6.jpg';
import image7 from './images/zabola-estate-7.jpg';

var languageFromUrl = 'en';

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
      languageFromUrl = 'ro';
    }
    else 
    {
      config.locale = 'en';
      languageFromUrl = 'en';
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

export class StoryPageComponent extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const {
      intl,
      params,
    } = this.props;


    console.log(params['date']);

    //var thisIsMyCopy = "<b>Test xxx<br/>asfasdf </b>";

    const paragraph2Ro = `Locul cu o istorie care impresionează a servit de-a lungul anilor sub diverse forme: întâi
      sat de vacanță al presei comuniste, apoi preventoriu, orfelinat, școală și, ulterior,
      sanatoriu. După eforturi considerabile, proprietarii actuali îl recuperează în anul 2005,
      iar de 15 ani locul ce spune povestea generațiilor este în continuă conservare și
      reabilitare. Proiectul de refacere a fost și încă este însă o demonstrație de respect
      pentru natură, chiar și sub amprenta modernizării. Meritul proprietarilor stă în tehnicile
      green de renovare, dar și în programul de protejare a naturii dezvoltat: 
      <a href="https://www.conservationtransylvania.com" target="_blank">Conservation Transylvania</a>.
      <br/><br/>
      Vizita la Zabola nu este doar un concediu. Este mai degrabă o experiență epică, care
      așteaptă să fie descoperită. Este o atracție turistică diferită, inedită, spectaculoasă. De
      la interior, spre exterior și împrejurimi, vei pătrunde într-o incursiune în timp și spațiu, o
      lecție de geografie pentru toate vârstele și o școală a emoțiilor autentice.`;

    const paragraph2En =  
                  `The local history of the place has shifted its significance depending on the context and
                  the regimes: a village retreat, then it was transformed into a preventorium, orphanage,
                  school, and finally in a sanatorium. Every historical change left a mark that damaged the
                  architectural gem, but this happened until 2005 when the actual owners took the castle
                  and brought it to its initial glamour. For the last 15 years, the place is telling the stories
                  of the generations that passed on the realm, and everything is kept under a very tidy
                  process of continuous reconstructions and rehabilitation. The bringing back to life
                  project represents more than rehabilitation actions, it is a statement of respect towards
                  history and nature. The main merit of the actual owners is that they promoted a style of
                  green renovation, which puts emphasis on modernization, natural surrounding
                  conservations, and keeping the historical landmarks alive through 
                  <a href="https://www.conservationtransylvania.com">Conservation Transylvania</a>.
                  <br/><br/>
                  Visiting Zabola is more than a simple vacation, it is indeed an epic experience, which is
                  awaiting to be discovered. A tourist attraction defined by unicity, spectacularity and its
                  unexpected diversity. From the insides to the exteriors to the natural surroundings every
                  step is an immersion in time and space, a history lesson for all ages, and an authentic
                  school of real emotions.`;



    var paragraph3Ro = `Încă de la primul pas în Hotel vei intra într-o lume aparte, unde fiecare cameră este un
        alt capitol al poveștii, cu o tematică aparte. Momentele tale de relaxare pot continua în zona de masaj, în fața șemineului sau în cada poziționată în centrul camerei tale, unde
        te poți bucura de o baie care să te îmbrace în lapte și miere. În clipele în care simți
        furnicăturile adrenalinei, vei fi invitat să observi urșii și alte animale sălbatice, chiar din
        confortul șederii.
        
        <br/><br/>
        
        Zona din afara hotelului, în imediata sa apropiere, îți va da senzația că ești un prinț sau
        o prințesă. Caleașca cu cai te așteaptă pentru o călătorie în jurul proprietății cu o istorie
        uimitoare. Asta, bineînțeles, după ce ai servit ceaiul pe terasă, la înălțime.
        Discrepanța dintre interiorul luxuriant și exteriorul sălbatic te teleportează parcă într-o
        altă poveste, fără însă să faci vreun pas către realitatea cotidiană. Vei putea fi un
        explorator al naturii și îi vei putea asculta secretele șoptite chiar de freamătul frunzelor
        pictate în nuanțele toamnei. Poți alege între o drumeție sau o călătorie ecvestră. Seara
        se poate încheia cu un grătar, cu o cină romantică la lumina lumânărilor sau cu o baie
        fierbinte în sauna dintre copaci.`
    var paragraph3En =  `When you enter the hotel a unique world will be uncovered, where each room tells a
                                chapter of the Zabola history book, with authentic and enchanting thematics. YOur
                                moments of relaxation will continue in the massage area, in front of the cozy fireplace,
                                or maybe right in the bathtub comfortably positioned in the middle of your room. A
                                tantalizing full experience meant to make you feel relaxed and unique. In the moments
                                when you will feel the adrenaline tingles rushing, you can enjoy epic activities like
                                wildlife spotting, or riding in the wild.
                                
                                <br/><br/>
                                
                                The surroundings will make you feel a royalty high, a carriage pulled by horses will
                                await you for a tour of the property. The difference between the luxuriant interior and the
                                wild surroundings make you transcend from the mundane in fairytale land. You will
                                become an explorer of the quiet nature and you will be able to listen to the secrets told
                                even by the murmur of leaves, painted in the autumn colors. You can choose between a
                                hike or an equestrian adventure. The evenings can end with a barbeque or with a
                                romantic dinner and candlelight, or even a hot bathtub in the treehouse sauna.`;


    var paragraph4Ro = `Iar vizita ta epică nu se încheie aici!
    <br/><br/>
    Împrejurimile sunt o mină de aur pentru exploratori: de la apele minerale naturale
    carbogazoase de la Peteni și Covasna, la bisericile fortificate cu tavan pictat în secolele
    XII- XV, expozițiile din zonă (expoziția de costume populare prezentate pe cca. 300 de
    păpuși din Târgu Secuiesc) sau muzee în aer liber, întreaga zonă este o comoară
    pentru suflet.
    <br/><br/>
    Complexul relevă o istorie menținută vie de proprietarii care au transformat Zabola
    Estate în mai mult decât o simplă atracție turistică, ci într-un jurnal de experiențe de
    neuitat.
    <br/><br/>
    Deși Zabola dăinuie sub sloganul &quot;Transylvania&#39;s best kept secret&quot;, ne-am decis să
    împărtășim cu tine un mic secret. Prințul Odescalchi (1912) a fost un vizitator recurent
    al locului care l-a impresionat astfel încât, în memoriile sale, apare o descriere
    complexă a zonei și a așezării care l-au găzduit atât de frumos: „(...) erai întrebat dacă
    ți-ar plăcea să te alături călăritului de dimineață și așa mai departe. Îndată ce te-ai
    schimbat în smoching mergeai printr-un tunel în sala mare de mese unde erai introdus
    celorlalți invitați. Casa, și modul în care era condusă, era total diferit de celelalte, în jur de o duzină de case pe care știam și era o plăcere extraordinară să stai acolo – aveai
    impresia că ești într-un hotel de lux din America sau din Europa de Vest…”.
    <br/><br/>
    Pentru că vizita la Zabola este întotdeauna o vacanță personalizată, i-am întrebat pe
    proprietari cum ar vedea ei o zi perfectă: „Am începe dis de dimineață cu o lecție de
    călărit sau alergat, după care un duș lung sub dușul pentru 2 persoane din camere.
    Dimineața ar continua cu un mic dejun în grădină, iar apoi plimbări în parc și în pădure.
    După-amiază am opta pentru un program mai palpitant: observatorul de urși, după care
    o cină în pavilionul din pădure, iar cireasa de pe tort: o baie Cleopatra înainte de
    culcare”.`
    var paragraph4En =  
                    `Your journey doesn't end here!
                    <br/><br/>
                    The natural landscapes are a gold mine for the explorers: from the crystal clear mineral
                    waters from Peteni and Covasna, to the fortified churches with painted ceilings, dating
                    from the XIIth century, plus you have a wide variety of exhibitions, open-air museums.
                    The wholesome area is a true soul treasure.
                    Zabola Estate is a true keeper of tradition, history, that will make every moment more
                    than a simple tourist attraction, it will become a journal for unforgettable moments.
                    <br/><br/>
                    Although Zabola’s motto is &quot;Transylvania&#39;s best-kept secret&#39;&#39;, we decided to share this
                    little secret with you. The Prince Odescalchi (1912) was a recurrent visitor of this castle
                    and he was so impressed that, in his memoirs, he noted a very complex description of
                    the area and the feeling of being a guest here: ‘you were asked if you would like to join
                    the morning ride and so on. From the moment you put your smoking suit on you were
                    guided through an underground tunnel and you were politely introduced to the other
                    guests. The house and the way the castle was managed was indeed warming and
                    enjoyable more than in a dozen of houses I would have known - you were living under
                    the impression that you were at a luxurious hotel in American or Western Europe’
                    <br/><br/>
                    Because the visit at Zabole is always a personalized vacation, we asked the owners
                    how they would see a perfect day: ‘It would certainly start in the early morning with a
                    riding lesson or maybe jogging, after that a long relaxing shower. In the late morning,
                    we would continue with breakfast in the garden, a stroll in the park and forest. In the
                    afternoon we would opt for a more thrilling experience: the bear hide observatory,
                    ending the day with a supper in the discrete gazebo between secular trees, and the
                    icing on the cake would be a Cleopatra bath, right before going to bed’`;


    var paragraph5Ro = `O astfel de zi trebuie să existe în albumul de amintiri al fiecărei persoane, tocmai de
    aceea am conturat pentru tine pachete de vacanță tematice, care să te poarte, alături
    de cei dragi, în incredibila lume oferită de Zabola Estate.
    <br/><br/>
    Poți alege dintre pachetul 
    <a href="https://www.epicvisits.com/ro/l/zabala-history-and-wildlife-stories-3-nights/5f465078-ac91-4826-8395-b9e02150c4e0">"Vacanță Unică la Zabola Estate (3 Nopți)"</a> (pentru trei zile și trei nopți în care să explorezi, alături
    de cineva drag, atât istoria locului, cât și viața sălbatică ce se așterne la poalele lui),
    pachetul 
    <a href="https://www.epicvisits.com/ro/l/bixad-amazing-holiday-in-a-hunting-lodge-3-nights/5f4fa7e9-6dc7-4766-8545-85df7cbd610e">"Bixad- Sejur Minunat la o Cabană de Vânătoare (3 Nopți)"</a>
    (unde accentul va cădea timp de 3 zile pe frumusețea naturii) sau pachetul 
    <a href="https://www.epicvisits.com/ro/l/zabala-royal-equestrian-adventure-3-nights/5f464dd9-a540-4430-8821-f3a0c231b8d9">"Zăbala- Aventură Nobiliară Ecvestră (3 Nopți)"</a>
    (o aventură pentru pasionații de călărie, timp de 3 zile).
    Alegerea ideală pentru o escapadă romantică o reprezintă pachetul 
    <a href="https://www.epicvisits.com/ro/l/transylvania-the-best-romantic-retreat/5fa2b863-24b6-4beb-a04c-6e74b94d66f4">"Transilvania- Cea Mai Bună Escapadă Romantică (2 Nopți)"</a> iar dacă vreți să călătoriți alături de familie sau prieteni, puteți
    opta pentru 
    <a href="https://www.epicvisits.com/ro/l/zabala-the-old-saddle-house-experience-4-8-pers/5f9fbd8a-6cb5-4df0-bda4-9b3e86e1f9fd">"Zabala- Experiența The Old Saddle House!"</a>, ideală pentru 4-8 persoane.
    
    <br/><br/>
    Ești gata pentru o expediție în România, acolo unde magia se desprinde de realitate?
    
    <br/><br/>
    
    
    Te așteptăm să fii scriitorul unui nou capitol și te provocăm să împărtășești cu noi
    experiențele.
    <br/><br/>
    <a href="https://youtu.be/KxQFxRWwg70"><i>Iar povestea va continua</i></a>` 

    var paragraph5En = 
      `A day like this should exist in everyone’s memories, and this is exactly why we crafted
      especially for your thematic vacation pancakes, which will take you and your beloved
      one deep into the fairytale experience offered by Zabola Estate.
      You can choose between the packages: <a href="https://www.epicvisits.com/l/zabala-history-and-wildlife-stories-3-nights/5f465078-ac91-4826-8395-b9e02150c4e0">"History and Wildlife Stories"</a> (explore the local history and enjoy the wildlife and beauty
      of the surroundings),
      <a href="https://www.epicvisits.com/l/bixad-a-dive-into-the-virgin-forest-3-nights/5f4fa7e9-6dc7-4766-8545-85df7cbd610e">"Bixad- Amazing Holiday in a Hunting Lodge (3 Nights)"</a>
       (get closer to the royal nature around you for three days)
      <a href="https://www.epicvisits.com/l/zabala-royal-equestrian-adventure-3-days/5f464dd9-a540-4430-8821-f3a0c231b8d9">"Royal Equestrian Adventure"</a>  (an adventure for 3 days ).
      
      If you’re looking for a romantic escape, the ideal choice would be <a href="https://www.epicvisits.com/l/transylvania-the-best-romantic-retreat/5fa2b863-24b6-4beb-a04c-6e74b94d66f4">"Transylvania- The Best Romantic Retreat"</a> and if you’re travelling with your
      family/friends, take a look at 
      <a href="https://www.epicvisits.com/l/zabala-the-old-saddle-house-experience-4-8-pers/5f9fbd8a-6cb5-4df0-bda4-9b3e86e1f9fd">"Zabala- The Old Saddle House Experience"</a> which can
      accomodate up to 8 people.

      <br/><br/>
      
      Are you ready for the autumn expedition, ready to discover the Romanian nature where
      the reality of the mundane is replaced by a fairytale experience?
      
      <br/><br/>
      
      We await you to become the writer of a new chapter of the Zabola Estate journey and
      we encourage you to share your experience with us.
      <br/><br/>
      <a href="https://youtu.be/KxQFxRWwg70"><i>And the story will go on...</i><a/>`;

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
    
              {/* <div className={css.contentWrapper}> */}
                {/* <div className={css.contentSide}>
                  <p>{config.locale === 'ro' ? ('Afla mai multe despre noi din Media:') : ('Find out more about us from the Media:') }</p>
                </div> */}
  
              <div >
  
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

                
                {/* <div className="content" dangerouslySetInnerHTML={{__html: thisIsMyCopy}}></div> */}

                <img className={css.coverImage} src={image1} alt="Zabola Estate 1" />
                <img className={css.coverImage} src={image2} alt="Zabola Estate 2" />

                

                {languageFromUrl == 'ro' ? 
                (<div><b>&nbsp;</b><p dangerouslySetInnerHTML={{__html: paragraph2Ro}}></p></div>)
                : 
                (<div><b>&nbsp;</b><p dangerouslySetInnerHTML={{__html: paragraph2En}}></p></div>)
                }

                <img className={css.coverImage} src={image3} alt="Zabola Estate 3" />
                <img className={css.coverImage} src={image4} alt="Zabola Estate 4" />
                {languageFromUrl == 'ro' ? 
                (<div><b>&nbsp;</b><p dangerouslySetInnerHTML={{__html: paragraph3Ro}}></p></div>)
                : 
                (<div><b>&nbsp;</b><p dangerouslySetInnerHTML={{__html: paragraph3En}}></p></div>)
                }
  
  
                <img className={css.coverImage} src={image5} alt="Zabola Estate 5" />
                <img className={css.coverImage} src={image6} alt="Zabola Estate 6" />
                {languageFromUrl == 'ro' ? 
                (<div><b>&nbsp;</b><p dangerouslySetInnerHTML={{__html: paragraph4Ro}}></p></div>)
                : 
                (<div><b>&nbsp;</b><p dangerouslySetInnerHTML={{__html: paragraph4En}}></p></div>)
                }
                
  
                <img className={css.coverImage} src={image7} alt="Zabola Estate 7" />
                {languageFromUrl == 'ro' ? 
                (<div><b>&nbsp;</b><p dangerouslySetInnerHTML={{__html: paragraph5Ro}}></p></div>)
                : 
                (<div><b>&nbsp;</b><p dangerouslySetInnerHTML={{__html: paragraph5En}}></p></div>)
                }
  
                
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
  
const StoryPage = compose(
  //withRouter,
  connect(
    //mapStateToProps,
    //mapDispatchToProps
  ),
  //injectIntl
)(StoryPageComponent);

export default StoryPage;