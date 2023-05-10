import React from "react";
/** Import External Libraries */
import {Box, Container, Grid} from "@mui/material";

/**
 * Import Custom Components
 * */
import OrderSummary from "../../components/OrderSummary";

/** Import utilities */

function BillingDetails() {
    return (
        <Container>
            <Box sx={{pt: {xs: 2, md: 4}}}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={8}>

                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <OrderSummary actionTitle="Pay Now"/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

// apply custom styles using sx
const customStyles = {}

export default BillingDetails;