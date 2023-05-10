import React, {useEffect, useState} from "react";
/** Import External Libraries */
import {Box, Container, Grid, Typography} from "@mui/material";
import axios from "axios";

/**
 * Import Custom Components
 * */
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";

/** Import utilities */


function Home() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get("/data/products.json").then((res) => {
            setProducts(res.data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Container>
            <Box sx={{pt: {xs: 2, md: 4}}}>
                <Grid container spacing={{xs: 2, md: 4}}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h1"
                            fontSize={18}
                            fontWeight="bold"
                            component="div"
                        >
                            Shop Products
                        </Typography>
                    </Grid>
                    {
                        products.map((product: any) => (
                            <Grid item xs={12} sm={6} md={3} key={product.id}>
                                <ProductCard product={product}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    )
}

// apply custom styles using sx
const customStyles = {}

export default Home;