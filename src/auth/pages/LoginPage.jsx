import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
    Alert,
    Button,
    Grid,
    Link,
    TextField,
    Typography,
} from '@mui/material';
import { Google } from '@mui/icons-material';

import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../AuthLayout';
import {
    startGoogleSignIn,
    startLoginwithEmailPassword,
} from '../../store/authThunks';

const formData = {
    email: '',
    password: '',
};

export const LoginPage = () => {
    const { status, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm(formData);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(startLoginwithEmailPassword({ email, password }));
    };

    const onGoogleSignIn = (event) => {
        event.preventDefault();
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout title='Sign In'>
            <form
                onSubmit={onSubmit}
                className='animate__animated animate__fadeIn animate__faster'
            >
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Email'
                            type='email'
                            placeholder='email@adress.com'
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Password'
                            type='password'
                            placeholder='*********'
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid
                        container
                        display={!!errorMessage ? '' : 'none'}
                        item
                        xs={12}
                        sx={{ mt: 1 }}
                    >
                        <Alert severity='error'>{errorMessage}</Alert>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12}>
                            <Button
                                disabled={isAuthenticating}
                                type='submit'
                                variant='contained'
                                fullWidth
                            >
                                <Typography sx={{ ml: 1 }}>Sign in</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                disabled={isAuthenticating}
                                onClick={onGoogleSignIn}
                                variant='contained'
                                fullWidth
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>
                                    Sign in with Google
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Link
                            component={RouterLink}
                            color='inherit'
                            to='/auth/signup'
                        >
                            Create a new Account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
