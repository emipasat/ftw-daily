import React, { Component, useState, useEffect } from 'react';
//import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import helsinkiImage from './images/location_helsinki.jpg';
import rovaniemiImage from './images/location_rovaniemi.jpg';
import rukaImage from './images/location_ruka.jpg';

import natureWondersImage from './images/nature_wonders.jpg';
import energyAdrenalineImage from './images/energy_adrenaline.jpg';
//import funAndLearningForKidsImage from './images/fun_and_learning_for_kids.jpg';
import wildlifeImage from './images/wildlife.jpg';
import urbanDiscoveriesImage from './images/urban_discoveries.jpg';
import tastyTreasuresImage from './images/tasty_treasures.jpg';
import romanticEscapesImage from './images/romantic_escapes.jpg';
import simplyChillImage from './images/simply_chill.jpg';
import livingTraditionsImage from './images/living_traditions.jpg';
import funAndLearningForKidsImage from './images/fun_and_learning_for_kids.jpg';
import homeAloneImage from './images/home_alone.jpg';

import CarouselSlide from './CarouselSlide';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slide from '@material-ui/core/Slide';
import { Card } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import config from '../../config';


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

console.log('vvvvvvvvvvvvvvvvvv')
console.log(config.locale)
console.log('vvvvvvvvvvvvvvvvvv')


class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);



var prefix = '';
if (config.locale === 'ro')
{
  prefix = '/ro'
}

console.log('ssssssssssssssssssssssss')
console.log(prefix);
console.log('ssssssssssssssssssssssss')

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};


const natureWondersLink = (name, image) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <a href={prefix + "/th/nature_wonders"} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </a>
  );
};

const artsAndCraftsLink = (name, image) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <a href={prefix + "/th/arts_and_craft"} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </a>
  );
};

const energyAndAdrenalineLink = (name, image) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <a href={prefix + "/th/energy_and_adrenaline"} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </a>
  );
};

const wildlifeLink = (name, image) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <a href={prefix + "/th/wildlife"} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </a>
  );
};

const funAndLearningForKidsLink = (name, image) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <a href={prefix + "/th/fun_and_learning_for_kids"} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </a>
  );
};

const tastyTreasuresLink = (name, image) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <a href={prefix + "/th/tasty_treasures"} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </a>
  );
};

const romanticEscapesLink = (name, image) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <a href={prefix + "/th/romantic_escapes"} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </a>
  );
};

const urbanDiscoveriesLink = (name, image) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <a href={prefix + "/th/urban_discoveries"} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </a>
  );
};

const simplyChillLink = (name, image) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <a href={prefix + "/th/simply_chill"} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </a>
  );
};

const livingTraditionsLink = (name, image) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <a href={prefix + "/th/living_traditions"} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </a>
  );
};

const homeAloneLink = (name, image) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <a href={prefix + "/th/entire_places"} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </a>
  );
};


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));




