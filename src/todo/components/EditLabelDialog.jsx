import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { startDeletingLabel } from '../../store/taskThunks';

export const EditLabelDialog = ({ dialogOpen, setDialogOpen, content }) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        setDialogOpen(false);
    };

    const handleEdit = () => {
        console.log('Edited label');
    };

    const handleDelete = () => {
        dispatch(startDeletingLabel(content.id));
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
                    console.log(label);

                    handleClose();
                },
            }}
        >
            <DialogTitle>Edit Label</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    required
                    margin='dense'
                    id='label'
                    name='label'
                    label='Type a name'
                    defaultValue={content.label}
                    type='string'
                    fullWidth
                    variant='standard'
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleDelete}>Delete</Button>
                <Button onClick={handleEdit}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};
