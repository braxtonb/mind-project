import Typography from '@material-ui/core/Typography';
import { Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    fontWeight: 600,
  },
}));

export interface HeaderProps {
  title: string;
  subheader?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subheader }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" className={classes.header}>
        {title}
      </Typography>
      {subheader && <Typography color="textSecondary">{subheader}</Typography>}
    </>
  );
};

export default Header;
