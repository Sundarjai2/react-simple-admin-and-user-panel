import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import pageLogo from '../../image/footer-logo.png';
import { useStyles } from '../../style/footer';



export default function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            {/* Footer */}
            <Typography component="div" style={{ backgroundColor: '#f5f5f5', height: 'auto', borderBottom: '1px solid #767676' }} >
                <Container maxWidth="md" component="footer" className={classes.footer}>
                    <Grid container spacing={4} justify="space-evenly">
                        <Grid item xs={6} sm={3} >
                            <Link color="textPrimary" variant="subtitle1" href="/">
                                <img src={pageLogo} alt="pagelogo" className={classes.logo}></img>
                            </Link>
                        </Grid>
                    </Grid>
                    <Typography variant="h5" color="textSecondary" align="center">
                        530-638-3375 <Link href="/" variant="body1" className={classes.link}>service@RiskandSafetySolutions.com</Link>
                    </Typography>
                    <Box mt={3}>
                        <Grid container spacing={4} justify="space-evenly">
                            <Grid className={classes.socialGrid}>
                                <Link href="/" variant="body1"  className={classes.Twitter}> </Link>
                                <Link href="/" variant="body1"  className={classes.Linkedin}> </Link>
                            </Grid>

                        </Grid></Box>
                    {/* <Typography variant="body2" color="textSecondary" align="center">
                    <div className={classes.Twitter}></div>
                    <div className={classes.Linkedin}></div>
                </Typography> */}

                    <Box mt={3}>
                        <Typography variant="body2" color="textSecondary" align="center">
                            {'Copyright © '}
                            <Link color="inherit" href="/" className={classes.allPolicy}>
                                All rights reserved
                    </Link><br />
                            <Link color="inherit" href="/" className={classes.privacyPolicy}>
                                Privacy Policy
                    </Link>
                        </Typography>
                        {/* <Copyright /> */}
                    </Box>
                </Container></Typography>
            {/* End footer */}
        </React.Fragment>
    );
}