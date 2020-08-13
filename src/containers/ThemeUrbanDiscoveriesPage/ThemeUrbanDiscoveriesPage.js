import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './ThemeUrbanDiscoveriesPage.css';
import image from './urban_discoveries.jpg';

// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import TouchAppIcon from '@material-ui/icons/TouchApp';

import image11 from './1.png';
import image22 from './2.png';


const ThemeUrbanDiscoveriesPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 2,
  //   },
  //   paper: {
  //     padding: theme.spacing(2),
  //     textAlign: 'center',
  //     color: theme.palette.text.secondary,
  //   },
  // }));

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
  }));

  const classes = useStyles();

  const tileData = [
       {
        img: image11,
        title: 'Bucharest',
        author: 'Night at the Museum',
        featured: true,
        url: 'https://epicvisits-dev.herokuapp.com/l/bucharest-night-at-the-museum/5f33b52f-a7c9-4aec-968a-a013d70351f8'
       },

       {
        img: image22,
        title: 'Bucharest',
        author: 'Bohemian Glamour',
        featured: true,
        url: 'https://epicvisits-dev.herokuapp.com/l/bucharest-bohemian-glamour/5f339cbd-cf85-4c7c-b298-a69a76cd9780'
       },
    ]

  // prettier-ignore
  return (
    <StaticPage
      title="Urban Discoveries"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'ThemeUrbanDiscoveriesPage',
        description: 'Urban Discoveries',
        name: 'Theme Urban Discoveries page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Urban Discoveries</h1>
          <img className={css.coverImage} src={image} alt="Urban Discoveries" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              
            {/* <React.Fragment spacing={5}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
                <br/>
                
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
                <br/>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>item</Paper>
                <br/>
              </Grid>
            </React.Fragment> */}


<div className={classes.root}>
<GridList cellHeight={100} spacing={1} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={tile.author}
              titlePosition="top"
              
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} className={classes.icon} 
                  onClick={event =>  window.location.href=`${tile.url}`}>
                  <TouchAppIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
            
          </GridListTile>
        ))}
      </GridList>
    </div>


            </div>

            <div className={css.contentMain}>
              <h2>
              Urban Discoveries
              </h2>

              <p>
              Living legends, hidden gems, a city’s best secrets are now being revealed. Take a break from Lonely Planet and start to discover a wholesome city experience where you learn and live like an urban Indiana Jones...for a couple of days at least. Explore the thrills of discovery. Choose a memorable stay and experience all wrapped up in a thematic travel package

              </p> 

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
    </StaticPage>
  );
};

export default ThemeUrbanDiscoveriesPage;
