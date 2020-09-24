import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';

//import {gaEvent, initGA} from '../../components/Tracking';
import ReactGA from 'react-ga';

import css from './SectionHero.css';

const trackingId = "UA-174276239-1"; 
ReactGA.initialize(trackingId);

const SectionHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="SectionHero.subTitle" />
        </h2>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              'address=Romania&bounds=50.06959932%2C29.79693177%2C42.06277332%2C20.13861532',
          }}
          className={css.heroButton}
          onClick={ () => ReactGA.event({
            category: 'user',
            action: 'click_browse',
            label: 'homepage'
          }) }
        >
          <FormattedMessage id="SectionHero.browseButton" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
