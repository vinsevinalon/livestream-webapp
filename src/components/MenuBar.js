import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import { CssBaseline } from '@mui/material';
import Button from '@mui/material/Button';
import { Link, Outlet } from 'react-router-dom';
import StreamList from './StreamList';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    backgroundColor: '#0F0B46',
    color: '#FB2961',
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const theme = createTheme({
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: 'pink',
                    color: 'red',
                    boxSizing: 'border-box',
                    width: drawerWidth,
                },
            },
        },
    },
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

export default function MenuBar({ data }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [currentStreamers] = useState(1);
    const [postsPerPage] = useState(6);

    const indexLastStreamer = currentStreamers * postsPerPage;
    const indexFirstStreamer = indexLastStreamer - postsPerPage;
    const currentActiveStreamers = data.slice(
        indexFirstStreamer,
        indexLastStreamer
    );

    return (
        <>
            <AppBar
                position="fixed"
                open={open}
                sx={{
                    backgroundColor: '#0F0B46',
                    color: '#FB2961',
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Kumu
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                open={open}
                PaperProps={{
                    sx: {
                        backgroundColor: '#0F0B46',
                        color: 'orange',
                    },
                }}
            >
                <DrawerHeader>
                    <IconButton
                        onClick={handleDrawerClose}
                        sx={{
                            color: '#FB2961',
                        }}
                    >
                        {theme.direction === 'rtl' ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List
                    sx={{
                        backgroundColor: '#0F0B46',
                        color: '#FB2961',
                    }}
                >
                    {currentActiveStreamers.map((users, index) => (
                        <ListItem
                            button
                            key={index}
                            component={Link}
                            to={`/streamerslist/${users.channel_id}`}
                        >
                            <ListItemIcon>
                                <Avatar
                                    sx={{ bgcolor: red[500] }}
                                    aria-label="recipe"
                                    sx={{ width: 24, height: 24 }}
                                    src={users.avatar}
                                ></Avatar>
                            </ListItemIcon>
                            <ListItemText primary={users.nickname} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
            <Box sx={{ display: 'flex' }}>
                <StreamList data={data} />
            </Box>
        </>
    );
}
