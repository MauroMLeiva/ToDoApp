import { Delete, Label } from '@mui/icons-material';
import {
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { EditLabelDialog } from './EditLabelDialog';
import { useState } from 'react';

export const DrawerLabelItem = ({ label, click }) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    return (
        <ListItem
            secondaryAction={
                <IconButton onClick={handleDialogOpen}>
                    <Delete />
                </IconButton>
            }
            disablePadding
        >
            <EditLabelDialog
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                content={label}
            />
            <ListItemButton sx={{ pl: 4 }} onClick={() => click(label.label)}>
                <ListItemIcon>
                    <Label />
                </ListItemIcon>
                <ListItemText primary={label.label} />
            </ListItemButton>
        </ListItem>
    );
};
