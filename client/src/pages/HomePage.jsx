import React, { useEffect, useState } from 'react';
import { fetchProductData } from '../dataFetching';
import Layout from '../componenets/Layout';
import ProductDisplay from '../componenets/ProductDisplay';
import { Box } from '@mui/material';

const HomePage = () => {
    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetchProductData()
        .then(response => setProductData(response.data))
        .catch(error => console.log('error: ', error))
    }, [])

    return (
        <Layout>
            <Box width={ 1 } display="flex" flexDirection="column" alignItems="center">
                {productData.map(product =>
                    <Box m={ 4 } key={ product.title } width="375px" maxWidth="100%">
                        <ProductDisplay product={ product } />
                    </Box>
                )}
            </Box>
        </Layout>
    )
}

export default HomePage