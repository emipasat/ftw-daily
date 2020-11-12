import React from 'react';
import {
  AboutPage,
  StoryPage,
  BlogPage,
  AuthenticationPage,
  CheckoutPage,
  ContactDetailsPage,
  EditListingPage,
  EmailVerificationPage,
  InboxPage,
  LandingPage,
  ListingPage,
  ManageListingsPage,
  ManagePropertiesPage,
  NotFoundPage,
  PasswordChangePage,
  PasswordRecoveryPage,
  PasswordResetPage,
  StripePayoutPage,
  PaymentMethodsPage,
  PrivacyPolicyPage,
  ProfilePage,
  ProfileSettingsPage,
  MyPropertiesPage,
  SearchPage,
  ThemeTestPage,
  StyleguidePage,
  TermsOfServicePage,
  TransactionPage,
  ThemeArtsAndCraftsPage,
  ThemeEnergyAndAdrenalinePage,
  ThemeNatureWondersPage,
  WildlifePage,
  ThemeRomanticEscapesPage,
  ThemeSimplyChillPage,
  ThemeTastyTreasuresPage,
  ThemeUrbanDiscoveriesPage,
  ThemeLivingTraditionsPage,
  ContactStaticPage,
} from './containers';

// routeConfiguration needs to initialize containers first
// Otherwise, components will import form container eventually and
// at that point css bundling / imports will happen in wrong order.
import { NamedRedirect } from './components';

export const ACCOUNT_SETTINGS_PAGES = [
  'ContactDetailsPage',
  'PasswordChangePage',
  'StripePayoutPage',
  'PaymentMethodsPage',
  'MyPropertiesPage'
];

// https://en.wikipedia.org/wiki/Universally_unique_identifier#Nil_UUID
const draftId = '00000000-0000-0000-0000-000000000000';
const draftSlug = 'draft';

const RedirectToLandingPage = () => <NamedRedirect name="LandingPage" />;
const RedirectToLandingPageRo = () => <NamedRedirect name="LandingPageRo" />;

// NOTE: Most server-side endpoints are prefixed with /api. Requests to those
// endpoints are indended to be handled in the server instead of the browser and
// they will not render the application. So remember to avoid routes starting
// with /api and if you encounter clashing routes see server/index.js if there's
// a conflicting route defined there.

