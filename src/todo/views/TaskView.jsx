import { Delete, Save } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Input } from '@mui/material';

export const TaskView = () => {
    return (
        <Card
            sx={{
                margin: {
                    xs: '0px 10px',
                    columns3: '20px 40px',
                } /* backgroundColor: 'labels.green' */,
            }}
        >
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Input
                    placeholder='Title'
                    variant='plain'
                    sx={{
                        margin: { xs: '20px', columns: '20px 60px 0px 60px' },
                        '--Input-radius': '0px',

                        '&:hover': {
                            borderColor: 'neutral.outlinedHoverBorder',
                        },
                        '&::before': {
                            border: '1px solid var(--Input-focusedHighlight)',
                            transform: 'scaleX(0)',
                            left: 0,
                            right: 0,
                            bottom: '-2px',
                            top: 'unset',
                            transition:
                                'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                            borderRadius: 0,
                        },
                    }}
                />

                <Input
                    placeholder='Task to complete...'
                    variant='plain'
                    multiline
                    minRows={6}
                    sx={{
                        margin: { xs: '20px', columns: '40px 60px 40px 60px' },
                        '--Input-radius': '0px',

                        '&:hover': {
                            borderColor: 'neutral.outlinedHoverBorder',
                        },
                        '&::before': {
                            border: '1px solid var(--Input-focusedHighlight)',
                            transform: 'scaleX(0)',
                            left: 0,
                            right: 0,
                            bottom: '-2px',
                            top: 'unset',
                            transition:
                                'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                            borderRadius: 0,
                        },
                    }}
                />
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-evenly' }}>
                <Button size='large' sx={{ color: 'black', mb: 2 }}>
                    <Save sx={{ mr: 1 }} />
                    Save
                </Button>

                <Button size='large' sx={{ color: 'black', mb: 2 }}>
                    <Delete sx={{ mr: 1 }} />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};
