import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ReCAPTCHA from "react-google-recaptcha";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(5, 0),
    },
    message: {
        background: '#f5f5f5',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    titleHeader: {
        color: '#696969',
        fontWeight: 600,
        fontSize: '36px',
        // margin: theme.spacing(),
    },
    noEvents: {
        color: '#696969',
    },
    sendMgsBtn: {
        background: '#1e88e5',
        color: '#FFFFFF',
        textTransform: "none",
        fontSize: '18px',
        fontWeight: 500,
        //   margin: theme.spacing(0,2),
        "&:hover": {
            background: "#000000"
        },
    },
    contentDiv: {
        // margin: theme.spacing(5,0),
    }
}));

function onChange(value) {
    console.log("Captcha value:", value);
}

export default function SignInSide() {
    const classes = useStyles();

    return (
        <Typography component="div" style={{ backgroundColor: '#f5f5f5', height: 'auto', borderBottom: '1px solid #767676' }} >
            <Container component="main">
                <Grid container component="main" className={classes.root}>
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7} >
                        <Typography component="h1" variant="h2" className={classes.titleHeader}>
                            Events
                    </Typography>
                        <Typography component="p" variant="body1" className={classes.noEvents}>
                            No upcoming events.
                    </Typography>

                    </Grid>
                    <Grid item xs={12} sm={8} md={5} elevation={6}>
                        <div >
                            <Typography component="h1" variant="h2" className={classes.titleHeader}>
                                Contact Us
                        </Typography>
                            <form className={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    name="name"
                                    label="Name"
                                    type="text"
                                    id="name"
                                />

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"

                                />

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    name="subject"
                                    label="Subject"
                                    type="text"
                                    id="subject"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    multiline
                                    rows="3"
                                    name="message"
                                    label="Your Message"
                                    type="text"
                                    id="message"
                                />
                                <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.sendMgsBtn}
                                >
                                    Send Message
                            </Button>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    );
}