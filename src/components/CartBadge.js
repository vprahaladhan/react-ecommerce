import React from 'react';
import { Icon } from 'semantic-ui-react';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';

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
    fontSize: "0.5rem",
    marginBottom: "5px"
  },
  font3: {
    fontSize: "1.5rem"
  }
}));

const CustomizedBadge = ({ noOfItems }) => (
  <div style={{marginBottom: '10px'}}>
    <Badge badgeContent={noOfItems} color="primary" classes={{badge: useStyles().font2}}>
      <Icon name="shopping cart" size="large" />
    </Badge>
  </div>
);

export default CustomizedBadge;