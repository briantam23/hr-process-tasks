import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'darkgoldenrod'
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


class TextFields extends React.Component {
    state = {
        displayName: '',
        description: '',
        assignedUsers: '',
        name1: '',
        name2: '',
        name3: ''
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    render() {
        const { classes, stepNum, steps } = this.props;
        const { displayName, description, assignedUsers } = this.state;
        const { handleChange } = this;

        if(!stepNum) return null;
        let step = steps[stepNum * 1 - 1];
        
        return (
            <form className={classes.container} noValidate autoComplete="off">
                {
                    steps.length > 0 ? (
                        <Fragment>

                            <TextField
                                id="standard-full-width"
                                label="Display Name"
                                style={{ margin: 8 }}
                                placeholder=""
                                helperText=""
                                value={displayName || step.displayName}
                                onChange={handleChange('displayName')}
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
                                value={description || step.description}
                                onChange={handleChange('description')}
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                id="standard-read-only-input"
                                label="Dependencies (view only)"
                                value={step.requiredPreviousSteps[0] ? step.requiredPreviousSteps : 'None'}
                                className={classes.textField}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />

                            <TextField
                                id="standard-read-only-input"
                                label="Conditions (view only)"
                                value={step.conditions[0] ? step.conditions : 'None'}
                                className={classes.textField}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />

                            {
                                step.fields[0] ? (
                                    step.fields.map((field, idx) => {
                                        let value = String(`this.state.name${idx}`)
                                        let handleChangeParam = String(`name${idx}`)
                                        return (
                                            <TextField
                                                key={idx}
                                                id="standard-select-currency"
                                                select
                                                label={`${field.displayName} (view only)`}
                                                className={classes.textField}
                                                value={value}
                                                onChange={this.handleChange(handleChangeParam)}
                                                SelectProps={{
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                }}
                                                helperText=""
                                                margin="normal"
                                            >
                                                {field.choices.map((choice, idx) => (
                                                    <MenuItem key={idx} value={choice}>
                                                        {choice ? choice : 'None'}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        )
                                    })) : null
                            }


                            {
                                step.role.users[0] ? (
                                    <TextField
                                        id="standard-full-width"
                                        label="Assigned Users"
                                        style={{ margin: 8 }}
                                        placeholder=""
                                        helperText=""
                                        value={assignedUsers || role.users}
                                        onChange={handleChange('assignedUsers')}
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                ) : (
                                        <TextField
                                            id="standard-full-width"
                                            label="Assigned Users"
                                            style={{ margin: 8 }}
                                            placeholder=""
                                            helperText=""
                                            value={assignedUsers || 'None'}
                                            onChange={handleChange('assignedUsers')}
                                            fullWidth
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )

                            }

                        </Fragment>
                    ) : <hr />
                }
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);