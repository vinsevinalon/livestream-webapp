import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link, Outlet } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { CardActionArea } from '@mui/material';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
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
