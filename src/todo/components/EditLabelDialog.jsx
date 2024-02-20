import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { startDeletingLabel } from '../../store/taskThunks';

export const EditLabelDialog = ({ dialogOpen, setDialogOpen, content }) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        setDialogOpen(false);
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
            <DialogTitle>Delete Label?</DialogTitle>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleDelete}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
};
