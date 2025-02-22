import React, { useState } from 'react'
import { Avatar, Container, Paper, Typography, Box, TextField, Button, Link } from '@mui/material'
import Grid from '@mui/material/Grid2'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import {Link as RouterLink} from 'react-router-dom'

function ForgetPassword() {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");

    const handleSubmit = (event)=>{

    }


    return (
        <>
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
                        Forget Password
                    </Typography>

                    
                    {error&& (
                        <Typography color="error" variant="body2" sx={{ mb: 2, padding: '8px', backgroundColor: '#f8d7da', borderRadius: '4px' }}>
                            {error}
                        </Typography>
                    )}
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}> 
                        <TextField label="Email/Mobile No" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email/Mobile No.' fullWidth required autoFocus sx={{mb:2}}/>
                        <Button type='submit' variant='contained' fullWidth sx={{mt:1}}>
                            Send Reset Link
                        </Button>
                    </Box>
                    <Grid container justifyContent={'space-between'} sx={{mt: 1}}>
                        <Grid item>
                            <Link component={RouterLink} to="/auth/signin" aria-label="Sign Up">
                                Back to Login
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    )
}

export default ForgetPassword