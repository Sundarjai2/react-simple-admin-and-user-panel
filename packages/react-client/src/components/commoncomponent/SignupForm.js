import React, { useState, Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { withStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
import '../../App.css';

import { Mutation } from 'react-apollo';
import { SIGNUP_MUTATION } from '../../gql-query/signup';


const useStyles = makeStyles(theme => ({
    // Header Style start

    '@global': {
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        background: '#ffffff',
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
        textDecoration: 'none',
    },
    logo: {
        width: 290,
        //   height: 70,
    },
    menuLink: {
        margin: theme.spacing(1, 1.5),
        paddingBottom: theme.spacing(1),
        textDecoration: 'none',
        color: '#333'
    },
    activeTab: {
        borderBottom: '1px solid #000 !important',
    },
    signinBtn: {
        background: '#1B75BB',
        color: '#FFFFFF',
        textTransform: "none",
        padding: '4px 20px',
        marginLeft: theme.spacing(1),
        "&:hover": {
            background: "#1B75BB"
        },
    },
    marginBT: {
        margin: theme.spacing(3, 0, 2),
    },
    // Header Style End

    // Signin Style Start
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        margin: '10px 0',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        // margin: theme.spacing(1),
        minWidth: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    // Signin Style end


}));

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            role: '',
            error: '',
        };
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.dismissError = this.dismissError.bind(this);
        // this.labelWidth = '300';
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleUserChange(evt) {
        this.setState({
            email: evt.target.value,
        });
    };

    handleNameChange(evt) {
        this.setState({
            name: evt.target.value,
        });
    }

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }
    handleChange(evt, name) {
        this.setState({
            role: evt.target.value,
        });
    }
    render() {
        const { classes } = this.props;
        return (

            <Container component="main" maxWidth="xs">
                {/* <CssBaseline /> */}
                <div className={classes.paper}>
                    {/* <div className={classes.avatarSignin}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        </div> */}
                    <Typography align="center" component="h1" variant="h5">
                        Sign Up
        </Typography>
                    <Mutation mutation={SIGNUP_MUTATION}>
                        {(userSignup, { loading, error, data }) => {
                            if (loading) return 'Loading...';
                            if (error) return `Error! ${error.message}`;
                            return (
                                <div>
                                    <form className={classes.form} noValidate
                                        onSubmit={e => {
                                            e.preventDefault();

                                            if (!this.state.name) {
                                                return this.setState({ error: 'Name is required' });
                                            }

                                            if (!this.state.email) {
                                                return this.setState({ error: 'Username is required' });
                                            }

                                            if (!this.state.password) {
                                                return this.setState({ error: 'Password is required' });
                                            }
                                            if (!this.state.role) {
                                                return this.setState({ error: 'Role is required' });
                                            }


                                            this.setState({ error: '' });

                                            userSignup({ variables: { email: this.state.email, password: this.state.password, role: this.state.role, name: this.state.name } }).then(res => {
                                                if (res.data.userSignUp.email === null) {
                                                    localStorage.removeItem('userSignupData');
                                                    this.setState({ error: 'Please Check the below Details' });
                                                } else {
                                                    // localStorage.setItem('userSignupData', JSON.stringify(res.data.userSignUp));
                                                    this.props.history.push('/login');
                                                }
                                            }).catch(res => {
                                                console.log(res)
                                            });
                                        }}>
                                        {
                                            this.state.error &&
                                            <h3 data-test="error" onClick={this.dismissError}>
                                                <button onClick={this.dismissError}>✖</button>
                                                {this.state.error}
                                            </h3>
                                        }
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            name="name"
                                            autoComplete="name"
                                            value={this.state.name} onChange={this.handleNameChange}
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="username"
                                            label="Username"
                                            name="username"
                                            autoComplete="username"
                                            value={this.state.email} onChange={this.handleUserChange}
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            value={this.state.password} onChange={this.handlePassChange}
                                        />
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel htmlFor="role-native-simple">Role</InputLabel>
                                            <Select
                                                native
                                                value={this.state.role}
                                                onChange={this.handleChange}
                                                // labelWidth = {this.labelWidth}
                                                inputProps={{
                                                    name: 'role',
                                                    id: 'role-native-simple',
                                                }}
                                            >
                                                <option value="" />
                                                <option value={1}>Admin</option>
                                                <option value={2}>User</option>
                                            </Select>
                                        </FormControl>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.submit}
                                        >
                                            Sign Up
                                    </Button>



                                    </form>
                                    <Link to="/login">Or SignIn</Link> <br /><Link to="/">Home</Link>
                                </div>
                            )
                        }}
                    </Mutation>

                </div>
            </Container>

        );

    }
}

export default withStyles(useStyles)(withRouter(SignUp));