import React, {useContext, useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import {useHistory} from "react-router-dom"
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './LoginSignup.css';
import {apiForgotPassword, apiSignin} from '../../api/auth';
import Cookies from "js-cookie"
import Loader from "../Loader/Loader"
import {AuthContext, SetAuthContext} from "../../App"
import {showSuccessToastNotification, showToastNotification} from "../ToastNotification"

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "#121212",
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    multilineColor: {
        color: 'white',
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "white !important",
        color: 'white'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    googlesignin: {
        margin: theme.spacing(0, 0, 2),
    },
}));

export default function Login() {

    const Auth = useContext(AuthContext);
    const SetAuth = useContext(SetAuthContext);

    const history = useHistory()
    const classes = useStyles();

    const [loader, setLoader] = useState(false);
    const [state, setState] = useState(
        {
            email: "",
            pwd: "",
        }
    );

    const login = async () => {
        setLoader(true)
        apiSignin(state).then((resp) => {
            console.log(resp)
            setLoader(false)
            if (resp.status === 200) {
                SetAuth(true)
                Cookies.set("token", resp.data.token)
                Cookies.set("details", JSON.stringify({
                    name: resp.data.name,
                    email: resp.data.email,
                    phone: resp.data.phone,
                    college: resp.data.college,
                    dept: resp.data.dept,
                    year: resp.data.year
                }))
                showSuccessToastNotification("Logged In Successfully")
                history.push("/homepage")
            } else {
                // Show Toast
                showToastNotification(resp.data.message)
            }

        })
    }

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
            <div style={{display: loader && 'none'}} className="SignIn">
                <Container component="main" maxWidth="xs" className="SignIn">
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
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
                                       margin="normal"
                                       required
                                       fullWidth
                                       label="Email Address"
                                       autoComplete='off-auto-complet'
                                       onChange={(event) => {
                                           setState(
                                               {
                                                   ...state,
                                                   email: event.target.value
                                               }
                                           );
                                       }}
                            />
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
                                       margin="normal"
                                       required
                                       fullWidth
                                       label="Password"
                                       type="password"
                                       autoComplete='off-auto-complele'
                                       onChange={(event) => {
                                           setState(
                                               {
                                                   ...state,
                                                   pwd: event.target.value
                                               }
                                           );
                                       }}
                            />

                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={(event) => {
                                    login()
                                }}
                            >
                                Sign In
                            </Button>


                            <Grid container>
                                <Grid item xs color="#5e454b">
                                    <Link onClick={(event) => {
                                        apiForgotPassword(state)
                                    }} variant="body2" color="#5e454b"
                                          style={{cursor: 'pointer'}}>
                                        {'Forgot password?'}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link onClick={() => history.push("/signup")} variant="body2"
                                          color="#5e454b" style={{cursor: 'pointer'}}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>

                </Container>
            </div>

        </>

    )
        ;
}