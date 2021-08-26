import cn from 'classnames';
import { Theme, makeStyles } from '@material-ui/core/styles';
import LayoutFooter from './LayoutFooter/LayoutFooter';
import LayoutHeader from './LayoutHeader/LayoutHeader';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '24px 20px 72px 20px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: '24px 75px 72px 75px',
    },
  },
}));

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  const classes = useStyles();

  return (
    <div className={cn(classes.root, className)}>
      <LayoutHeader />
      <main>{children}</main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
