import React from 'react';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


// import Grow from '@material-ui/core/Grow';

import businessNeedImg from '../../image/business-need.png';
import bundleSolutionImg from '../../image/bundle-solution.png';
import productDeliveredImg from '../../image/product-delivered.png';
import higherEducationImg from '../../image/higher-education.png';
import employeeSafetyImg from '../../image/employee-health-and-safety.png';


const useStyles = makeStyles(theme => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
        },
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    subTitleImg: {
        fontWeight: 500,
        fontSize: '18px',
        color: '#696969',
    },
    pTagStyle: {
        color: '#696969',
        fontSize: '25px',
        lineHeight: '30px',

    },
    contentDiv: {
        marginTop: theme.spacing(10),
        background: '#ffffff',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },

    titleHeader: {
        color: '#696969',
        fontWeight: 600,
        fontSize: '36px',
        margin: theme.spacing(2),
    },
    subContainer: {
        margin: theme.spacing(5, 0),
    },
    higherEducationImgClass: {
        width: '100%',
    },
    demoBtn: {
        background: '#1e88e5',
        color: '#FFFFFF',
        textTransform: "none",
        fontSize: '18px',
        fontWeight: 500,
        margin: theme.spacing(0, 2),
        "&:hover": {
            background: "#000000"
        },
    },
    marginTB: {
        margin: theme.spacing(5, 0)
    },
    setImage: {

    },


}));

export default function Pricing() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container component="main" className={classes.contentDiv}>
                <Typography variant="h1" component="h2" align="center" className={classes.titleHeader}>
                    Why us? One Solution
                </Typography>
                <Typography variant="body1" component="p" align="center" className={classes.pTagStyle}>
                    Our clients have a wide range of business challenges. We meet those challenges with a diverse <br /> collection of applications integrated into one solution.
                </Typography>
                {/* Three Images */}
                <Grid container spacing={3} alignItems="flex-end" className={classes.subContainer}>
                    <Grid item xs>
                        <div className={classes.cardOne} align="left">
                            <Typography variant="body1" color="inherit" noWrap className={classes.imageSets}>
                                <img alt="demo" src={businessNeedImg} className={classes.setImage} style={{ marginTop: "1%" }}></img>
                                {/* <p className={classes.subTitleImg}>Business need</p> */}
                            </Typography>
                            <Typography variant="body1" color="inherit" className={classes.subTitleImg}> Business need</Typography>

                        </div>
                    </Grid>
                    <Grid item xs>

                        <div className={classes.cardTwo} align="center">
                            <Typography variant="body1" color="inherit" noWrap className={classes.imageSets}>
                                <img src={bundleSolutionImg} alt="demo" className={classes.setImage} style={{ marginTop: "1%" }}></img>
                            </Typography>
                            <Typography variant="body1" color="inherit" paragraph className={classes.subTitleImg}> Bundle solution</Typography>

                        </div>
                    </Grid>
                    <Grid item xs>
                        <div className={classes.cardThree} align="right">
                            <Typography variant="body1" color="inherit" noWrap className={classes.imageSets}>
                                <img src={productDeliveredImg} alt="demo" className={classes.setImage} style={{ marginTop: "1%" }}></img>
                            </Typography>
                            <Typography variant="body1" color="inherit" className={classes.subTitleImg}>Product delivered</Typography>

                        </div>
                    </Grid>
                </Grid>

                <Typography variant="h1" component="h2" align="center" className={classes.titleHeader}>
                    Crafting EH&S Solutions That Meet Your Business Needs
                </Typography>
                <Typography variant="body1" component="p" align="center" className={classes.pTagStyle}>
                    Our suite of flexible, integrated tools streamlines your tasks for a safer, more efficient workplace.
                </Typography>

                <Grid container spacing={3} className={classes.marginTB}>
                    <Grid item xs={8}>
                        <img src={higherEducationImg} alt="demo" className={classes.higherEducationImgClass}></img>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h1" component="h2" align="left" className={classes.titleHeader}>
                            Environmental <br /> Health and Safety
                </Typography>
                        <Typography variant="body1" component="p" align="left" className={classes.pTagStyle} style={{ padding: "16px" }}>
                            Our tools are used in a wide range of university laboratories and private research facilities
                </Typography>
                        <Button className={classes.demoBtn} style={{ padding: "5px 20px" }}>Request more info or a demo</Button>
                    </Grid>
                </Grid>

                <Grid container spacing={3} >

                    <Grid item xs={4}>
                        <Typography variant="h1" component="h2" align="left" className={classes.titleHeader}>
                            Risk Management
                </Typography>
                        <Typography variant="body1" component="p" align="left" className={classes.pTagStyle} style={{ padding: "16px" }}>
                            Products to assist you in reducing the chance and cost of loss and protecting your resources
                </Typography>
                        <Button className={classes.demoBtn} style={{ padding: "5px 20px" }}>Request more info or a demo</Button>
                    </Grid>
                    <Grid item xs={8}>
                        <img src={employeeSafetyImg} alt="demo" className={classes.higherEducationImgClass}></img>
                    </Grid>
                </Grid>

            </Container>
        </React.Fragment >
    );
}