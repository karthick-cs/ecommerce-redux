import React from "react";
/** Import External Libraries */
import {useNavigate} from "react-router-dom";
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useSelector} from "react-redux";
/**
 * Import Custom Components
 * */
import ShoppingCartCard from "./ShoppingCartCard";
import OrderSummary from "../../components/OrderSummary";


/** Import utilities */

function ShoppingCart() {
    const cartItems = useSelector((state: any) => state.root.cartItems);
    const navigate = useNavigate();

    return (
        <Container>
            <Box sx={{pt: {xs: 2, md: 4}}}>
                {
                    cartItems.length === 0 && (
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            sx={{minHeight: '80vh'}}
                        >
                            <Typography>Your Cart Empty!</Typography>
                        </Stack>
                    )
                }

                {
                    cartItems.length > 0 && (
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={8}>
                                <Grid container spacing={{xs: 2, md: 4}}>
                                    {
                                        cartItems.map((cartItem: any) => (
                                            <Grid item xs={12} key={cartItem.id}>
                                                <ShoppingCartCard product={cartItem}/>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <OrderSummary url="/billing-details"/>
                            </Grid>
                        </Grid>
                    )
                }

                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate("/")}
                    startIcon={<ArrowBackIcon/>}
                    sx={{mt: 2}}
                >
                    Continue Shopping
                </Button>

            </Box>
        </Container>
    )
}

// apply custom styles using sx
const customStyles = {}

export default ShoppingCart;