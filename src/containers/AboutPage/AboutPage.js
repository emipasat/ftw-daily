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
    <h1 className={css.pageTitle}>{config.locale === 'ro' ? ('Despre EpicVisits') : ('About Epicvisits') }</h1>
          {/* <img className={css.coverImage} src={image} alt="My first ice cream." /> */}

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>{config.locale === 'ro' ? ('Afla mai multe despre noi din Media:') : ('Find out more about us from the Media:') }</p>

<a target="_blank" href="https://www.protv.ro/utile/se-lanseaza-epicvisits-com-prima-platforma-online-pentru-cazari-tematice.html">PRO TV</a><br/>
<a target="_blank" href="https://www.businessmagazin.ro/actualitate/airbnb-de-romania-cum-au-reusit-trei-tineri-romani-sa-lanseze-pe-19254224">Business Magazin</a><br/>
<a target="_blank" href="https://adevarulfinanciar.ro/business/start-up/romanii-pot-recomanda-locuri-de-vacanta-tematice-pe-noua-platforma-epicvisits-com/">Adevarul Financiar</a><br/>

<a target="_blank" href="https://www.zf.ro/zf-it-generation/zf-it-generation-raluca-jianu-cofondator-epicvisits-com-platforma-19526888">ZF Raluca Jianu</a><br/>


<a target="_blank" href="https://www.zf.ro/eveniment/business-magazin-mihai-barsan-fostul-sef-marketing-ursus-s-asociat-19284666">ZF Mihai Barsan</a><br/>

<a target="_blank" href="https://www.romania-insider.com/thematic-accommodation-platform-romania">Romania Insider</a><br/>

<a target="_blank" href="https://www.economica.net/trei-antreprenori-romani-lanseaza-epic-visits-platforma-de-rezervari-dedicata-locurilor-de-cazare-memorabile_185095.html">Economica Net</a><br/>

<a target="_blank" href="https://www.revistabiz.ro/trei-antreprenori-romani-lanseaza-prima-platforma-online-pentru-cazari-tematice/">Revista Biz</a><br/>

<a target="_blank" href="https://www.wall-street.ro/articol/Turism/255792/inovatie-in-turism-aproximativ-1-000-de-spatii-de-vizitat-prin-intermediul-unei-platforme-online.html#gref">Wall-Street.ro</a><br/>

<a target="_blank" href="https://www.startupcafe.ro/idei-antreprenori/antreproenori-platforma-rezervare-epicvisits.htm">Startup Cafe</a><br/>

<a target="_blank" href="https://start-up.ro/epicvisits-startup-ul-de-experiente-turistice-creat-de-fondatorii-ferestroika/">Start-up.ro</a><br/>

<a target="_blank" href="https://www.profit.ro/povesti-cu-profit/turism/trei-antreprenori-romani-lanseaza-epicvisits-com-prima-platforma-online-pentru-cazari-tematice-19375039">Profit.ro</a><br/>

<a target="_blank" href="https://www.newmoney.ro/trei-antreprenori-lanseaza-epicvisits-com-prima-platforma-online-pentru-cazari-tematice/">New Money.ro</a><br/>

<a target="_blank" href="https://www.capital.ro/vesti-excelente-pentru-iubitorii-de-vacante-se-lanseaza-prima-platforma-online-pentru-cazari-tematice.html">Capital.ro</a><br/>
            </div>

            <div className={css.contentMain}>
              <h2>
              {config.locale === 'ro' ? ('Bine ai venit în comunitatea Epic Visits, prima platformă de rezervări pentru pachete tematice de cazări și experiențe.') : 
              ('Welcome to Epic Visits, the online booking platform that connects owners of thematic accommodations and experiences with travelers seeking meaningful, life enriching experiences.') }
              </h2>

              <p>
              {config.locale === 'ro' ? ('Povestea noastră a început în anul 2019, când am lansat Ferestroika, primul muzeu privat al vieții cotidiene în comunism din București. Într-un apartament tematic am reconstituit viața reală a unei familii, din perioada anilor ‘80, la baza întregii experiențe imersive stând conceptul Atinge- Gustă - Descoperă. Am întâmpinat multe provocări, dar am și câștigat experiență și curajul de a vedea că este nevoie de o nouă abordare când vine vorba de turism, care să țină cont de nevoile și preferințele călătorilor. Ferm convinși că această cale are potențialul de a schimba felul în care percepem călătoriile, am conturat Epic Visits.') : 
              (`Our story started when our team launched Ferestroika in 2019, a living museum of communism and the 
              first initiative of this kind in Bucharest, Romania.  
              In a thematic apartment we recreated the real story of a family from the 80’s, 
              promoting a unique Touch-Taste-Learn concept. We faced numerous challenges but also gained 
              valuable insights on our road to success and soon realized that tourism 
              as we know it needs a disruption. True to our beliefs, we decided to make it happen 
              ourselves rather than waiting for someone else to do it, and that’s how Epic Visits came to life.`) }
               
              </p>

              <h3 className={css.subtitle}>{config.locale === 'ro' ? ('Cum funcționează:') : ('How it works:') }</h3>

              <p>
              
              

                {config.locale === 'en' && 
                  <ol>
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
                }

                {config.locale === 'ro' && 
                  <ol>
                    <li>Partenerii noștri nu vând experiențe de cazare și activități în mod separat, ci doar în cadrul pachetelor tematice.</li>
                      <li> Toate listările sunt structurate în tematici de vacanță incitante, de la escapade romantice până la aventură și adrenalină, toate gândite să ofere și să asigure vacanțe și experiențe de neuitat.</li>
                      <li> Disponibilitatea pachetelor se bazează pe un sistem de sincronizare cu alte platforme de booking, tocmai pentru a evita suprapunerile nedorite. Data de rezervare nu poate fi plasată cu mai mult de 85 de zile înainte de data la care începe călătoria. </li>
                      <li> Un pas important de securitate se bazează pe validarea și protejarea datelor dumneavoastră, astfel de la plasarea comenzii veți intra în contact direct cu proprietarul. Timpul maxim de așteptare pentru validare este de 3 zile, în caz contrar tranzacția se anulează iar suma de bani se returnează în contul dumneavoastră.</li>
                      <li> Platforma noastră oferă o comunicare directă cu gazdele, astfel veți putea să le adresați întrebările și nelămuririle direct.</li>
                      <li> După ce s-a încheiat o tranzacție cu succes, Stripe va procesa plata în mod automat virând suma aferentă gazdei din momentul în care experiența de cazare s-a încheiat.</li>
                      <li> Suma achitată va fi returnată în cazul anulării gratuite, conform politicii proprietății, specificată la regulile pachetului de călătorie.</li> 
                  </ol>
                }

                {/* <li> Our partners don’t sell accommodation on experiences separately, only complete packages.</li>
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
                </li> */}
              

              </p>

              <h3 id="contact" className={css.subtitle}>
              {config.locale === 'ro' ? ('Beneficii') : ('Benefits') }
              </h3>
              <p>


              
              <b>{config.locale === 'ro' ? ('Pentru proprietari') : ('For property owners')}</b>

