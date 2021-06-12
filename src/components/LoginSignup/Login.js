import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './Login.css';
import 'src/api/auth.js'
import { apiForgotPassword, apiSignin } from '../../api/auth';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor : "#121212",
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
    multilineColor:{
        color:'white',
    },
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "white !important",
      color:'white'
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
  const classes = useStyles();
  const [state,setState] = useState(
    {
      email : "",
      pwd : "",
    }
  );
  return (
    <div className="SignIn">
    <Container component="main" maxWidth="xs" className="SignIn">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField   InputLabelProps={{
                      style: { color: 'white' },
                      }}
            InputProps={{
              classes: {
                  input: classes.notchedOutline,
                  notchedOutline : classes.notchedOutline
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
                          email : event.target.value
                      }
                      );}}
          />
          <TextField InputLabelProps={{
                      style: { color: 'white' },
                      }}
            InputProps={{
              classes: {
                  input: classes.notchedOutline,
                  notchedOutline : classes.notchedOutline
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
                      pwd : event.target.value
                  }
                  );}}
          />
  
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event) => {apiSignin(state)}}
          >
            Sign In
          </Button>
          
       
          <Grid container>
            <Grid item xs color="#5e454b">
              <Link onClick={(event) => {apiForgotPassword(state)}} variant="body2" color="#5e454b">
                {'Forgot password?'}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2" color="#5e454b">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
    </div>
  );
}