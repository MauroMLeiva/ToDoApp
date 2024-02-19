import { useState } from 'react';
import {
    Add,
    Assignment,
    AssignmentTurnedIn,
    Delete,
    ExpandLess,
    ExpandMore,
    PendingActions,
} from '@mui/icons-material';
import {
    Collapse,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/taskSlice';
import { DrawerLabelItem } from './DrawerLabelItem';
import { startNewTask } from '../../store/taskThunks';

export const DrawerContent = ({ close, setMobileOpen, setIsClosing }) => {
    const [open, setOpen] = useState(true);
    const { labels } = useSelector((state) => state.task);
    const dispatch = useDispatch();

    const handleClick = () => {
        setOpen(!open);
    };

    const handleAddLabel = () => {
        if (close) {
            setIsClosing(true);
            setMobileOpen(false);
        }
    };

    const handleStartTask = () => {
        if (close) {
            setIsClosing(true);
            setMobileOpen(false);
        }

        dispatch(startNewTask());
    };

    const handleSetFilter = (filter) => {
        dispatch(setFilter(filter));
    };

    return (
        <List sx={{ height: '100vh' }}>
            <ListItemButton
                sx={{ marginTop: '20px' }}
                onClick={handleStartTask}
            >
                <ListItemIcon>
                    <Add />
                </ListItemIcon>
                <ListItemText>New task</ListItemText>
            </ListItemButton>

            <Divider sx={{ margin: '20px' }} />

            <ListItemButton onClick={() => handleSetFilter('all')}>
                <ListItemIcon>
                    <Assignment />
                </ListItemIcon>
                <ListItemText>All tasks</ListItemText>
            </ListItemButton>

            <ListItemButton onClick={() => handleSetFilter('pending')}>
                <ListItemIcon>
                    <PendingActions />
                </ListItemIcon>
                <ListItemText>Pending</ListItemText>
            </ListItemButton>

            <ListItemButton onClick={() => handleSetFilter('done')}>
                <ListItemIcon>
                    <AssignmentTurnedIn />
                </ListItemIcon>
                <ListItemText>Done</ListItemText>
            </ListItemButton>

            <ListItemButton onClick={() => handleSetFilter('archived')}>
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
                    <ListItemButton sx={{ pl: 4 }} onClick={handleAddLabel}>
                        <ListItemIcon>
                            <Add />
                        </ListItemIcon>
                        <ListItemText primary='New label' />
                    </ListItemButton>

                    {/* DYNAMICALLY RENDER LIST WITH USER CREATED LABELS */}
                    {labels.map((label) => (
                        <DrawerLabelItem
                            key={label}
                            label={label}
                            click={handleSetFilter}
                        />
                    ))}
                </List>
            </Collapse>
        </List>
    );
};
