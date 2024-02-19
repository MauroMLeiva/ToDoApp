import { Label } from '@mui/icons-material';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export const DrawerLabelItem = ({ label, click }) => {
    return (
        <ListItemButton sx={{ pl: 4 }} onClick={() => click(label)}>
            <ListItemIcon>
                <Label /* style={{ color: 'blue' }} */ />
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};
