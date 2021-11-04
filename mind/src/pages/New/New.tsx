import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { PageLayout } from '../../components/PageLayout';
import {
  NewHeader,
  NewFormContainer as NewForm,
} from '../../components/NewPage';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '42rem',
    margin: '0 auto',
  },
}));

const New: React.FC = () => {
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
        <Grid container item direction="column">
          <NewHeader />
        </Grid>

        <Grid container item>
          <NewForm />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default New;
