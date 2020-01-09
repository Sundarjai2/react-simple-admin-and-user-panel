import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormLabel from '@material-ui/core/FormLabel';
import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup
} from "@material-ui/core";
import Container from '@material-ui/core/Container';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import Header from '../commoncomponent/header';
import Content from '../homecomponent/content';
import ContactUs from '../homecomponent/contactus';
import Footer from '../commoncomponent/footer';


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 240,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 240,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    MT1:{
        marginTop: theme.spacing(2)
    }
})

const GET_USERS = gql`
query user($userId: String){
    user(id: $userId){
        _id
        name
        email
        role
        isAuth
        password
    }
  }
`;

const UPDATE_USER = gql`
    mutation editUser(
        $id: String!,
        $name: String!,
        $email: String!,
        $role: String!,
        $password: String!,
        $isAuth: String!) {
        editUser(
        id: $id,
        name: $name,
        email: $email,
        role: $role,
        password: $password,
        isAuth: $isAuth){
            name
        }
    }
`;



class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedAuth: "", selectRole: ""};
        // selectedRole: "", selectedUser: ""
    }

    getUserComplete = data => {
        this.setState({ selectedAuth: data.user.isAuth, selectRole: data.user.role });
        // console.log(data.student.gender) selectedRole: data.user.role, selectedUser: data.user._id
    }

    handleChange = ev => {
        this.setState({ selectedAuth: ev.target.value });
    };
    handleChangeRole = event => {
        this.setState({ selectRole: event.target.value });
    };
    render() {
        const { selectedAuth, selectRole } = this.state;
        const { classes } = this.props;

        let name, roll, email, isAuth;
        return (
            <Query query={GET_USERS} variables={{ userId: this.props.match.params.id }} onCompleted={this.getUserComplete}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    return (
                        <Mutation mutation={UPDATE_USER} key={data.user._id} onCompleted={() => this.props.history.push(`/`)}>
                            {(editUser, { loading, error }) => (
                                <div className="container">
                                    <Header></Header>
                                    <Container fixed className={classes.MT1}>
                                    <AppBar position="static">
                                        <Toolbar>
                                            <Typography variant="h6">
                                                Edit {data.user.name} - Details
                                            </Typography>
                                        </Toolbar>
                                    </AppBar>
                                    {/* <div className="buttonBadge"><Button variant="contained" color="default" href="/" className={"backBtn"} >Home</Button></div> */}
                                    <div className="panel-body">

                                        <form onSubmit={e => {
                                            e.preventDefault();
                                            editUser({ variables: { id: data.user._id, name: this.name.value, email: this.email.value, password: data.user.password, role: this.state.selectRole, isAuth: this.state.selectedAuth } });
                                            this.name.value = "";
                                            this.email.value = "";
                                            this.selectedAuth = "";
                                        }}>
                                            {/* InputProps={{ readOnly: true, }} */}
                                            <TextField required type="text" label="Name" defaultValue={data.user.name} className={classes.textField} margin="normal" inputRef={el => this.name = el} /><br />
                                            <TextField required label="Email" defaultValue={data.user.email} className={classes.textField} margin="normal" inputRef={el => this.email = el} /><br />
                                            
                                            <FormControl required className={classes.formControl}>
                                                <InputLabel htmlFor="role-native-required">Role</InputLabel>


                                                <NativeSelect value={this.state.selectRole}
                                                    onChange={this.handleChangeRole}
                                                    name="role"
                                                    inputProps={{
                                                        id: 'role-native-required',
                                                    }}>
                                                    <React.Fragment>
                                                        <option value="" ></option>
                                                        <option value="1" >Admin</option>
                                                        <option value="2" >User</option>
                                                    </React.Fragment>
                                                </NativeSelect>


                                            </FormControl><br />

                                            <div>
                                                <FormControl component="fieldset" className={classes.formControl}>
                                                    <FormLabel type="number" component="legend">Is Authenticated</FormLabel>
                                                    <RadioGroup aria-label="isauth" name="isauth" onChange={this.handleChange} value={this.state.selectedAuth}>
                                                        {/* value={value} onChange={handleChange} */}
                                                        <FormControlLabel
                                                            value="true"
                                                            control={<Radio color="primary" />}
                                                            label="Yes"
                                                            labelPlacement="start"
                                                        />
                                                        <FormControlLabel
                                                            value="false"
                                                            control={<Radio color="primary" />}
                                                            label="No"
                                                            labelPlacement="start"
                                                        />
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                           
                                            <Button variant="contained" color="primary" type="submit" className="btn btn-success">Submit</Button>
                                        </form>
                                        {loading && <p>Loading...</p>}
                                        {error && <p>Error :( Please try again ) </p>}
                                    </div>
                                    </Container>
                                </div>
                            )}
                        </Mutation>
                    );
                }}
            </Query>
        );
    }
}
export default withStyles(styles)(withRouter(Edit));