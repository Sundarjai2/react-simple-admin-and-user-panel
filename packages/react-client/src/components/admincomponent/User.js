import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import classNames from 'classnames';
// import GET_USERS from '../../gql-query/getuser'

const GET_USERS = gql`
  {
    users {
      _id
      email
      password
      name
      isAuth
    }
  }
`;


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  addLink: {
    color: '#ffffff'
  },
  editBtnAction:{
    textTransform: "uppercase",
    marginRight: theme.spacing(2),
  },
  MT1:{
      marginTop: theme.spacing(2)
  }
}));

function User(props) {
  const classes = useStyles();
  return (
    
    <Query query={GET_USERS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (

            <Container fixed className={classes.MT1}>
            <AppBar position="static">
              <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
                <Typography variant="h6" className={classNames({ [classes.title]: true, [useStyles.addLink]: true })}>
                  LIST OF STUDENTS
            </Typography>
                {/* <Button color="inherit">Login</Button> */}
              </Toolbar>
            </AppBar>
            <Paper className={classes.root}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>SI No</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>IsAuth</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{checkStatus(user.isAuth)? "Active": "InActive"}</TableCell>
                      <TableCell>
                        <div className="gridAvtionBtnGroup">
                          <Button variant="contained" color="primary" className={classes.button, classes.margin, classes.editBtnAction} href={`/show/${user._id}`}>SHOW</Button>
                          {/* <Mutation mutation={DELETE_USER} key={user._id} onCompleted={() => props.history.push('/home')}>
                            {(deleteUser, { loading, error }) => (
                              <div className="pull-left">
                                <form
                                  onSubmit={e => {
                                    e.preventDefault();
                                    deleteUser({ variables: { id: user._id } });
                                  }}>
                                    <Button variant="contained" type="submit" color="secondary" className={classes.button, classes.margin, "editStd"}>Delete</Button>
                                </form>
                                {loading && <p>Loading...</p>}
                                {error && <p>Error :( Please try again</p>}
                              </div>
                            )}
                          </Mutation> */}
                        
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>

            </Container>
        );
      }}
    </Query>
  );
}
function checkStatus(data){
 if(data === 'false' || data === false)
  return false;
 else
  return true; 
}
export default User;
