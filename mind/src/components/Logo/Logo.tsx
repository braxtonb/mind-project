import { makeStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  logoContainer: {
    margin: '24px 0',
    padding: 0,
    paddingLeft: '10px',
    [`${theme.breakpoints.up('md')}`]: {
      padding: '25px',
      paddingLeft: 0,
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  logoText: {
    fontSize: '1.5rem',
    [`${theme.breakpoints.up('md')}`]: {
      fontSize: '2rem',
    },
  },
}));
const Logo: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      <a href="/">
        <Typography variant="h3" className={classes.logoText}>
          Mind
        </Typography>
      </a>
    </div>
  );
};

export default Logo;
