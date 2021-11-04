import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVert from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import EditRounded from '@material-ui/icons/EditRounded';
import DeleteRounded from '@material-ui/icons/DeleteRounded';
import LightTooltip from '../../LightTooltip';
import { InspirationType } from '../../../constants/types';

const useStyles = makeStyles(() => ({
  container: {},
  centeredGrid: {
    display: 'flex',
    justifyContent: 'center',
  },
  menuItemButton: {
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

interface InspirationMoreButtonProps {
  inspiration: InspirationType;
  onRemoveClick: (inspiration: InspirationType) => void;
}

const InspirationMoreButton: React.FC<InspirationMoreButtonProps> = ({
  inspiration,
  onRemoveClick,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const _handleMoreVertClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const _handleUpdateClick = () => {
    setAnchorEl(null);
  };

  const _handleRemoveClick = () => {
    setAnchorEl(null);
    onRemoveClick(inspiration);
  };

  const _handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.container}>
      <LightTooltip title="More">
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={_handleMoreVertClick}
        >
          <MoreVert />
        </IconButton>
      </LightTooltip>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={_handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        <MenuItem
          key="update"
          onClick={_handleUpdateClick}
          component={RouterLink}
          to={`/update/${inspiration.id}`}
          aria-label="update inspiration"
        >
          <Button
            className={classes.menuItemButton}
            disableRipple
            disableFocusRipple
            startIcon={<EditRounded />}
          >
            Update
          </Button>
        </MenuItem>
        <MenuItem
          key="remove"
          onClick={_handleRemoveClick}
          aria-label="remove inspiration"
        >
          <Button
            className={classes.menuItemButton}
            disableRipple
            disableFocusRipple
            startIcon={<DeleteRounded />}
          >
            Remove
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default InspirationMoreButton;
