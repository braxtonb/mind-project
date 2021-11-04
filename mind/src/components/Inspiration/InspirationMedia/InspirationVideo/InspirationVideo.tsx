import { useRef } from 'react';
import styled from 'styled-components';
import { makeStyles, Theme } from '@material-ui/core/styles';
import VideoCamIcon from '@material-ui/icons/VideocamRounded';
import { InspirationFigure, InspirationLink } from '../shared';

import type { InspirationType } from '../../../../constants/types';

const Video = styled.video`
  border-radius: 8px;
  max-width: 100%;
`;

const useStyles = makeStyles((theme: Theme) => ({
  inspirationFigure: {
    '&:hover svg': {
      boxShadow: theme.shadows[6],
      transform: 'scale(1.2, 1.2)',
    },
  },
  videoCamIcon: {
    backgroundColor: '#050809',
    borderBottomLeftRadius: 8,
    boxShadow: theme.shadows[0],
    color: theme.palette.common.white,
    padding: theme.spacing(0.5),
    position: 'absolute',
    right: 0,
    top: 0,
    transition: 'all 0.3s ease-in-out',
  },
}));

interface InspirationVideoProps {
  inspiration: InspirationType;
}

const InspirationVideo: React.FC<InspirationVideoProps> = ({ inspiration }) => {
  const classes = useStyles();
  // https://stackoverflow.com/a/37465127
  const videoRef = useRef<HTMLVideoElement>(null);

  /**
   * Handlers
   */
  const _handleMouseOver = async () => {
    try {
      await videoRef?.current?.play();
    } catch (error) {
      // do nothing
    }
  };

  const _handleMouseOut = () => {
    if (videoRef?.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const _handleVideoError = () => {
    // alert('Error loading video');
    console.error('Error loading video');
  };

  return (
    <InspirationFigure
      className={classes.inspirationFigure}
      onMouseOver={_handleMouseOver}
      onMouseOut={_handleMouseOut}
    >
      <InspirationLink href={inspiration.url} target="_blank" />
      <Video
        ref={videoRef}
        loop
        src={inspiration.mediaURL}
        onError={_handleVideoError}
      />
      <VideoCamIcon fontSize="small" className={classes.videoCamIcon} />
    </InspirationFigure>
  );
};

export default InspirationVideo;
