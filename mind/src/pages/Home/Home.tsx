import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { PageLayout } from '../../components/PageLayout';
import { HomeHeader } from '../../components/HomePage';
import { InspirationListContainer as InspirationList } from '../../components/Inspiration';

const useStyles = makeStyles((theme: Theme) => ({
  inspirationList: {
    marginTop: theme.spacing(8),
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <PageLayout>
      <Grid container direction="column" alignItems="center">
        <HomeHeader />
      </Grid>

      <Grid container className={classes.inspirationList}>
        <InspirationList />
      </Grid>
    </PageLayout>
  );
};

export default Home;
