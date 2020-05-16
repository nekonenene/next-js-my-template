import React from 'react';
import Link from 'next/link';
import { createStyles, makeStyles, Theme, MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import constants from '../lib/constants';
import MyTheme from './MyTheme';
import Footer from './Footer';
import SideMenu from './SideMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      letterSpacing: '0.03rem',
    },
    content: {
      flexGrow: 1,
      height: '80vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  }),
);

export default function Layout({ children, home }: {
  // props の interface の役割
  children: React.ReactNode
  home?: boolean
}) {
  const classes = useStyles();
  const [sideMenuOpen, setSideMenuOpen] = React.useState(false);

  const toggleOpen = () => {
    setSideMenuOpen(!sideMenuOpen);
  }

  return (
    <MuiThemeProvider theme={MyTheme}>
      <header className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleOpen}>
              <MenuIcon />
            </IconButton>
            <Link href='/'>
              <Typography variant="h6" className={classes.title}>{constants.siteTitle}</Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <SideMenu isOpen={sideMenuOpen} stateHandler={setSideMenuOpen} />
      </header>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </MuiThemeProvider>
  )
}