{config.locale === 'ro' && 
              <ol>
                <li>Mai mult timp – persoană de contact și suport dedicată, mai puțină birocrație, tranzacții rapide și sigure bazate pe integrarea cu Stripe, sincronizarea cu alte platforme de booking.</li>
                <li>Mai multă vizibilitate – conectați-vă cu o audiență premium, beneficiați de servicii de promovare adiționale (PR, Media, Photo-Video și multe altele)</li>
                <li>Valoare adăugată – consultanță în marketing și vânzări</li>
              </ol>
}
{config.locale === 'en' && 
              <ol>
                <li>More time – dedicated contact person, minimum paperwork, safe & fast transactions with Stripe integration, synchronization with other booking platforms</li>
                <li>More visibility – connect with a premium audience, differentiate from the competition, access additional services (PR, Media, Photo-Video and many more)</li>
                <li>More added value – marketing and pricing consultancy, ability to provide extra services to your customers beside accommodation </li>
              </ol>
}



<b>{config.locale === 'ro' ? ('Pentru călători') : ('For travelers')}</b>
{config.locale === 'en' && 
<ol>
  <li>Get inspired – plan your next holiday based on your interests and what you would like to do</li>
  <li>Curated experiences – together with our partners we only choose the best, so that we save you time</li>
  <li>What you see is what you get – our staff visits each and single one of our listings in person before making them available for booking</li>
  <li>Book with confidence – 24/7 support, world-leading payment infrastructure with Stripe, safe & secure transactions with free cancellation options</li>
</ol>
}
{config.locale === 'ro' && 
<ol>
  <li>Mai multă inspirație – planifică-ți următoarea vacanță găsind pachetele ideale de călătorie</li>
  <li>Experiențe curatoriate – salvează timp și alege ce ți se potrivește</li>
  <li>Locații vizitate de noi –  staff-ul nostru a vizitat fiecare locație listată cel puțin o singură dată, pentru a se asigura că sunt respectate toate standardele de calitate</li>
  <li>Poți rezerva cu încredere – oferim suport 24/7, ne bazăm pe un sistem de plată online gestionat de Stripe, sigur și și rapid, fără costuri adiționale la anulare.</li>
</ol>
}



              </p>
              <p>
              {config.locale === 'ro' ? ('Ne poți contacta oricând la adresa de email ') : ('Please feel free to contact us anytime at ')}
              <a href="mailto:team@epicvisits.com">team@epicvisits.com</a> 
              {config.locale === 'ro' ? ('dacă vrei să afli mai multe informații despre proiectul nostru. Explorează. Evoluează. Epic Visits!') : ('if you want to learn more about our project. Let’s make travel epic!')}
              


 {/* at{' '}
                <ExternalLink href="http://sharetribe.com">Sharetribe</ExternalLink>. Would you like
                to create your own marketplace platform a bit like Saunatime? Or perhaps a mobile
                app? With Sharetribe it's really easy. If you have a marketplace idea in mind, do
                get in touch! */}
              </p>
              <p>
                {config.locale === 'ro' ? ('Intrați și pe pagina noastră de ') : ('You can also checkout our ')}
                
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> 
                {config.locale === 'ro' ? ('. ') : (' page.')}
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
