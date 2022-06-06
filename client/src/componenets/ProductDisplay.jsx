import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add'

function ProductDisplay(props) {
    const { product: {title, description, brand, price, image} } = props
    return (
        <Card>
            <CardHeader
            action= {
                <Typography>${price / 100}</Typography>
            }
            title={title}
            subheader={brand}
            />
            <CardMedia
                component="img"
                height="310"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Box display="flex" justifyContent="space-between" width="100%">
                    <Button variant='outlined' startIcon={<AddIcon />}>Add to cart</Button>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </Box>
            </CardActions>
        </Card>
    )
}

export default ProductDisplay