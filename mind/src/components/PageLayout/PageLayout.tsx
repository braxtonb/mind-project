import { makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../Layout';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: 'calc(100vh - 76px)',
  },
}));

interface PageLayoutProps {
  children: React.ReactNode;
}

// PageLayout exists so that when I add
// an AlertSnackbar it can be added here

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const classes = useStyles();

  return <Layout className={classes.root}>{children}</Layout>;
};

export default PageLayout;
