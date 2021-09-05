import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AboutHeader } from '../../components/AboutPage';
import { PageLayout } from '../../components/PageLayout';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: '42rem',
    margin: '0 auto',
  },
  paragraphWrapper: {
    marginTop: theme.spacing(4),
  },
}));

const About: React.FC = () => {
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
        <Grid container direction="column" alignItems="center">
          <AboutHeader />
        </Grid>

        <Grid container item className={classes.paragraphWrapper}>
          <Typography paragraph>
            I have an idea for a new project and wanted a place to store all the
            things that have served as inspiration.
          </Typography>
          <Typography paragraph>
            Mind enables storing image and video references used as inspiration for the new project.
          </Typography>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default About;