const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);


  // function Arrow(props) {
  //   const { direction, clickFunction } = props;
  //   const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;
  
  //   return <div onClick={clickFunction}>{icon}</div>;
  // }

  // const [index, setIndex] = useState(0);
  // const content = SLIDE_INFO[index];
  // const numSlides = SLIDE_INFO.length;

  // const [slideIn, setSlideIn] = useState(true);
  // const [slideDirection, setSlideDirection] = useState('down');

  // const onArrowClick = (direction) => {
  //     const increment = direction === 'left' ? -1 : 1;
  //     const newIndex = (index + increment + numSlides) % numSlides;

  //     const oppDirection = direction === 'left' ? 'right' : 'left';
  //     setSlideDirection(direction);
  //     setSlideIn(false);

  //     setTimeout(() => {
  //         setIndex(newIndex);
  //         setSlideDirection(oppDirection);
  //         setSlideIn(true);
  //     }, 500);
  // };

  // useEffect(() => {
  //     const handleKeyDown = (e) => {
  //         if (e.keyCode === 39) {
  //             onArrowClick('right');
  //         }
  //         if (e.keyCode === 37) {
  //             onArrowClick('left');
  //         }
  //     };

  //     window.addEventListener('keydown', handleKeyDown);

  //     return () => {
  //         window.removeEventListener('keydown', handleKeyDown);
  //     };
  // });


  //const content = SLIDE_INFO[3];

  const classes1 = useStyles();

  return (


    <div className={classes1.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={6} sm={3}>
          <Card >
          {natureWondersLink(
           config.locale === 'en' ? 'Nature Wonders': 'Minuni ale Naturii',
           natureWondersImage,          //'?address=Helsinki%2C%20Finland&bounds=60.2978389%2C25.254484899999966%2C59.9224887%2C24.782875800000056&origin=60.16985569999999%2C24.93837910000002'
        )}
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Card >
         {energyAndAdrenalineLink(
           config.locale === 'en' ? 'Energy and Adrenaline' : 'Energie și Adrenalină',
           energyAdrenalineImage,
           //'?address=Rovaniemi%2C%20Finland&bounds=67.18452510000002%2C27.32667850000007%2C66.1553745%2C24.736871199999996&origin=66.50394779999999%2C25.729390599999988'
         )}
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Card >
        {wildlifeLink(
           config.locale === 'en' ? 'Wildlife' : 'Natură Neîmblânzită',
           wildlifeImage,
           //'?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
         )}
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Card >
        {tastyTreasuresLink(
           config.locale === 'en' ? 'Tasty Treasures' : 'Comori Gustoase',
           tastyTreasuresImage,
           //'?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
         )}
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Card >
        {urbanDiscoveriesLink(
           config.locale === 'en' ? 'Urban Discoveries' : 'Descoperiri Urbane',
           urbanDiscoveriesImage,
           //'?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
         )}
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Card >
        {romanticEscapesLink(
           config.locale === 'en' ? 'Romantic Escapes':'Escapade Romantice',
           romanticEscapesImage,
           //'?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
         )}
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Card >
        {simplyChillLink(
           config.locale === 'en' ? 'Simply Chill':'Marea Relaxare',
           simplyChillImage,
           //'?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
         )}
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card >
          {livingTraditionsLink(
            config.locale === 'en' ? 'Living Traditions':'Tradiții Nemuritoare',
            livingTraditionsImage,
            //'?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
            )}
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card >
          {funAndLearningForKidsLink(
            config.locale === 'en' ? 'Fun and learning for kids':'Distracție și Învățare pentru Copii',
            funAndLearningForKidsImage,
            //'?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
          )}
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card >
          {homeAloneLink(
            config.locale === 'en' ? 'Entire Places':'Case de Închiriat Integral',
            homeAloneImage,
            //'?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
          )}
          </Card>
        </Grid>
      </Grid>
    </div>


//  <div className="slider">
//             <Arrow
//                 direction='left'
//                 clickFunction={() => onArrowClick('left')}
//             />
//             <Slide in={slideIn} direction={slideDirection}>
//                 <div>
//                     <CarouselSlide content={content} />
//                 </div>
//             </Slide>
//             <Arrow
//                 direction='right'
//                 clickFunction={() => onArrowClick('right')}
//             />


            
// </div> 
        
    
        



//      <div className={classes}>
//       <div className={css.title}>
//         <FormattedMessage id="SectionLocations.title" />
//       </div>
//       <div className={css.locations}>
        

// {natureWondersLink(
//           'Nature Wonders',
//           natureWondersImage,
//           //'?address=Helsinki%2C%20Finland&bounds=60.2978389%2C25.254484899999966%2C59.9224887%2C24.782875800000056&origin=60.16985569999999%2C24.93837910000002'
//         )}

// {energyAndAdrenalineLink(
//           'Energy and Adrenaline',
//           energyAdrenalineImage,
//           //'?address=Rovaniemi%2C%20Finland&bounds=67.18452510000002%2C27.32667850000007%2C66.1553745%2C24.736871199999996&origin=66.50394779999999%2C25.729390599999988'
//         )}

// {wildlifeLink(
//           'Wildlife',
//           wildlifeImage,
//           //'?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
//         )}

// {tastyTreasuresLink(
//           'Wildlife',
//           wildlifeImage,
//           //'?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
//         )}

// {urbanDiscoveriesLink(
//           'Wildlife',
//           wildlifeImage,
//           //'?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
//         )}



// {romanticEscapesLink(
//           'Wildlife',
//           wildlifeImage,
//           //'?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
//         )}

      

      
//       {simplyChillLink(
//           'Wildlife',
//           wildlifeImage,
//           //'?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
//         )}
    
        
        
//       </div>
//     </div> 

    
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
