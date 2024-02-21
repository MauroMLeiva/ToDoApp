import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { startDeletingLabel, startUpdatingLabel } from '../../store/taskThunks';
import { useState } from 'react';

export const EditLabelDialog = ({ dialogOpen, setDialogOpen, content }) => {
    const dispatch = useDispatch();
    const currentLabel = content.label;
    const [labelContent, setLabelContent] = useState(content.label);

    const handleClose = () => {
        setDialogOpen(false);
    };

    const handleEdit = () => {
        const newLabel = { id: content.id, labelContent, old: currentLabel };

        dispatch(startUpdatingLabel(newLabel));
        handleClose();
    };

    const handleDelete = () => {
        dispatch(startDeletingLabel(content));
    };

    return (
        <Dialog
            open={dialogOpen}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                    handleEdit();
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
                    value={labelContent}
                    onChange={(value) => {
                        setLabelContent(value.target.value);
                    }}
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
