import { useState } from 'react';
import styled from 'styled-components';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuRounded from '@material-ui/icons/MenuRounded';
import AddRounded from '@material-ui/icons/AddRounded';
import DashboardRounded from '@material-ui/icons/DashboardRounded';
import InfoRounded from '@material-ui/icons/InfoRounded';

const Wrapper = styled.div`
  alignitems: center;
  display: flex;
  justifycontent: space-between;
  width: 100%;

  a {
    fontfamily: Nunito SemiBold !important;
  }
`;

const useStyles = makeStyles((theme: Theme) => ({
  swipeableDrawer: {
    width: '240px',
  },
  mobileTopNavMenuRounded: {},
  mobileTopNavMenuRoundedDark: {
    color: theme.palette.common.white,
  },
  signInIcon: {
    fill: 'rgba(0, 0, 0, 0.54)',
    stroke: 'transparent',
  },
}));

const MobileTopNav: React.FC = () => {
  const classes = useStyles();
  const [displayMobileTopNavDrawer, setDisplayMobileTopNavDrawer] =
    useState<boolean>(false);

  /**
   * Handlers
   */
  const _handleSwipeableDrawerToggle =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setDisplayMobileTopNavDrawer(open);
    };

  const _handleMenuButtonClick = (event: React.MouseEvent) => {
    setDisplayMobileTopNavDrawer(!displayMobileTopNavDrawer);
  };

  const _handleLinkClick = () => {
    setDisplayMobileTopNavDrawer(false);
  };

  return (
    <Wrapper>
      <IconButton aria-label="open menu" onClick={_handleMenuButtonClick}>
        <MenuRounded />
      </IconButton>

      <Drawer
        classes={{ paper: classes.swipeableDrawer }}
        anchor="left"
        open={displayMobileTopNavDrawer}
        onClose={_handleSwipeableDrawerToggle(false)}
      >
        <List>
          <ListItem component="a" href="/" button onClick={_handleLinkClick}>
            <ListItemIcon>
              <DashboardRounded />
            </ListItemIcon>
            <ListItemText primary="Inspirations" />
          </ListItem>
          <ListItem component="a" href="/new" button onClick={_handleLinkClick}>
            <ListItemIcon>
              <AddRounded />
            </ListItemIcon>
            <ListItemText primary="Add new Inspiration" />
          </ListItem>
          <ListItem
            component="a"
            href="/about"
            button
            onClick={_handleLinkClick}
          >
            <ListItemIcon>
              <InfoRounded />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>
    </Wrapper>
  );
};

export default MobileTopNav;
