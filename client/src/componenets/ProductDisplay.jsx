import React, { useContext } from 'react';
import { shoppingCartContext } from '../context/shoppingCartContext';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

const ProductDisplay = props => {
    const { addToCart } = useContext(shoppingCartContext)
    const { product } = props
    const { title, description, brand, price, image } = product

    return (
        <Card>
            <CardHeader
                title={ title }
                subheader={ brand }
                action={ <Typography fontWeight="bold">${ price / 100 }</Typography> }
            />
            <CardMedia
                component="img"
                height="260"
                image={ image }
                alt={ title }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    { description }
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Box display="flex" justifyContent="space-between" width="100%">
                    <Button variant="outlined" startIcon={ <AddIcon /> } onClick={ () => addToCart(product) }>Add to cart</Button>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </Box>
            </CardActions>
        </Card>
    )
}

export default ProductDisplay