// Our routes are exact by default.
// See behaviour from Routes.js where Route is created.
const routeConfiguration = () => {
  return [
    {
      path: '/',
      name: 'LandingPage',
      component: props => <LandingPage {...props} />,
    },
    {
      path: '/ro',
      name: 'LandingPageRo',
      component: props => <LandingPage {...props} />,
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
    },
    {
      path: '/ro/about',
      name: 'AboutPageRo',
      component: AboutPage,
    },
    {
      path: '/blog/:date/:title',
      name: 'StoryPage',
      component: props => <StoryPage {...props} />,
      //loadData: ThemeTestPage.loadData,
    },
    {
      path: '/ro/blog/:date/:title',
      name: 'StoryPageRo',
      component: props => <StoryPage {...props} />,
      //loadData: ThemeTestPage.loadData,
    },
    {
      path: '/blog',
      name: 'BlogPage',
      component: props => <BlogPage {...props} />,
      //loadData: ThemeTestPage.loadData,
    },
    {
      path: '/ro/blog',
      name: 'BlogPageRo',
      component: props => <BlogPage {...props} />,
      //loadData: ThemeTestPage.loadData,
    },
    {
      path: '/s',
      name: 'SearchPage',
      component: props => <SearchPage {...props} />,
      loadData: SearchPage.loadData,
    },
    {
      path: '/ro/s',
      name: 'SearchPageRo',
      component: props => <SearchPage {...props} />,
      loadData: SearchPage.loadData,
    },
    {
      path: '/th/:pub_themes',
      name: 'ThemeTestPage',
      component: props => <ThemeTestPage {...props} />,
      loadData: ThemeTestPage.loadData,
    },
    {
      path: '/ro/th/:pub_themes',
      name: 'ThemeTestPageRo',
      component: props => <ThemeTestPage {...props} />,
      loadData: ThemeTestPage.loadData,
    },
    // {
    //   path: '/natureWonders',
    //   name: 'ThemeNatureWondersPage',
    //   component: ThemeNatureWondersPage,
    // },
    // {
    //   path: '/wildlife',
    //   name: 'WildlifePage',
    //   component: WildlifePage,
    // },
    // {
    //   path: '/energyAndAdrenaline',
    //   name: 'ThemeEnergyAndAdrenalinePage',
    //   component: ThemeEnergyAndAdrenalinePage,
    // },
    // {
    //   path: '/artsAndCrafts',
    //   name: 'ThemeArtsAndCraftsPage',
    //   component: ThemeArtsAndCraftsPage,
    // },
    // {
    //   path: '/romanticEscapes',
    //   name: 'ThemeRomanticEscapesPage',
    //   component: ThemeRomanticEscapesPage,
    // },
    // {
    //   path: '/simplyChill',
    //   name: 'ThemeSimplyChillPage',
    //   component: ThemeSimplyChillPage,
    // },
    // {
    //   path: '/tastyTreasures',
    //   name: 'ThemeTastyTreasuresPage',
    //   component: ThemeTastyTreasuresPage,
    // },
    // {
    //   path: '/urbanDiscoveries',
    //   name: 'ThemeUrbanDiscoveriesPage',
    //   component: ThemeUrbanDiscoveriesPage,
    // },
    // {
    //   path: '/livingTraditions',
    //   name: 'ThemeLivingTraditionsPage',
    //   component: ThemeLivingTraditionsPage,
    // },
    {
      path: '/contact',
      name: 'ContactStaticPage',
      component: ContactStaticPage,
    },
    {
      path: '/ro/contact',
      name: 'ContactStaticPageRo',
      component: ContactStaticPage,
    },
    {
      path: '/s/filters',
      name: 'SearchFiltersPage',
      component: props => <SearchPage {...props} tab="filters" />,
      loadData: SearchPage.loadData,
    },
    {
      path: '/ro/s/filters',
      name: 'SearchFiltersPageRo',
      component: props => <SearchPage {...props} tab="filters" />,
      loadData: SearchPage.loadData,
    },
    {
      path: '/s/listings',
      name: 'SearchListingsPage',
      component: props => <SearchPage {...props} tab="listings" />,
      loadData: SearchPage.loadData,
    },
    {
      path: '/ro/s/listings',
      name: 'SearchListingsPageRo',
      component: props => <SearchPage {...props} tab="listings" />,
      loadData: SearchPage.loadData,
    },
    {
      path: '/s/map',
      name: 'SearchMapPage',
      component: props => <SearchPage {...props} tab="map" />,
      loadData: SearchPage.loadData,
    },
    {
      path: '/ro/s/map',
      name: 'SearchMapPageRo',
      component: props => <SearchPage {...props} tab="map" />,
      loadData: SearchPage.loadData,
    },
    {
      path: '/l',
      name: 'ListingBasePage',
      component: RedirectToLandingPage,
    },
    {
      path: '/ro/l',
      name: 'ListingBasePageRo',
      component: RedirectToLandingPage,
    },
    {
      path: '/l/:slug/:id',
      name: 'ListingPage',
      component: props => <ListingPage {...props} />,
      loadData: ListingPage.loadData,
    },
    {
      path: '/ro/l/:slug/:id',
      name: 'ListingPageRo',
      component: props => <ListingPage {...props} />,
      loadData: ListingPage.loadData,
    },
    {
      path: '/l/:slug/:id/checkout',
      name: 'CheckoutPage',
      auth: true,
      component: props => <CheckoutPage {...props} />,
      setInitialValues: CheckoutPage.setInitialValues,
    },
    {
      path: '/ro/l/:slug/:id/checkout',
      name: 'CheckoutPageRo',
      auth: true,
      component: props => <CheckoutPage {...props} />,
      setInitialValues: CheckoutPage.setInitialValues,
    },
    {
      path: '/l/:slug/:id/:variant',
      name: 'ListingPageVariant',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ListingPage {...props} />,
      loadData: ListingPage.loadData,
    },
    {
      path: '/ro/l/:slug/:id/:variant',
      name: 'ListingPageVariantRo',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ListingPage {...props} />,
      loadData: ListingPage.loadData,
    },


    // {
    //   path: '/ro/l',
    //   name: 'ListingBasePageRo',
    //   component: RedirectToLandingPageRo,
    // },
    // {
    //   path: '/ro/l/:slug/:id',
    //   name: 'ListingPageRo',
    //   component: props => <ListingPage {...props} />,
    //   loadData: ListingPage.loadData,
    // },
    // {
    //   path: '/ro/l/:slug/:id/checkout',
    //   name: 'CheckoutPage',
    //   auth: true,
    //   component: props => <CheckoutPage {...props} />,
    //   setInitialValues: CheckoutPage.setInitialValues,
    // },
    // {
    //   path: '/ro/l/:slug/:id/:variant',
    //   name: 'ListingPageVariant',
    //   auth: true,
    //   authPage: 'LoginPage',
    //   component: props => <ListingPage {...props} />,
    //   loadData: ListingPage.loadData,
    // },




    {
      path: '/l/new',
      name: 'NewListingPage',
      auth: true,
      component: () => (
        <NamedRedirect
          name="EditListingPage"
          params={{ slug: draftSlug, id: draftId, type: 'new', tab: 'description', whatever: 'listing' }}
        />
      ),
    },
    {
      path: '/ro/l/new',
      name: 'NewListingPageRo',
      auth: true,
      component: () => (
        <NamedRedirect
          name="EditListingPage"
          params={{ slug: draftSlug, id: draftId, type: 'new', tab: 'description', whatever: 'listing' }}
        />
      ),
    },
    {
      path: '/p/new',
      name: 'NewPropertyPage',
      auth: true,
      component: () => (
        <NamedRedirect
          name="EditPropertyPage"
          params={{ slug: draftSlug, id: draftId, type: 'new', tab: 'description', whatever: 'property' }}
        />
      ),
    },
    {
      path: '/ro/p/new',
      name: 'NewPropertyPageRo',
      auth: true,
      component: () => (
        <NamedRedirect
          name="EditPropertyPage"
          params={{ slug: draftSlug, id: draftId, type: 'new', tab: 'description', whatever: 'property' }}
        />
      ),
    },
    {
      path: '/p/:slug/:id/:type/:tab/:whatever',
      name: 'EditPropertyPage',
      auth: true,
      component: props => <EditListingPage {...props} />,
      loadData: EditListingPage.loadData,
    },
    {
      //path: '/l/:slug/:id/:type/:tab/',
      path: '/l/:slug/:id/:type/:tab/:whatever',
      name: 'EditListingPage',
      auth: true,
      component: props => <EditListingPage {...props} />,
      loadData: EditListingPage.loadData,
    },
    {
      path: '/l/:slug/:id/:type/:tab/:returnURLType',
      name: 'EditListingStripeOnboardingPage',
      auth: true,
      component: props => <EditListingPage {...props} />,
      loadData: EditListingPage.loadData,
    },

    // Canonical path should be after the `/l/new` path since they
    // conflict and `new` is not a valid listing UUID.
    {
      path: '/l/:id',
      name: 'ListingPageCanonical',
      component: props => <ListingPage {...props} />,
      loadData: ListingPage.loadData,
    },
    {
      path: '/u',
      name: 'ProfileBasePage',
      component: RedirectToLandingPage,
    },
    {
      path: '/ro/u',
      name: 'ProfileBasePageRo',
      component: RedirectToLandingPage,
    },
    {
      path: '/u/:id',
      name: 'ProfilePage',
      component: props => <ProfilePage {...props} />,
      loadData: ProfilePage.loadData,
    },
    {
      path: '/ro/u/:id',
      name: 'ProfilePageRo',
      component: props => <ProfilePage {...props} />,
      loadData: ProfilePage.loadData,
    },
    {
      path: '/profile-settings',
      name: 'ProfileSettingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ProfileSettingsPage {...props} />,
    },
    {
      path: '/ro/profile-settings',
      name: 'ProfileSettingsPageRo',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ProfileSettingsPage {...props} />,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: props => <AuthenticationPage {...props} tab="login" />,
    },
    {
      path: '/ro/login',
      name: 'LoginPageRo',
      component: props => <AuthenticationPage {...props} tab="login" />,
    },
    {
      path: '/signup',
      name: 'SignupPage',
      component: props => <AuthenticationPage {...props} tab="signup" />,
    },
    {
      path: '/ro/signup',
      name: 'SignupPageRo',
      component: props => <AuthenticationPage {...props} tab="signup" />,
    },
    {
      path: '/recover-password',
      name: 'PasswordRecoveryPage',
      component: props => <PasswordRecoveryPage {...props} />,
    },
    {
      path: '/ro/recover-password',
      name: 'PasswordRecoveryPageRo',
      component: props => <PasswordRecoveryPage {...props} />,
    },
    {
      path: '/inbox',
      name: 'InboxBasePage',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="InboxPage" params={{ tab: 'sales' }} />,
    },
    {
      path: '/ro/inbox',
      name: 'InboxBasePageRo',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="InboxPage" params={{ tab: 'sales' }} />,
    },
    {
      path: '/inbox/:tab',
      name: 'InboxPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <InboxPage {...props} />,
      loadData: InboxPage.loadData,
    },
    {
      path: '/ro/inbox/:tab',
      name: 'InboxPageRo',
      auth: true,
      authPage: 'LoginPage',
      component: props => <InboxPage {...props} />,
      loadData: InboxPage.loadData,
    },
    {
      path: '/order/:id',
      name: 'OrderPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="OrderDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/ro/order/:id',
      name: 'OrderPageRo',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="OrderDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/order/:id/details',
      name: 'OrderDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <TransactionPage {...props} transactionRole="customer" />,
      loadData: params => TransactionPage.loadData({ ...params, transactionRole: 'customer' }),
      setInitialValues: TransactionPage.setInitialValues,
    },
    {
      path: '/ro/order/:id/details',
      name: 'OrderDetailsPageRo',
      auth: true,
      authPage: 'LoginPage',
      component: props => <TransactionPage {...props} transactionRole="customer" />,
      loadData: params => TransactionPage.loadData({ ...params, transactionRole: 'customer' }),
      setInitialValues: TransactionPage.setInitialValues,
    },
    {
      path: '/sale/:id',
      name: 'SalePage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="SaleDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/ro/sale/:id',
      name: 'SalePageRo',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="SaleDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/sale/:id/details',
      name: 'SaleDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <TransactionPage {...props} transactionRole="provider" />,
      loadData: params => TransactionPage.loadData({ ...params, transactionRole: 'provider' }),
    },
    {
      path: '/ro/sale/:id/details',
      name: 'SaleDetailsPageRo',
      auth: true,
      authPage: 'LoginPage',
      component: props => <TransactionPage {...props} transactionRole="provider" />,
      loadData: params => TransactionPage.loadData({ ...params, transactionRole: 'provider' }),
    },
    {
      path: '/listings',
      name: 'ManageListingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ManageListingsPage {...props} />,
      loadData: ManageListingsPage.loadData,
    },
    {
      path: '/ro/listings',
      name: 'ManageListingsPageRo',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ManageListingsPage {...props} />,
      loadData: ManageListingsPage.loadData,
    },
    {
      path: '/properties',
      name: 'ManagePropertiesPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ManagePropertiesPage {...props} />,
      loadData: ManagePropertiesPage.loadData,
    },
    {
      path: '/ro/properties',
      name: 'ManagePropertiesPageRo',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ManagePropertiesPage {...props} />,
      loadData: ManagePropertiesPage.loadData,
    },
    {
      path: '/account',
      name: 'AccountSettingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="ContactDetailsPage" />,
    },
    {
      path: '/ro/account',
      name: 'AccountSettingsPageRo',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="ContactDetailsPage" />,
    },
    {
      path: '/account/contact-details',
      name: 'ContactDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ContactDetailsPage {...props} />,
      loadData: ContactDetailsPage.loadData,
    },
    {
      path: '/ro/account/contact-details',
      name: 'ContactDetailsPageRo',
      auth: true,
      authPage: 'LoginPage',
      component: props => <ContactDetailsPage {...props} />,
      loadData: ContactDetailsPage.loadData,
    },
    {
      path: '/account/change-password',
      name: 'PasswordChangePage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <PasswordChangePage {...props} />,
    },
    {
      path: '/ro/account/change-password',
      name: 'PasswordChangePageRo',
      auth: true,
      authPage: 'LoginPage',
      component: props => <PasswordChangePage {...props} />,
    },
    {
      path: '/account/payments',
      name: 'StripePayoutPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <StripePayoutPage {...props} />,
      loadData: StripePayoutPage.loadData,
    },
    {
      path: '/ro/account/payments',
      name: 'StripePayoutPageRo',
      auth: true,
      authPage: 'LoginPage',
      component: props => <StripePayoutPage {...props} />,
      loadData: StripePayoutPage.loadData,
    },
    {
      path: '/account/payments/:returnURLType',
      name: 'StripePayoutOnboardingPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <StripePayoutPage {...props} />,
      loadData: StripePayoutPage.loadData,
    },
    {
      path: '/ro/account/payments/:returnURLType',
      name: 'StripePayoutOnboardingPageRo',
      auth: true,
      authPage: 'LoginPage',
      component: props => <StripePayoutPage {...props} />,
      loadData: StripePayoutPage.loadData,
    },
    {
      path: '/account/payment-methods',
      name: 'PaymentMethodsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <PaymentMethodsPage {...props} />,
      loadData: PaymentMethodsPage.loadData,
    },
    {
      path: '/ro/account/payment-methods',
      name: 'PaymentMethodsPageRo',
      auth: true,
      authPage: 'LoginPage',
      component: props => <PaymentMethodsPage {...props} />,
      loadData: PaymentMethodsPage.loadData,
    },
    {
      path: '/account/my-properties',
      name: 'MyPropertiesPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <MyPropertiesPage {...props} />,
      loadData: ProfilePage.loadData,
    },
    {
      path: '/terms-of-service',
      name: 'TermsOfServicePage',
      component: props => <TermsOfServicePage {...props} />,
    },
    {
      path: '/ro/terms-of-service',
      name: 'TermsOfServicePageRo',
      component: props => <TermsOfServicePage {...props} />,
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicyPage',
      component: props => <PrivacyPolicyPage {...props} />,
    },
    {
      path: '/ro/privacy-policy',
      name: 'PrivacyPolicyPageRo',
      component: props => <PrivacyPolicyPage {...props} />,
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/ro/styleguide',
      name: 'StyleguideRo',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/styleguide/g/:group',
      name: 'StyleguideGroup',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/ro/styleguide/g/:group',
      name: 'StyleguideGroupRo',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/styleguide/c/:component',
      name: 'StyleguideComponent',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/ro/styleguide/c/:component',
      name: 'StyleguideComponentRo',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/styleguide/c/:component/:example',
      name: 'StyleguideComponentExample',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/ro/styleguide/c/:component/:example',
      name: 'StyleguideComponentExampleRo',
      component: props => <StyleguidePage {...props} />,
    },
    {
      path: '/styleguide/c/:component/:example/raw',
      name: 'StyleguideComponentExampleRaw',
      component: props => <StyleguidePage raw {...props} />,
    },
    {
      path: '/ro/styleguide/c/:component/:example/raw',
      name: 'StyleguideComponentExampleRawRo',
      component: props => <StyleguidePage raw {...props} />,
    },
    {
      path: '/notfound',
      name: 'NotFoundPage',
      component: props => <NotFoundPage {...props} />,
    },
    {
      path: '/ro/notfound',
      name: 'NotFoundPageRo',
      component: props => <NotFoundPage {...props} />,
    },

    // Do not change this path!
    //
    // The API expects that the application implements /reset-password endpoint
    {
      path: '/reset-password',
      name: 'PasswordResetPage',
      component: props => <PasswordResetPage {...props} />,
    },

    // Do not change this path!
    //
    // The API expects that the application implements /verify-email endpoint
    {
      path: '/verify-email',
      name: 'EmailVerificationPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <EmailVerificationPage {...props} />,
      loadData: EmailVerificationPage.loadData,
    },
  ];
};

export default routeConfiguration;
