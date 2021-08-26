import Typography from '@material-ui/core/Typography';

import type { InspirationType } from '../../../constants/types';

interface InspirationDetailsProps {
  inspiration: InspirationType;
}

const InspirationDetails: React.FC<InspirationDetailsProps> = ({
  inspiration,
}) => {
  return (
    <div>
      <Typography variant="subtitle2" color="textSecondary">
        {inspiration.name}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        {inspiration.creatorName}
      </Typography>
    </div>
  );
};

export default InspirationDetails;
