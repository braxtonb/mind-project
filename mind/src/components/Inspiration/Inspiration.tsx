import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import InspirationMedia from './InspirationMedia/InspirationMedia';
import InspirationDetails from './InspirationDetails/InspirationDetails';
import InspirationDescription from './InspirationDescription/InspirationDescription';

import type { InspirationType } from '../../constants/types';
import InspirationMoreButton from './InspirationMoreButton/InspirationMoreButton';

const useStyles = makeStyles((theme: Theme) => ({
  detailsWrapper: {
    marginTop: theme.spacing(1),
  },
  descriptionWrapper: {
    marginTop: theme.spacing(1),
  },
}));

interface InspirationProps {
  inspiration: InspirationType;
  onRemoveClick: (inspiration: InspirationType) => void;
}

const Inspiration: React.FC<InspirationProps> = ({
  inspiration,
  onRemoveClick,
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      data-testid={`inspiration-${inspiration.id}`}
    >
      <Grid item xs={12}>
        <InspirationMedia inspiration={inspiration} />
      </Grid>

      <Grid
        container
        item
        direction="column"
        xs={12}
        className={classes.detailsWrapper}
      >
        <Grid container item justifyContent="space-between">
          <InspirationDetails inspiration={inspiration} />
          <InspirationMoreButton
            inspiration={inspiration}
            onRemoveClick={onRemoveClick}
          />
        </Grid>

        {inspiration.description && (
          <Grid item xs={12} className={classes.descriptionWrapper}>
            <InspirationDescription description={inspiration.description} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Inspiration;
