import styled from 'styled-components';
import { InspirationFigure, InspirationLink } from '../shared';

import type { InspirationType } from '../../../../constants/types';

const Image = styled.img`
  border-radius: 8px;
  max-width: 100%;
`;

interface InspirationVideoProps {
  inspiration: InspirationType;
}

const InspirationVideo: React.FC<InspirationVideoProps> = ({ inspiration }) => {
  return (
    <InspirationFigure>
      <InspirationLink href={inspiration.url} target="_blank" />
      <Image src={inspiration.mediaURL} alt={inspiration.name} />
    </InspirationFigure>
  );
};

export default InspirationVideo;
