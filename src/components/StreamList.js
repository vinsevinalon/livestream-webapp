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
import Badge from '@mui/material/Badge';
import { CardActionArea } from '@mui/material';
import SignIn from './SignIn';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    card: {
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        bottom: '385px',
        left: '25px',
    },
};

export default function StreamList({ data }) {
    const [visible, setVisible] = useState(11);

    const showMoreStreams = (data) => {
        setVisible((prevValue) => prevValue + 5);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Outlet />
                <h2>STREAMER LIST</h2>
                <Grid
                    container
                    spacing={{ xs: 2, md: 4, lg: 8 }}
                    columns={{ xs: 1, sm: 2, md: 4, lg: 10 }}
                >
                    {data.slice(1,visible).map((users, index) => (
                        <Grid item xs={2} sm={4} md={2} key={index}>
                            <Card
                                key={index}
                                variant="outlined"
                                sx={{ borderColor: '#FB2961' }}
                            >
                                <CardActionArea
                                    component={Link}
                                    to={`/streamerslist/${users.channel_id}`}
                                >
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={users.cover_image}
                                    />
                                    <Badge
                                        badgeContent={users.audience_count}
                                        max={999}
                                        sx={styles.overlay}
                                        color="secondary"
                                        overlap="circular"
                                    ></Badge>
                                    <CardContent
                                        sx={{
                                            backgroundColor: '#0F0B46',
                                            color: '#FB2961',
                                        }}
                                    >
                                        <Typography variant="h6">
                                            @{users.username}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="#FB2961"
                                        >
                                            {users.nickname}
                                        </Typography>
                                        <CardActions></CardActions>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box textAlign="center" sx={{ mt: 5}}>
                    <Button variant="contained" onClick={showMoreStreams}>
                        Show More
                    </Button>
                </Box>
            </Box>
        </>
    );
}
