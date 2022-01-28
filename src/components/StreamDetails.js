import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

export default function StreamDetails({ data }) {
    const { channel_id } = useParams();

    return (
        <>
            {data
                .filter((users) => users.channel_id === channel_id)
                .map((users, i) => (
                    <div key={i}>
                        <Card sx={{ maxWidth: 345 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={users.cover_image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {users.username}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {users.nickname}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
        </>
    );
}
