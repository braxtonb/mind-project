import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import cn from 'classnames';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  UpdateHeader,
  UpdateFormContainer as UpdateForm,
} from '../../components/UpdatePage';
import { PageLayout } from '../../components/PageLayout';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: '42rem',
    margin: '0 auto',
  },
  errorWrapper: {
    marginTop: theme.spacing(8),
  },
}));

interface UpdateParams {
  id?: string;
}

const Update: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<UpdateParams>();

  if (!id || isNaN(+id)) {
    return (
      <PageLayout>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={cn(classes.root, classes.errorWrapper)}
          spacing={3}
        >
          <Typography variant="h3" align="center">
            Uh oh...
          </Typography>
          <Typography align="center">
            Unable to find the inspiration you were looking for. Please select a
            different inspiration.
          </Typography>
        </Grid>
      </PageLayout>
    );
  }

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
          <UpdateHeader />
        </Grid>

        <Grid container item>
          <UpdateForm inspirationId={+id} />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Update;
