import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import {useHistory} from "react-router-dom"
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {PlayCircleFilledWhite} from '@material-ui/icons';
import './LoginSignup.css';
import {apiRegister} from '../../api/auth';
import Cookies from "js-cookie"
import Loader from "../Loader/Loader"
import {showSuccessToastNotification, showToastNotification} from "../ToastNotification"

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    multilineColor: {
        color: 'white',

        autoComplete: 'off'
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "white !important",
        color: 'white',
        autoComplete: 'off',

    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const history = useHistory()
    const [loader, setLoader] = useState(false);

    const signup = async () => {
        setLoader(true)
        apiRegister(state).then((resp) => {
            setLoader(false)
            if (resp.status === 200) {
                showSuccessToastNotification(resp.data.message)
                history.push("/homepage")
            } else {
                showToastNotification(resp.data.message)
                setState(prevState => prevState)
            }

        })
    }

    const [state, setState] = useState(
        {
            email: "",
            name: "",
            pwd: "",
            cpwd: "",
            phone: 0,
            college: "",
            year: 0,
            dept: ""
        }
    );

    useEffect(() => {
        if (Cookies.get('token') !== undefined && Cookies.get('details') !== undefined) {
            history.push("/")
        } else {
            Cookies.remove('token')
            Cookies.remove('details')
        }

        return () => {

        };
    }, []);

    return (
        <>
            {loader && <Loader/>}
            <div className="SignIn" style={{display: loader ? 'none' : 'block'}}>
                <Container component="main" maxWidth="xs" className="SignIn">
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <AccountCircleIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField InputLabelProps={{
                                        style: {color: 'white'},
                                    }}
                                               InputProps={{
                                                   autoComplete: 'off',
                                                   classes: {
                                                       input: classes.notchedOutline,
                                                       notchedOutline: classes.notchedOutline
                                                   }
                                               }}

                                               variant="outlined"
                                               required
                                               fullWidth
                                               label="Name"
                                               type="text"
                                               autoComplete='off'
                                               color="white"
                                               onChange={(event) => {
                                                   //color="white",
                                                   setState(
                                                       {
                                                           ...state,
                                                           name: event.target.value
                                                       }
                                                   );
                                               }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField InputLabelProps={{
                                        style: {color: 'white'},
                                    }}
                                               InputProps={{
                                                   autoComplete: 'off',
                                                   classes: {
                                                       input: classes.notchedOutline,
                                                       notchedOutline: classes.notchedOutline
                                                   }
                                               }}
                                               variant="outlined"
                                               required
                                               fullWidth
                                               type="text"
                                               label="Email Address"
                                               autoComplete='off'
                                               onChange={(event) => {
                                                   setState(
                                                       {
                                                           ...state,
                                                           email: event.target.value
                                                       }
                                                   );
                                               }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField InputLabelProps={{
                                        style: {color: 'white'},
                                    }}
                                               InputProps={{
                                                   classes: {
                                                       input: classes.notchedOutline,
                                                       notchedOutline: classes.notchedOutline
                                                   }
                                               }}
                                               variant="outlined"
                                               required
                                               fullWidth
                                               label="Phone Number"
                                               autoComplete='off-auto-complete'
                                               type="number"
                                               onChange={(event) => {
                                                   setState(
                                                       {
                                                           ...state,
                                                           phone: event.target.value
                                                       }
                                                   );
                                               }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField InputLabelProps={{
                                        style: {color: 'white'},
                                    }}
                                               InputProps={{
                                                   autoComplete: 'off',
                                                   classes: {
                                                       input: classes.notchedOutline,
                                                       notchedOutline: classes.notchedOutline
                                                   }
                                               }}
                                               variant="outlined"
                                               required
                                               fullWidth
                                               label="College Name"
                                               autoComplete="off-auto-complete"
                                               type="text"
                                               onChange={(event) => {
                                                   setState(
                                                       {
                                                           ...state,
                                                           college: event.target.value
                                                       }
                                                   );
                                               }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField InputLabelProps={{
                                        style: {color: 'white'},
                                    }}
                                               InputProps={{
                                                   classes: {
                                                       input: classes.notchedOutline,
                                                       notchedOutline: classes.notchedOutline
                                                   }
                                               }}
                                               variant="outlined"
                                               required
                                               fullWidth
                                               label="Department"
                                               autoComplete="off-auto-complet"
                                               type="text"
                                               onChange={(event) => {
                                                   setState(
                                                       {
                                                           ...state,
                                                           dept: event.target.value
                                                       }
                                                   );
                                               }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField InputLabelProps={{
                                        style: {color: 'white'},
                                    }}
                                               InputProps={{
                                                   classes: {
                                                       input: classes.notchedOutline,
                                                       notchedOutline: classes.notchedOutline
                                                   }
                                               }}
                                               variant="outlined"
                                               required
                                               fullWidth
                                               label="Year of study"
                                               autoComplete="off-auto-complet"
                                               type="number"
                                               onChange={(event) => {
                                                   setState(
                                                       {
                                                           ...state,
                                                           year: event.target.value
                                                       }
                                                   );
                                               }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField InputLabelProps={{
                                        style: {color: 'white'},
                                    }}
                                               InputProps={{
                                                   classes: {
                                                       input: classes.notchedOutline,
                                                       notchedOutline: classes.notchedOutline
                                                   }
                                               }}
                                               variant="outlined"
                                               required
                                               fullWidth
                                               label="Password"
                                               type="password"
                                               autoComplete='off-auto-complet'
                                               onChange={(event) => {
                                                   setState(
                                                       {
                                                           ...state,
                                                           pwd: event.target.value
                                                       }
                                                   );
                                               }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField InputLabelProps={{
                                        style: {color: 'white'},
                                    }}
                                               InputProps={{
                                                   classes: {
                                                       input: classes.notchedOutline,
                                                       notchedOutline: classes.notchedOutline
                                                   }
                                               }}
                                               variant="outlined"
                                               required
                                               fullWidth
                                               label="Confirm Password"
                                               type="password"
                                               autoComplete='off-auto-complet'
                                               onChange={(event) => {
                                                   setState(
                                                       {
                                                           ...state,
                                                           cpwd: event.target.value
                                                       }
                                                   );
                                               }}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={(event) => {
                                    signup()
                                }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link onClick={() => history.push("/login")} variant="body2" color="#5e454b"
                                          style={{cursor: 'pointer'}}>
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </div>


        </>
    );
}