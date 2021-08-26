import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { PageLayout } from '../../components/PageLayout';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: '42rem',
    margin: '0 auto',
  },
  paragraphWrapper: {
    marginTop: theme.spacing(8),
  },
}));

const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <PageLayout>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}
        spacing={3}
      >
        <Grid container direction="column" alignItems="center" className={classes.paragraphWrapper}>
          <Typography variant="h3" align="center">
            404
          </Typography>
          <Typography color="textSecondary" align="center">
            Content not found
          </Typography>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default NotFound;
