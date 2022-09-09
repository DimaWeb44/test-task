import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Article({article}: any) {
    return (
        <Card sx={{width: 345, marginTop: '20px'}}>
            <CardMedia component="img" height="140" image={article.img}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                </Typography>
                <Typography color="text.secondary">
                    {article.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article.text}
                </Typography>
            </CardContent>
        </Card>
    )
}