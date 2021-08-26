import TopNav from './TopNav/TopNav';
import { makeStyles, Theme, createStyles, Hidden } from '@material-ui/core';
import Logo from '../../Logo/Logo';
import MobileTopNav from './MobileTopNav/MobileTopNav';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerContainer: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      [`${theme.breakpoints.down('sm')}`]: {
        marginLeft: '-15px',
      },
    },
    headerMobileTopNavWrapper: {
      display: 'flex',
    },
    headerMobileLogo: {
      flex: 1,
    },
  }),
);

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.headerContainer}>
      <Hidden mdUp>
        <div className={classes.headerMobileTopNavWrapper}>
          <MobileTopNav />
        </div>

        <div className={classes.headerMobileLogo}>
          <Logo />
        </div>
      </Hidden>

      <Hidden smDown>
        <div>
          <Logo />
        </div>
        <div className="Header-TopNav">
          <TopNav />
        </div>
      </Hidden>
    </header>
  );
};

export default Header;