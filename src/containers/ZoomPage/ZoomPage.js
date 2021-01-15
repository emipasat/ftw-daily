import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  Page,
  ExternalLink,
  Modal
} from '../../components';

import { isScrollingDisabled } from '../../ducks/UI.duck';
import { manageDisableScrolling } from '../../ducks/UI.duck';

import { crypto} from 'crypto' // crypto comes with Node.js

import css from './ZoomPage.css';

export class ZoomPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { zoomModalOpen: false, zoomMgt: '' };

  }


  callApi = async (meetingNumber, role) => {
    const response = await fetch('/api/zoom-signature?meetingNumber=' + meetingNumber+ '&role=' + role);
    const body = await response.json();
    
    console.log(body);
    if (response.status !== 200) throw Error(body.message);
    
    return body.signature;
  };

  

  // async generateSignature() {//apiKey, apiSecret, meetingNumber, role) {

  //   return this.callApi()
  //     .then(res => { 
        
  //       console.log(res); 
  //       return res;

  //     })
  //     .catch(err => console.log(err));
  // }


  componentDidMount() {
    // eslint-disable-next-line no-console
    //import { ZoomMtg } from '@zoomus/websdk';
    // try {
    //   this.react_image_lightbox = require("react-image-lightbox");
    //   this.react_image_lightbox.use();
    // }
    // catch (e){
    //     console.log(e)
    // }

    //this.state.zoomMgt = import('@zoomus/websdk');
    //this.state.zoomMgt.setZoomJSLib('node_modules/@zoomus/websdk/dist/lib', '/av');

    var first = window.location.href;
    var first1 = first.split('/');
    var meetingNumber = first1[4];

    import('@zoomus/websdk').then(component => {
      console.log(component);

      //component.ZoomMtg.setZoomJSLib('node_modules/@zoomus/websdk/dist/lib', '/av');

      component.ZoomMtg.setZoomJSLib('https://source.zoom.us/1.8.6/lib', '/av'); 

      
      component.ZoomMtg.preLoadWasm();
      component.ZoomMtg.prepareJssdk();

      // this.callApi()
      //   .then(
      //       signature=> {
      //         console.log(signature)
      //       }
      //   );

      // return;
      this.callApi(meetingNumber, '1')// '82755987261', '1')//'d1CVEB65Q6OSiUVli6Kbdg', '4inbZO6SZ9Bsz8838j6rkCAtQGrShXONglJV',  '82525181174', 0);

        .then(res => { 
        
          console.log(res); 



          component.ZoomMtg.init({
            leaveUrl: 'http://localhost:3000/',
            //webEndpoint: meetingConfig.webEndpoint,
            success: function () {
              //console.log(meetingConfig);
              console.log("signature", res);
              //ZoomMtg.i18n.load(meetingConfig.lang);
              //ZoomMtg.i18n.reload(meetingConfig.lang);
              component.ZoomMtg.join({
                meetingNumber: meetingNumber, // '82755987261',//meetingConfig.meetingNumber,
                userName: 'EmanuelDemo',
                signature: res,
                apiKey: 'd1CVEB65Q6OSiUVli6Kbdg',//meetingConfig.apiKey,
                userEmail: 'emi@emi.ro', //meetingConfig.userEmail,
                passWord: 'Hey123',//meetingConfig.passWord,
                success: function (res) {
                  console.log("join meeting success");
                  console.log("get attendeelist");
                  // ZoomMtg.getAttendeeslist({});
                  // ZoomMtg.getCurrentUser({
                  //   success: function (res) {
                  //     console.log("success getCurrentUser", res.result.currentUser);
                  //   },
                  // });
                },
                error: function (res) {
                  console.log(res);
                },
              });
            },
            error: function (res) {
              console.log(res);
            }
          });

          
  
        })
        .catch(err => console.log(err));

      
    });
  }

  

  render() {
    const {
      intl,
      scrollingDisabled,
      signupError,
      submitLogin,
      submitSignup,
      tab,
      sendVerificationEmailInProgress,
      sendVerificationEmailError,
      onResendVerificationEmail,
      onManageDisableScrolling,
    } = this.props;

  // prettier-ignore
  return (
    <Page
      title="Zoom"
      scrollingDisabled={scrollingDisabled}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'ContactStaticPage',
        description: 'Zoom',
        name: 'Zoom page',
      }}

      
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Zoom</h1>
          {/* <img className={css.coverImage} src={image} alt="Living Traditions" /> */}


          <Modal
              id="ZoomPage.zoom"
              isOpen={this.state.zoomModalOpen}
              onClose={() => this.setState({ zoomModalOpen: false })}
              usePortal
              onManageDisableScrolling={onManageDisableScrolling}
              
            >
              <div className={css.termsWrapper}>
                <h2 className={css.termsHeading}>
                  xxx
                </h2>
                
              </div>
            </Modal>

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p> </p>
            </div>

            <div className={css.contentMain}>
              <h2>
              
              </h2>

              <p>
              Alex, Bogdan, Raluca and Mihai are here for you 7 days a week. <br/><br/>
              Let’s get in touch at: <a href="mailto:team@epicvisits.com">team@epicvisits.com</a> or +4 0771 226 054. <br/><br/>
