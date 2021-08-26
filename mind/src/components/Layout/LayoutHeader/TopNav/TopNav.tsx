import { Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  topNavContainer: {},
  topNavList: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  topNavListItem: {
    listStyle: 'none',
    padding: '25px',
    '& a': {
      color: '#445B63',
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    '&:last-of-type': {
      paddingRight: '10px',
    },
  },
  topNavUserDropdownButton: {
    color: '#445B63',
    // display: 'inline-block',
    display: 'inline',
    fontFamily: 'Nunito SemiBold !important',
    fontSize: 'inherit',
    letterSpacing: 'normal',
    lineHeight: 'inherit',
    maxWidth: 200,
    overflow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    textTransform: 'inherit',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  },
  topNavContainerDark: {
    '& a': {
      color: theme.palette.common.white,
    },
    '& .TopNav-dropdown': {
      color: theme.palette.common.white,
    },
  },
}));

const TopNav: React.FC = () => {
  const classes = useStyles();

  return (
    <nav className={classes.topNavContainer}>
      <ul className={classes.topNavList}>
        <li className={classes.topNavListItem}>
          <a href="/">Inspirations</a>
        </li>
        <li className={classes.topNavListItem}>
          <a href="/new">Create</a>
        </li>
        <li className={classes.topNavListItem}>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
