import { Avatar, Container, Paper, Typography, Box, TextField, Button, Link, Divider } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";
import Grid from '@mui/material/Grid2'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit =async (event)=>{
        event.preventDefault();

        setError(null);
        if(!userName || !password){
            setError("All Fields are mandatory");
            return;
        }
        
        try {
            const res = await fetch("https://innate-backend.onrender.com/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ userName, password })
            })

            if(!res.ok){
                const errorData = await res.json();
                setError(errorData.message || "Failed to Sign In, try again later");
            }
            if(res.ok){
                setUserName("");
                setPassword("");
                console.log("Sign in successful");
                navigate("/")
            }
        } catch (error) {
            console.error("Failed to sign in");
        }      
    }

    const handleGoogleSignIn = () => {
        console.log("Sign in with Google");
        // Implement Google sign-in logic here
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{ margin: 8, padding: 2}}>
                <Avatar 
                    sx={{
                        mx: "auto",
                        bgcolor: "secondary.main",
                        textAlign: "center",
                        mb: 1
                    }}
                >
                    <LockOutlinedIcon/>
                </Avatar>

                <Typography component="h1" variant='h5' sx={{textAlign: 'center'}}>
                    Sign In
                </Typography>

                
                {error&& (
                    <Typography color="error" variant="body2" sx={{ mb: 2, padding: '8px', backgroundColor: '#f8d7da', borderRadius: '4px' }}>
                        {error}
                    </Typography>
                )}
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}> 
                    <TextField label="Username" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder='Enter Username' fullWidth required autoFocus sx={{mb:2}}/>
                    <TextField label="Password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' fullWidth required type='password' sx={{mb:2}}/>
                    
                    <Button type='submit' variant='contained' fullWidth sx={{mt:1}}>
                        Sign In
                    </Button>
                </Box>
                <Grid container justifyContent={'space-between'} sx={{mt: 1}}>
                    <Grid item>
                        <Link component={RouterLink} to="/forgetPassword" aria-label="Forgot password">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link component={RouterLink} to="/signup" aria-label="Sign Up">
                            Sign Up
                        </Link>
                    </Grid>
                </Grid>
                <Box display="flex" alignItems="center" sx={{ my: 2 }}>
                    <Divider sx={{ flexGrow: 1 }} />
                    <Typography sx={{ mx: 2, color: "gray" }}>OR</Typography>
                    <Divider sx={{ flexGrow: 1 }} />
                </Box>
                <Button 
                    variant="outlined" 
                    fullWidth 
                    sx={{ mt: 2 }} 
                    onClick={handleGoogleSignIn}
                >
                    Sign in with Google
                </Button>
                <Button 
                    component={RouterLink} to="/"
                    variant="outlined" 
                    fullWidth 
                    sx={{ mt: 2 }} 
                >
                    Continue Without Sign In
                </Button>
            </Paper>
        </Container>
    )
}

export default SignIn