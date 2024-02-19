import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { startNewLabel } from '../../store/taskThunks';

export const LabelDialog = ({ dialogOpen, setDialogOpen }) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        setDialogOpen(false);
    };

    return (
        <Dialog
            open={dialogOpen}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const label = formJson.label;
                    dispatch(startNewLabel(label));

                    handleClose();
                },
            }}
        >
            <DialogTitle>Label name</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    required
                    margin='dense'
                    id='label'
                    name='label'
                    label='Type a name'
                    type='string'
                    fullWidth
                    variant='standard'
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type='submit'>Create</Button>
            </DialogActions>
        </Dialog>
    );
};
