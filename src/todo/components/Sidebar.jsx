import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Button } from '@mui/material';
import { DrawerContent } from './DrawerContent';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store/authThunks';

const drawerWidth = 240;

export const Sidebar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const dispatch = useDispatch();

    const { displayName } = useSelector((state) => state.auth);
    const { filter } = useSelector((state) => state.task);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const handleLogout = () => {
        dispatch(startLogout());
    };

    return (
        <Box>
            <AppBar
                position='fixed'
                sx={{
                    zIndex: 10000,
                }}
            >
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        noWrap
                        component='div'
                        sx={{
                            flexGrow: 1,
                            fontSize: { xs: '18px', sm: '32px' },
                        }}
                    >
                        {displayName}'s {filter} Todos
                    </Typography>

                    <Button
                        sx={{
                            fontSize: { xs: '14px', sm: '16px' },
                        }}
                        color='inherit'
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Box
                component='nav'
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label='mailbox folders'
            >
                <Drawer
                    variant='temporary'
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        flexShrink: 0,
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    <Toolbar />
                    {
                        <DrawerContent
                            close={true}
                            setIsClosing={setIsClosing}
                            setMobileOpen={setMobileOpen}
                        />
                    }
                </Drawer>
                <Drawer
                    variant='permanent'
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    <Toolbar />
                    {
                        <DrawerContent
                            close={false}
                            setIsClosing={setIsClosing}
                            setMobileOpen={setMobileOpen}
                        />
                    }
                </Drawer>
            </Box>
        </Box>
    );
};
