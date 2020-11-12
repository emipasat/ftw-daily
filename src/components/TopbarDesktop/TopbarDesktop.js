import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { ACCOUNT_SETTINGS_PAGES } from '../../routeConfiguration';
import { propTypes } from '../../util/types';
import config from '../../config';
//import ReactGA from 'react-ga';

import {
  Avatar,
  InlineTextButton,
  Logo,
  Menu,
  MenuLabel,
  MenuContent,
  MenuItem,
  NamedLink,
} from '../../components';
import { TopbarSearchForm } from '../../forms';

import Button from '@material-ui/core/Button';
import {default as MenuMaterial} from '@material-ui/core/Menu';
import {default as MenuItemMaterial} from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import css from './TopbarDesktop.css';

function refreshPage(){ 
  const isServer = typeof window === 'undefined';
  if (!isServer)
  {
    setTimeout(
      function() {
          window.location.reload(); 
      }
      .bind(this),
      1000
    );
    //window.location.reload(); 
  }
}

const TopbarDesktop = props => {
  const {
    className,
    currentUser,
    currentPage,
    rootClassName,
    currentUserHasListings,
    notificationCount,
    intl,
    isAuthenticated,
    onLogout,
    onSearchSubmit,
    initialSearchFormValues,
  } = props;

  // material menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // end material menu



  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const authenticatedOnClientSide = mounted && isAuthenticated;
  const isAuthenticatedOrJustHydrated = isAuthenticated || !mounted;

  const classes = classNames(rootClassName || css.root, className);

  const search = (
    <TopbarSearchForm
      className={css.searchLink}
      desktopInputRoot={css.topbarSearchWithLeftPadding}
      onSubmit={onSearchSubmit}
      initialValues={initialSearchFormValues}
    />
  );

  const notificationDot = notificationCount > 0 ? <div className={css.notificationDot} /> : null;

  const inboxLink = authenticatedOnClientSide ? (
    <NamedLink
      className={css.inboxLink}
      name="InboxPage"
      params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}
    >
      <span className={css.inbox}>
        <FormattedMessage id="TopbarDesktop.inbox" />
        {notificationDot}
      </span>
    </NamedLink>
  ) : null;

  const currentPageClass = page => {
    const isAccountSettingsPage =
      page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage);
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null;
  };

  const profileMenu = authenticatedOnClientSide ? (
    <Menu>
      <MenuLabel className={css.profileMenuLabel} isOpenClassName={css.profileMenuIsOpen}>
        <Avatar className={css.avatar} user={currentUser} disableProfileLink />
      </MenuLabel>
      <MenuContent className={css.profileMenuContent}>
        <MenuItem key="ManageListingsPage">
          <NamedLink
            className={classNames(css.yourListingsLink, currentPageClass('ManageListingsPage'))}
            name="ManageListingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.yourListingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="ManagePropertiesPage">
          <NamedLink
            className={classNames(css.yourPropertiesLink, currentPageClass('ManagePropertiesPage'))}
            name="ManagePropertiesPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.yourPropertiesLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="ProfileSettingsPage">
          <NamedLink
            className={classNames(css.profileSettingsLink, currentPageClass('ProfileSettingsPage'))}
            name="ProfileSettingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.profileSettingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="AccountSettingsPage">
          <NamedLink
            className={classNames(css.yourListingsLink, currentPageClass('AccountSettingsPage'))}
            name="AccountSettingsPage"
          >
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.accountSettingsLink" />
          </NamedLink>
        </MenuItem>
        <MenuItem key="logout">
          <InlineTextButton rootClassName={css.logoutButton} onClick={onLogout}>
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.logout" />
          </InlineTextButton>
        </MenuItem>
      </MenuContent>
    </Menu>
  ) : null;


  // onClick={
  //   ReactGA.event({
  //       category: 'users_signup',
  //       action: 'users_click',
  //       label: 'users_signup_top_link'})
  // }

  const signupLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="SignupPage" className={css.signupLink}
      
    >
      <span className={css.signup}>
        <FormattedMessage id="TopbarDesktop.signup" />
      </span>
    </NamedLink>
  );

  // onClick={
  //   ReactGA.event({
  //       category: 'users_login',
  //       action: 'users_click',
  //       label: 'users_login_top_link'})
  // }
  
  const loginLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="LoginPage" className={css.loginLink}
      
    >
      <span className={css.login}>
        <FormattedMessage id="TopbarDesktop.login" />
      </span>
    </NamedLink>
  );


  // var languageLink = config.locale === 'en' ? 
  //   (<NamedLink name="LandingPageRo" className={css.loginLink} onClick={ config.locale = 'ro' }>
  //     <span className={css.login}>
  //       <FormattedMessage id="TopbarDesktop.romanian" />
  //     </span>
  //   </NamedLink>
  //   ) : (
  //   <NamedLink name="LandingPage" className={css.loginLink} onClick={ config.locale = 'en' }>
  //     <span className={css.login}>
  //       <FormattedMessage id="TopbarDesktop.english" />
  //     </span>
  //   </NamedLink>
  // );



  {/* show only one TODO */}
  var languageLinkRo = 
    (<NamedLink name="LandingPageRo" className={css.loginLink} title="RO">
      <span className={css.login} onClick={ refreshPage }>
        RO
      </span>
    </NamedLink>
    );

    var languageLinkEn = 
    (<NamedLink name="LandingPage" className={css.loginLink} title="EN" >
      <span className={css.login} onClick={ refreshPage }>
        EN
      </span>
    </NamedLink>
    );

    var blogLink = 
    (<NamedLink name="BlogPage" className={css.loginLink} title="Blog" >
      <span className={css.login}>
        Blog
      </span>
    </NamedLink>
    );


  return (
    <nav className={classes}>
      <NamedLink className={css.logoLink} name="LandingPage">
        <Logo
          format="desktop"
          className={css.logo}
          alt={intl.formatMessage({ id: 'TopbarDesktop.logo' })}
        />
      </NamedLink>
      {search}
      
      {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          
      </Button> */}
      <a href="#" className={css.createPropertyLink} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <span className={css.createProperty}>
        <FormattedMessage id="Footer.toNewListingPage" /> <ArrowDropDownIcon style={{ color: "#FF0000" }} />
        </span>
      </a>
      <MenuMaterial
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItemMaterial onClick={handleClose}>
          <NamedLink className={css.createPropertyLink} name="NewPropertyPage">
            <span className={css.createProperty}>
              <FormattedMessage id="TopbarDesktop.createProperty" />
            </span>
          </NamedLink>
        </MenuItemMaterial>
        <MenuItemMaterial onClick={handleClose}>
          <NamedLink className={css.createListingLink} name="NewListingPage">
            <span className={css.createListing}>
              <FormattedMessage id="TopbarDesktop.createListing" />
            </span>
          </NamedLink>
        </MenuItemMaterial>
        
      </MenuMaterial>

      {/* <NamedLink className={css.createPropertyLink} name="NewPropertyPage">
        <span className={css.createProperty}>
          <FormattedMessage id="TopbarDesktop.createProperty" />
        </span>
      </NamedLink>
      <NamedLink className={css.createListingLink} name="NewListingPage">
        <span className={css.createListing}>
          <FormattedMessage id="TopbarDesktop.createListing" />
        </span>
      </NamedLink> */}
      {blogLink}
      {inboxLink}
      {profileMenu}
      {signupLink}
      {loginLink}
      {languageLinkRo}
      {languageLinkEn}
    </nav>
  );
};

const { bool, func, object, number, string } = PropTypes;

TopbarDesktop.defaultProps = {
  rootClassName: null,
  className: null,
  currentUser: null,
  currentPage: null,
  notificationCount: 0,
  initialSearchFormValues: {},
};

TopbarDesktop.propTypes = {
  rootClassName: string,
  className: string,
  currentUserHasListings: bool.isRequired,
  currentUser: propTypes.currentUser,
  currentPage: string,
  isAuthenticated: bool.isRequired,
  onLogout: func.isRequired,
  notificationCount: number,
  onSearchSubmit: func.isRequired,
  initialSearchFormValues: object,
  intl: intlShape.isRequired,
};

export default TopbarDesktop;
