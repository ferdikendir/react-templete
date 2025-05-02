import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@hooks';
import { Button, Checkbox, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { IconifyIcon } from '@shared/components';


const LoginPage = () => {

    const { login } = useAuth();

    const [email, setEmail] = useState('fkendir');

    const [emailStatus, setEmailStatus] = useState<"" | "warning" | "error" | undefined>('');

    const [password, setPassword] = useState('fkendir');

    const [passwordStatus, setPasswordStatus] = useState<"" | "warning" | "error" | undefined>('');

    const [rememberMe, setRememberMe] = useState(true);

    const navigate = useNavigate();

    const handleLogin = async () => {

        if (!email || !password) {
            setEmailStatus(!email ? 'error' : undefined);
            setPasswordStatus(!password ? 'error' : undefined);
            return;
        }

        setEmailStatus('');
        setPasswordStatus('');

        await login(email, password);
    };

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (
        <>
            <TextField
                id="outlined-error-helper-text"
                label="Username"
                variant='outlined'
                className='w-full h-[80px]'
                helperText={emailStatus === 'error' ? 'Please enter your username' : ''}
                value={email}
                required
                error={emailStatus === 'error'}
                onChange={(e) => setEmail(e.target.value)} />

            <FormControl variant="outlined" className='w-full !mt-4  h-[80px]' >

                <InputLabel htmlFor="outlined-adornment-password" error={passwordStatus === 'error'}>Password</InputLabel>

                <OutlinedInput
                    className='w-full'
                    required
                    aria-describedby="outlined-weight-helper-text"
                    value={password}
                    id="outlined-adornment-password"
                    error={passwordStatus === 'error'}
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={
                                    showPassword ? 'hide the password' : 'display the password'
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                            >
                                <IconifyIcon icon={showPassword ? 'ic:twotone-visibility-off' : 'ic:twotone-visibility'} />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />

                {passwordStatus === 'error' && <FormHelperText id="outlined-weight-helper-text" error={passwordStatus === 'error'}> Please enter your password</FormHelperText>}

            </FormControl>

            <div className='flex flex-row items-center justify-between'>

                <div className='flex flex-row items-center'>
                    <Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} style={{ color: 'var(--primary)' }} />
                    <span>Remember Me</span>
                </div>

                <a onClick={() => navigate('/auth/forgot-password')} className='cursor-pointer' style={{ color: 'var(--primary)' }}>Forgot Password?</a>

            </div>

            <Button variant='contained' className='!mt-4 w-full bg-primary !font-bold' onClick={() => handleLogin()}>Login</Button>

        </>
    );

};

export default LoginPage;
