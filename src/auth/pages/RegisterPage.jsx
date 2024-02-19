import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Alert,
    Button,
    Grid,
    Link,
    TextField,
    Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { startCreatingUserWithEmailPassword } from '../../store/auth';
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../AuthLayout';

const formData = {
    email: '',
    password: '',
    displayName: '',
};

const formValidations = {
    email: [(value) => value.includes('@'), 'Email must be valid'],
    password: [
        (value) => value.length >= 6,
        'Password must be at least 6 characters long',
    ],
    displayName: [(value) => value.length >= 1, 'Name must be valid'],
};

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector((state) => state.auth);
    const isCheckingAuthentication = useMemo(
        () => status === 'checking',
        [status]
    );

    const {
        email,
        password,
        onInputChange,
        displayName,
        formState,
        isFormValid,
        displayNameValid,
        emailValid,
        passwordValid,
    } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        // dispatch(startCreatingUserWithEmailPassword(formState));
    };

    return (
        <AuthLayout title='Create Account'>
            <form
                onSubmit={onSubmit}
                className='animate__animated animate__fadeIn animate__faster'
            >
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Username'
                            type='text'
                            placeholder='John Doe'
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={formSubmitted && displayNameValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label='Email'
                            type='email'
                            placeholder='email@adress.com'
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={formSubmitted && emailValid}
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
                            error={!!passwordValid && formSubmitted}
                            helperText={formSubmitted && passwordValid}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid
                            display={!!errorMessage ? '' : 'none'}
                            item
                            xs={12}
                        >
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                disabled={isCheckingAuthentication}
                                type='submit'
                                variant='contained'
                                fullWidth
                            >
                                <Typography sx={{ ml: 1 }}>
                                    Create Account
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>Have an account?</Typography>
                        <Link
                            component={RouterLink}
                            color='inherit'
                            to='/auth/login'
                        >
                            Sign in
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
