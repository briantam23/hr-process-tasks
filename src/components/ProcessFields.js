import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'skyblue'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 1021,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


const TextFields = ({ classes, process, steps }) => {

  const { displayName, description, owner, category } = process;
  
  return (
    <form className={classes.container} noValidate autoComplete="off">
      {
        process.displayName ? (
          <Fragment>
            <TextField
              id="standard-full-width"
              label="Display Name"
              style={{ margin: 8 }}
              placeholder=""
              helperText=""
              defaultValue={displayName}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="standard-full-width"
              label="Description"
              style={{ margin: 8 }}
              placeholder=""
              helperText=""
              defaultValue={description}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="standard-read-only-input"
              label="Owner/Creator (view only)"
              defaultValue={owner}
              className={classes.textField}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              id="standard-read-only-input"
              label="Category (view only)"
              defaultValue={category}
              className={classes.textField}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              id="standard-read-only-input"
              label="Total Number of Steps (view only)"
              defaultValue={steps.length}
              className={classes.textField}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
          </Fragment>
        ) : null
      }

    </form>
  );
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);