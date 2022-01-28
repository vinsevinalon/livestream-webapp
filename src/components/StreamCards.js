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

export default function StreamCards({data}) {
    return (
        <>
            {data.map((users, index) => (
                <Grid item xs={2} sm={4} md={2} key={index}>
                    <Card key={index}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={users.cover_image}
                        />
                        <CardContent
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={users.nickname}
                        >
                            <CardActions>
                                <Avatar
                                    sx={{ width: 30, height: 30, mr: 2 }}
                                    aria-label="recipe"
                                    src={users.avatar}
                                    name="Hello"
                                ></Avatar>
                                <Typography variant="subtitle1" component="h6">
                                    <Link to={`/streamerslist/${users.channel_id}`}>
                                        {users.nickname}
                                    </Link>
                                </Typography>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </>
    );
}
