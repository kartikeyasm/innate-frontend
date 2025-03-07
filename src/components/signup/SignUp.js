import { Avatar, Container, Paper, Typography, Box, TextField, Button, Link, Divider } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";
import Grid from '@mui/material/Grid2'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [fullname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit =async (event)=>{
        event.preventDefault();
        setError(null);
        if(!fullname || !email || !phone || !password || !confirmpassword){
            setError("All Fields are mandatory");
            return;
        }
        try {
            const res = await fetch("https://innate-backend.onrender.com/api/v1/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({fullname, email, phone, password, confirmpassword})
            })

            if(!res.ok){
                const errorData = await res.json();
                setError(errorData.message || "Failed to Sign Up");
            }
            if(res.ok){
                setName("");
                setEmail('');
                setMobile('');
                setPassword('');
                setConfirmPassword('');
                console.log(res);
                console.log("Sign in successful"); 
                navigate("/")
                /* TO DO */
            }
            

        } catch (error) {
            console.error("Failed to sign in, Try again later");
        } 
    }

    const handleGoogleSignIn = () => {
        console.log("Sign in with Google");
        // Implement Google sign-in logic here
    };

    return (
        <Container maxWidth="xs" sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
            <Paper elevation={10} sx={{padding: 3, borderRadius: 3, boxShadow: 5, maxWidth: 400, width: "100%", backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center", gap: 2}}>
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
                    Sign Up
                </Typography>
    
                {error&& (
                    <Typography color="error" variant="body2" sx={{ mb: 2, padding: '8px', backgroundColor: '#f8d7da', borderRadius: '4px' }}>
                        {error}
                    </Typography>
                )}
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}> 
                    <TextField label="Full Name" value={fullname} onChange={(e)=>setName(e.target.value)} placeholder='Enter Full Name' fullWidth required autoFocus sx={{mb:2}}/>
                    <TextField label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email Id' fullWidth required sx={{mb:2}}/>
                    <TextField label="Mobile" value={phone} onChange={(e)=>setMobile(e.target.value)} placeholder='Enter Mobile No.' fullWidth required sx={{mb:2}}/>
                    <TextField label="Password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' fullWidth required type='password' sx={{mb:2}}/>
                    <TextField label="Confirm Password" value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm Password' fullWidth required type='password' sx={{mb:2}}/>
                    <Button type='submit' variant='contained' fullWidth sx={{mt:1}}>
                        Sign Up
                    </Button>
                </Box>
                <Grid container justifyContent={'space-between'} sx={{mt: 1}}>
                    <Grid item>
                        <Link component={RouterLink} to="/auth/signin">
                            Already have account, Sign In
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

export default SignUp
