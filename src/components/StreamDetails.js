import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';

export default function StreamDetails({ data }) {
    const { channel_id } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <Container maxWidth="xs" sx={{ height: '100%' }}>
                <Button variant="outlined" onClick={() => navigate(-1)}>
                    Back
                </Button>
                {data
                    .filter((users) => users.channel_id === channel_id)
                    .map((users, i) => (
                        <div key={i}>
                            <Card sx={{ maxWidth: 500, maxHeight: 800, m: 1 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="500"
                                        image={users.cover_image}
                                        alt="green iguana"
                                    />
                                    <CardContent
                                        sx={{
                                            backgroundColor: '#0F0B46',
                                            color: '#FB2961',
                                        }}
                                    >
                                        <Grid container spacing={2}>
                                            <Grid item xs={4}>
                                                <Badge
                                                    badgeContent={users.audience_count}
                                                    max={999}
                                                    color="primary"
                                                >
                                                    <Avatar
                                                        sx={{
                                                            bgcolor: red[500],
                                                        }}
                                                        aria-label="recipe"
                                                        sx={{
                                                            width: 50,
                                                            height: 50,
                                                        }}
                                                        src={users.avatar}
                                                    ></Avatar>
                                                </Badge>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={8}
                                                sx={{ textAlign: 'center' }}
                                            >
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                >
                                                    {users.username}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {users.nickname}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    ))}
            </Container>
        </>
    );
}
