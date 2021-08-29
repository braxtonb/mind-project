import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Inspiration from '../Inspiration';
import Loader from '../../Loader';
import theme from '../../../constants/theme';

import type { InspirationType } from '../../../constants/types';

const useStyles = makeStyles((theme: Theme) => ({
  paginationGrid: {
    'div&.Search-Pagination': {
      padding: 0,
    },
  },
  paginationUl: {
    justifyContent: 'center',
  },
}));

export interface InspirationListProps {
  isLoading?: boolean;
  isError?: boolean;
  inspirations?: InspirationType[];
  numberOfPages: number;
  page: number;
  onPaginationChange: (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => void;
  onRemoveClick: (inspiration: InspirationType) => void;
}

const InspirationList: React.FC<InspirationListProps> = ({
  isLoading,
  isError,
  inspirations,
  numberOfPages,
  page,
  onPaginationChange,
  onRemoveClick,
}) => {
  const classes = useStyles();

  if (isLoading) {
    return (
      <Grid container spacing={3} justifyContent="center">
        <Loader
          height={45}
          width={6}
          radius={8}
          margin={2}
          color={theme.palette.primary.main}
          isLoading={isLoading}
        />
      </Grid>
    );
  }

  if (isError) {
    return (
      <Grid container spacing={3} justifyContent="center">
        <Typography align="center">
          Unable to retrieve inspirations. Please refresh your browser.
        </Typography>
      </Grid>
    );
  }

  return (
    <Grid container spacing={4}>
      {inspirations?.map((insp) => (
        <Grid key={insp.id} item xs={12} sm={6} lg={3}>
          <Inspiration inspiration={insp} onRemoveClick={onRemoveClick} />
        </Grid>
      ))}

      <Grid
        item
        xs={12}
        className={`Search-Pagination ${classes.paginationGrid}`}
      >
        <Pagination
          color="primary"
          variant="outlined"
          count={numberOfPages}
          page={page}
          onChange={onPaginationChange}
          classes={{ ul: classes.paginationUl }}
        />
      </Grid>
    </Grid>
  );
};

InspirationList.defaultProps = {
  isLoading: false,
  isError: false,
  inspirations: [],
};

export default InspirationList;
