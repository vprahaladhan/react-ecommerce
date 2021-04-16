import React from 'react';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2)
    }
  },
  font1: {
    fontSize: "1rem"
  },
  font2: {
    fontSize: "0.5rem"
  },
  font3: {
    fontSize: "1.5rem"
  }
}));

const styles = {
  smallIcon: {
    width: 25,
    height: 25,
    margin: 0,
    padding: 0
  },
}

const CustomizedBadge = ({ noOfItems }) => (
  <IconButton aria-label="cart" style={styles.smallIcon}>
    <Badge badgeContent={noOfItems} color="primary" classes={{badge: useStyles().font2}}>
      <ShoppingCartIcon />
    </Badge>
  </IconButton>
);

export default CustomizedBadge;