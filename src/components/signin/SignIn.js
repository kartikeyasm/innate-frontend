import { Avatar, Container, Paper, Typography, Box, TextField, Button, Link, Divider } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";
import Grid from '@mui/material/Grid2'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit =async (event)=>{
        event.preventDefault();
        let phone = "1234567999";
        setError(null);
        if(!email || !password){
            setError("All Fields are mandatory");
            return;
        }
        
        try {
            const res = await fetch("https://innate-backend.onrender.com/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ email, phone, password })
            })

            if(!res.ok){
                const errorData = await res.json();
                setError(errorData.message || "Failed to Sign In, try again later");
            }
            if(res.ok){
                setEmail("");
                setPassword("");
                console.log(res);
                console.log("Sign in successful");
                navigate("/");
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
        <Container maxWidth="xs" sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <Paper elevation={10} sx={{padding: 3, borderRadius: 3, boxShadow: 5, maxWidth: 400, width: "100%", backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center", gap: 2}}>
                <Avatar 
                    sx={{
                        bgcolor: "secondary.main",
                        textAlign: "center",
                        mb: 1,
                        width: 56, 
                        height: 56
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
                    <TextField label="Email/Mobile No" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email/Mobile No.' fullWidth required autoFocus sx={{mb:2}}/>
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