Epic Visits SRL is registered in Brasov, Sat Ucea de Jos, Comuna Ucea, nr. 125A, J8/814/2020, Unique Registration Code: 42509647
<br/>IBAN: RO64INGB0000999908785450 (ING Bank).</p> 

              {/* <h3 className={css.subtitle}>Are you a sauna owner?</h3>

              <p>
                Saunatime offers you a good way to earn some extra cash! If you're not using your
                sauna every evening, why not rent it to other people while it's free. And even if
                you are using your sauna every evening (we understand, it's so good), why not invite
                other people to join you when the sauna is already warm! A shared sauna experience
                is often a more fulfilling one.
              </p>  */}

              {/* <h3 id="contact" className={css.subtitle}>
                Create your own marketplace like Saunatime
              </h3>
              <p>
                Saunatime is brought to you by the good folks at{' '}
                <ExternalLink href="http://sharetribe.com">Sharetribe</ExternalLink>. Would you like
                to create your own marketplace platform a bit like Saunatime? Or perhaps a mobile
                app? With Sharetribe it's really easy. If you have a marketplace idea in mind, do
                get in touch!
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p> */}
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

}


ZoomPageComponent.defaultProps = {
  // currentUser: null,
  // loginError: null,
  // signupError: null,
  // tab: 'signup',
  // sendVerificationEmailError: null,
};

const { bool, func, object, oneOf, shape } = PropTypes;

ZoomPageComponent.propTypes = {
  // authInProgress: bool.isRequired,
  // currentUser: propTypes.currentUser,
  // isAuthenticated: bool.isRequired,
  // loginError: propTypes.error,
  scrollingDisabled: bool.isRequired,
  // signupError: propTypes.error,
  // submitLogin: func.isRequired,
  // submitSignup: func.isRequired,
  // tab: oneOf(['login', 'signup']),

  // sendVerificationEmailInProgress: bool.isRequired,
  // sendVerificationEmailError: propTypes.error,
  // onResendVerificationEmail: func.isRequired,
  onManageDisableScrolling: func.isRequired,

  // from withRouter
  location: shape({ state: object }).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  //const { isAuthenticated, loginError, signupError } = state.Auth;
  //const { currentUser, sendVerificationEmailInProgress, sendVerificationEmailError } = state.user;
  return {
    //authInProgress: authenticationInProgress(state),
    //currentUser,
    //isAuthenticated,
    //loginError,
    scrollingDisabled: isScrollingDisabled(state),
    //signupError,
    //sendVerificationEmailInProgress,
    //sendVerificationEmailError,
  };
};

const mapDispatchToProps = dispatch => ({
  //submitLogin: ({ email, password }) => dispatch(login(email, password)),
  //submitSignup: params => dispatch(signup(params)),
  //onResendVerificationEmail: () => dispatch(sendVerificationEmail()),
  onManageDisableScrolling: (componentId, disableScrolling) =>
    dispatch(manageDisableScrolling(componentId, disableScrolling)),
});

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const ZoomPage = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(ZoomPageComponent);

export default ZoomPage;

