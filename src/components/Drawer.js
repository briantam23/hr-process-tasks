import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom';


const drawerWidth = 340;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

function PermanentDrawerLeft({ classes, stepNum, process, steps }) {
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{ 'backgroundColor': 'steelblue' }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Coding Challenge - Brian Tam
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List style={{ 'backgroundColor': 'bisque' }}>
          {steps.map((step, index) => (
            <Fragment key={step.stepNumber}>
              <Link to={`/${step.stepNumber}`}>
                <ListItem button >
                  <ListItemIcon>
                    <strong>
                      {step.stepNumber < 10 ? ('0' + step.stepNumber) : step.stepNumber}
                    </strong>
                  </ListItemIcon>
                  {
                    step.requiredPreviousSteps[0] ? (
                      <ListItemText primary={step.displayName} secondary={`Depends on: ${step.requiredPreviousSteps}`} />
                    ) : <ListItemText primary={step.displayName} />
                  }
                  <ListItemText primary={step.role.users} />
                </ListItem>
              </Link>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <hr/>
      </main>
    </div>
  );
}

PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerLeft);