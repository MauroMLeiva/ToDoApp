import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{
                minHeight: '100dvh',
                padding: 4,
            }}
        >
            <Grid
                container
                alignItems='center'
                justifyContent='center'
                item
                xs={3}
                sx={{
                    backgroundColor: 'background.paper',
                    padding: 3,
                    borderRadius: 2,
                    width: { sm: 450 },
                    boxShadow: '0px 0px 10px 2px black',
                }}
            >
                <Typography
                    variant='h3'
                    sx={{
                        mb: 1,
                    }}
                >
                    {title}
                </Typography>

                {children}
            </Grid>
        </Grid>
    );
};
