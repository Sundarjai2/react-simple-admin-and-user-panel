import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { BrowserRouter as Router, NavLink, useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import logoPath from '../../image/logo.png';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { useStyles } from '../../style/style';
import SigninForm from './SigninForm';


export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const loggedUser = JSON.parse(localStorage.getItem('userLoginData'));
  let setLogin;
  if(loggedUser == null)
    setLogin = false;
  else
    setLogin = true;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();

  const logoutHandle = () => {
    localStorage.removeItem('userLoginData');
    setLogin = false;
    history.push("/");
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Container fixed>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              <img src={logoPath} alt="pagename" className={classes.logo} style={{ marginTop: "1%" }}></img>
            </Typography>
            <List>
              <NavLink to="/" exact activeClassName="activeTab" className={classes.menuLink}>
                Home
            </NavLink>
              <NavLink to="/products" activeClassName="activeTab" className={classes.menuLink}>
                Products
            </NavLink>
              <NavLink to="/academia" activeClassName="activeTab" className={classes.menuLink}>
                Academia
            </NavLink>
              <NavLink to="/healthcare" activeClassName="activeTab" className={classes.menuLink}>
                Healthcare
            </NavLink>
              <NavLink to="/careers" activeClassName="activeTab" className={classes.menuLink}>
                Careers
            </NavLink>
              <NavLink to="/about" activeClassName="activeTab" className={classes.menuLink}>
                About Us
            </NavLink>
            </List>
            {/* <Button className={classes.menuLink, classes.signinBtn} href="/login" >Sign In</Button> */}
            {/* onClick={handleClickOpen} */}
            {setLogin? <Typography variant="body1" color="textPrimary">{loggedUser.email} <Button className={classes.menuLink,classes.signinBtn} onClick={logoutHandle}> Logout</Button></Typography>: <Button className={classes.menuLink, classes.signinBtn}  href="/login">Sign In</Button>}
          </Toolbar>
        </Container>
      </AppBar>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          {/* <SigninForm className={classes.marginBT}></SigninForm> */}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
