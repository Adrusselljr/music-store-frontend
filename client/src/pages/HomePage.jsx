import React, { useState, useEffect } from 'react'
import Layout from '../componenets/Layout'
import { Box } from '@mui/material'
import { fetchProductData } from '../dataFetching'
import ProductDisplay from '../componenets/ProductDisplay'

const HomePage = () => {
    const [productData, setProductData] = useState([])
    
    useEffect(() => {
        fetchProductData()
        .then(data => setProductData(data))
        .catch(err => console.log('error: ', err))
    }, [])
    console.log(productData)

    return (
        <Layout>
            <Box width={1} display="flex" flexDirection="column" alignItems="center">
                {productData.map(product => <Box width="375px" maxWidth="100%" m={4} key={product.id}><ProductDisplay product={product}/></Box>)}
            </Box>
        </Layout>
    )
}

export default HomePage