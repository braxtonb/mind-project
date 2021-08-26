import styled from 'styled-components';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Footer = styled.footer`
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
`;

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    background: '#f5f5f5',
    padding: '10px',
    textAlign: 'center',
  },
  anchor: {
    color: '#0057ff',
    textDecoration: 'none',
  },
}));

const LayoutFooter: React.FC = () => {
  const classes = useStyles();

  return (
    <Footer>
      <Grid container className={classes.wrapper} justifyContent="center">
        <Grid item>
          <Typography variant="subtitle2" color="textSecondary">
            Developed and Designed by
          </Typography>
        </Grid>
        &nbsp;
        <Grid item>
          <Typography
            className={classes.anchor}
            variant="subtitle2"
            component="a"
            href="https://www.linkedin.com/in/braxton-brewton-a27916103/"
            target="_blank"
          >
            Braxton Brewton
          </Typography>
        </Grid>
      </Grid>
    </Footer>
  );
};

export default LayoutFooter;
