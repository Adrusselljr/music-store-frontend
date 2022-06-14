import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ADD_TO_CART = 'ADD_TO_CART'

const ProductDisplay = props => {
    const dispatch = useDispatch()
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
                    <Button variant="outlined" startIcon={ <AddIcon /> } onClick={ () => dispatch({ type: ADD_TO_CART, payload: { product: product } }) }>Add to cart</Button>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </Box>
            </CardActions>
        </Card>
    )
}

export default ProductDisplay