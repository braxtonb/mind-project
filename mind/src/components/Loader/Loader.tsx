import { useTheme } from '@material-ui/core';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { LoaderHeightWidthRadiusProps } from 'react-spinners/interfaces';

interface LoaderProps extends LoaderHeightWidthRadiusProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading, ...other }) => {
  const theme = useTheme();

  return isLoading ? (
    <ScaleLoader
      {...other}
      color={theme.palette.primary.main}
      loading={isLoading}
    />
  ) : null;
};

export default Loader;
