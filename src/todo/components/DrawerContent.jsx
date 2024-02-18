import { useState } from 'react';
import {
    Add,
    Assignment,
    Delete,
    ExpandLess,
    ExpandMore,
    Label,
    Logout,
    PriorityHigh,
} from '@mui/icons-material';
import {
    Collapse,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

export const DrawerContent = () => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List sx={{ height: '100vh' }}>
            <ListItemButton sx={{ marginTop: '20px' }}>
                <ListItemIcon>
                    <Add />
                </ListItemIcon>
                <ListItemText>New task</ListItemText>
            </ListItemButton>

            <Divider sx={{ margin: '20px' }} />

            <ListItemButton>
                <ListItemIcon>
                    <Assignment />
                </ListItemIcon>
                <ListItemText>All tasks</ListItemText>
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                    <PriorityHigh />
                </ListItemIcon>
                <ListItemText>Important</ListItemText>
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                    <Delete />
                </ListItemIcon>
                <ListItemText>Archived</ListItemText>
            </ListItemButton>

            <Divider sx={{ margin: '20px' }} />

            <ListItemButton onClick={handleClick}>
                <ListItemText inset>Labels</ListItemText>

                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                    {/* DYNAMICALLY RENDER LIST WITH USER CREATED LABELS */}

                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <Label style={{ color: 'blue' }} />
                        </ListItemIcon>
                        <ListItemText primary='Label 1' />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <Label />
                        </ListItemIcon>
                        <ListItemText primary='Label 2' />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <Label />
                        </ListItemIcon>
                        <ListItemText primary='Label 3' />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
};
