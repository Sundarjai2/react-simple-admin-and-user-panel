import React, { useState, Component } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { useStyles } from '../../style/style';
import '../../App.css';

import { Mutation } from 'react-apollo';
import { LOGIN_MUTATION } from '../../gql-query/queries';


class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };


    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.dismissError = this.dismissError.bind(this);

  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
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
            Sign in
        </Typography>
          <Mutation mutation={LOGIN_MUTATION}>
            {(userLogin, { loading, error, data }) => {
              if (loading) return 'Loading...';
              if (error) return `Error! ${error.message}`;
              return (
                <div>
                  <form className={classes.form} noValidate
                    onSubmit={e => {
                      e.preventDefault();

                      if (!this.state.email) {
                        return this.setState({ error: 'Username is required' });
                      }

                      if (!this.state.password) {
                        return this.setState({ error: 'Password is required' });
                      }

                      this.setState({ error: '' });

                      userLogin({ variables: { email: this.state.email, password: this.state.password } }).then(res => {
                        // let history = useHistory();
                        if (res.data.userLogin.email === null) {
                          localStorage.removeItem('userLoginData');
                        } else {
                          localStorage.setItem('userLoginData', JSON.stringify(res.data.userLogin));
                          this.props.history.push('/home');
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

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Sign In
        </Button>

                  </form>
                  <Link to="/signup">Or Signup Here</Link>
                  <br /><Link to="/">Home</Link>
                </div>
              )
            }}
          </Mutation>

        </div>
      </Container>

    );

  }
}

export default withStyles(useStyles)(withRouter(SignIn));