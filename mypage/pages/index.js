import React from 'react';

import withStyles from '../package/src/tools/withStyles';
import { getResponsiveResource } from '../package/src/tools/utils';
import createLoader from '../package/src/tools/createLoader';
import createResponsive from '../package/src/tools/createResponsive';
import Arwes from '../package/src/Arwes';
import ArwesContent from '../package/src/Content';
import Words from '../package/src/Words';
import Button from '../package/src/Button';
import Logo from '../package/src/Logo';
import Loading from '../package/src/Loading';

import withTemplate from '../package/site/withTemplate';
import { getTitle } from '../package/site/utils';
import Link from '../package/site/components/Link';
import FooterGitHub from '../package/site/components/FooterGitHub';
import FooterAuthor from '../package/site/components/FooterAuthor';

const styles = (theme) => {
  return {
    root: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      '& h1': {
        margin: [0, 0, theme.margin / 2],
        fontSize: 40,
      },
      '& p': {
        margin: [0, 0, theme.margin],
        maxWidth: 500,
      },
      '& $option + $option': {
        marginLeft: theme.padding / 2,
      },
    },
    main: {
      flex: 1,
      display: 'flex',
    },
    content: {
      margin: 'auto',
      padding: [0, theme.padding],
      textAlign: 'center',
    },
    option: {
      display: 'inline-block',
    },
    footer: {
      opacity: theme.alpha / 2,
    },
    footerContent: {
      display: 'flex',
      padding: theme.padding / 2,
      fontSize: '80%',
    },
    footerLeft: {
      flex: '1 1 auto',
    },
    footerRight: {
      flex: '1 1 auto',
      textAlign: 'right',
      '& a': {
        textAlign: 'left',
      },
    },
  };
};

class Home extends React.Component {

  constructor () {
    super(...arguments);
    this.state = {
      show: false,
      loaded: false
    };

    this.loader = createLoader();
    this.responsive = createResponsive({
      getTheme: () => this.props.theme
    });
  }

  componentDidMount () {
    window.document.title = getTitle(window.location.pathname);
    this.startLoading();
  }

  render () {
    const { classes, resources } = this.props;
    const { show, loaded } = this.state;

    return (
      <div>
        <Loading
          full
          animate
          show={!show && !loaded}
          animation={{
            unmountOnExit: true
          }}
        />
        <Arwes
          animate
          show={show}
          showResources={show}
          background={resources.background}
          pattern={resources.pattern}
        >
          {anim => (
          <ArwesContent className={classes.root}>

            <div className={classes.main}>
              <div className={classes.content}>

                <Logo animate show={anim.entered} layer='header' />
                <header>
                  <h1><Words animate show={anim.entered}>
                    Arwes
                  </Words></h1>
                </header>
                <main>
                  <p style={{ marginBottom: '10px' }}>
                    <Words animate show={anim.entered}>
                      Futuristic Sci-Fi and Cyberpunk Graphical User Interface Framework for Web Apps
                    </Words>
                  </p>
                  <p><small><a href='https://arwes.dev'>
                    <Words animate show={anim.entered}>
                      This project version is now deprecated. Please use arwes.dev.
                    </Words>
                  </a></small></p>
                </main>

                <nav>
                  <Link className={classes.option} href='/docs' onLink={this.onLink}>
                    <Button animate show={anim.entered}>
                      {btnAnim => (
                        <Words animate show={btnAnim.entered}>Docs</Words>
                      )}
                    </Button>
                  </Link>
                  {' '}
                  <Link className={classes.option} href='/api' onLink={this.onLink}>
                    <Button animate show={anim.entered}>
                      {btnAnim => (
                        <Words animate show={btnAnim.entered}>API</Words>
                      )}
                    </Button>
                  </Link>
                  {' '}
                  <Link className={classes.option} href='/play' onLink={this.onLink}>
                    <Button animate show={anim.entered}>
                      {btnAnim => (
                        <Words animate show={btnAnim.entered}>Play</Words>
                      )}
                    </Button>
                  </Link>
                </nav>

              </div>
            </div>

            <footer className={classes.footer}>
              <div className={classes.footerContent}>
                <div className={classes.footerLeft}>
                  <FooterGitHub show={anim.entered} onLink={this.onLink} />
                </div>
                <div className={classes.footerRight}>
                  <FooterAuthor show={anim.entered} onLink={this.onLink} />
                </div>
              </div>
            </footer>

          </ArwesContent>
          )}
        </Arwes>
      </div>
    );
  }

  startLoading () {
    const responsive = this.responsive.get();
    const bg = getResponsiveResource(this.props.resources.background, responsive);

    this.loader.load({ images: [bg] }, { timeout: 5 * 1000 }).
      then(() => {}, () => {}).
      then(() => this.setState({ show: true, loaded: true }));
  }

  onLink = () => {
    this.setState({ show: false });
  }
}

export default withTemplate(withStyles(styles)(Home));