import InspirationVideo from './InspirationVideo/InspirationVideo';
import InspirationImage from './InspirationImage/InspirationImage';
import { INSPIRATION_MEDIA_TYPE } from '../../../constants/inspiration-contants';

import type { InspirationType } from '../../../constants/types';

interface InspirationMediaProps {
  inspiration: InspirationType;
}

const InspirationMedia: React.FC<InspirationMediaProps> = ({ inspiration }) => {
  switch (inspiration.mediaType) {
    case INSPIRATION_MEDIA_TYPE.VIDEO:
      return <InspirationVideo inspiration={inspiration} />;
    default:
      return <InspirationImage inspiration={inspiration} />;
  }
};

export default InspirationMedia;
